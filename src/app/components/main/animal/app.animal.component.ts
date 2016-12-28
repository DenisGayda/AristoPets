import {Component, OnInit } from '@angular/core';
import {Animal, Breed} from '../../../shared/app.model';
import {AppUserService} from '../../../shared/app.user.service';
import {Router, ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-animal',
  templateUrl: './app.animal.component.html',
  styleUrls: ['./app.animal.component.css'],
})

export class AppAnimalComponent implements OnInit {
  animals: any;
  animal: Animal;
  breeds: Breed[];


  constructor(private appUserService: AppUserService,
              private router: Router,
              private route: ActivatedRoute) {
    this.animal = {
      name: '',
      birthday: '',
      club: '',
      gender: '',
      photos: [],
      nursery: '',
      readyToCopulation: false,
      titles: [],
      color: '',
      breedId: 0,
      moreInfo: ''
    };
  }


  ngOnInit() {
    this.appUserService.breeds
          .subscribe(res => {this.breeds = res});

    let id = this.route.snapshot.params['id'] || 0;
    if (id) {
      this.animal = this.appUserService.getAnimalById(id);
     }
  }
   setSrc(event: any) {
    if (event.index == 'new') {
      this.animal.photos.push(event.href);
    } else {
      this.animal.photos[event.index] = event.href;
    }
  }
  findBreedID(name: any): number {
    return this.breeds.filter(item => item.name === name)[0].id
  }

  toggle(event: any, value: any): boolean {
    event.preventDefault();
    this.animal.name = value.name ? value.name : this.animal.name;
    this.animal.birthday = value.birthday ? value.birthday : this.animal.birthday;
    this.animal.gender = value.gender ? value.gender : this.animal.gender;
    this.animal.titles = value.titles ? [value.titles] : [];
    this.animal.nursery = value.nursery ? value.nursery : this.animal.nursery;
    this.animal.readyToCopulation = value.readyToCopulation || false;
    this.animal.color = value.color ? value.color : this.animal.color;
    this.animal.breedId = this.findBreedID(value.breedId);
    this.animal.moreInfo = value.moreInfo ? value.moreInfo : this.animal.moreInfo;
    this.animal.club = value.club ? value.club : this.animal.club;

    if (this.animal.id) {
      this.appUserService.updateAnimal(this.animal).subscribe(() => this.router.navigate(['/home']));
    } else {
      this.appUserService.createAnimal(this.animal).subscribe(() => this.router.navigate(['/home']));
    }

    return false
  }
}