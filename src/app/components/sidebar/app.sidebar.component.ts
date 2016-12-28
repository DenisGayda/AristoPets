import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../shared/app.model';
import { DomSanitizer } from '@angular/platform-browser'
import {AppUserService} from '../../shared/app.user.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html',
  styleUrls: ['./app.sidebar.component.css']
})

export class AppSidebarComponent implements OnInit{
	@Input() user: any;


	constructor(private sanitizer: DomSanitizer,
              private appUserService: AppUserService){
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
    this.appUserService.user.subscribe(res => this.user = res);
  }

	// skypeHref() {
	// 	let href = `skype:${this.user.skype}?call`;
	// 	return this.sanitizer.bypassSecurityTrustUrl(href);
	// }
}