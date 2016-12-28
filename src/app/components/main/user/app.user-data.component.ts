import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/app.model';
import {AppUserService} from '../../../shared/app.user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-data',
  templateUrl: './app.user-data.component.html',
  styleUrls: ['./app.user-data.component.css'],
  inputs: ['activeColor', 'baseColor', 'overlayColor']
})

export class AppUserComponent implements OnInit {
  private user: User;


  constructor(private appUserService: AppUserService,
              private router: Router) {

    this.user = {
      userType: '',
      lastName: '',
      firstName: '',
      email: '',
      photo: '',
      club: '',
      nursery: '',
      phoneNumber: '',
      socials: '',
      contractOfSale: false
    }
  }


  ngOnInit() {
    this.appUserService.user.subscribe(res => {
      this.user = res
    });
  }

  setSrc(event: any) {
    this.user.photo = event.href;
  }

  toggle(value: any): boolean {
    console.log(`+${value.phoneNumber.replace(/\D/g, "")}`);
    debugger;
    this.user.lastName = value.lastName ? value.lastName : this.user.lastName;
    this.user.userType = value.userType ? value.userType : this.user.userType;
    this.user.firstName = value.firstName ? value.firstName : this.user.firstName;
    this.user.club = value.club ? value.club : this.user.club;
    this.user.email = value.email ? value.email : this.user.email;
    this.user.nursery = value.nursery ? value.nursery : this.user.nursery;
    this.user.phoneNumber = value.phoneNumber ? value.phoneNumber : this.user.phoneNumber;
    this.user.socials = value.socials;
    this.user.contractOfSale = value.contractOfSale ? value.contractOfSale : this.user.contractOfSale;

    this.appUserService.updateUser(this.user).subscribe(() => this.router.navigate(['']));

    return false;
  }
}