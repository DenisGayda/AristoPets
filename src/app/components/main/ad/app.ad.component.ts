import { Component, OnInit } from '@angular/core';
import { Ad, advertItem, Breed } from '../../../shared/app.model';
import { AppUserService } from '../../../shared/app.user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad',
  templateUrl: './app.ad.component.html',
  styleUrls: ['./app.ad.component.css']
})

export class AppAdComponent implements OnInit {


  ad: Ad;
  advertItems: advertItem[];
  breeds: Breed[];

  constructor(private appUserService: AppUserService,
              private router: Router,
              private route: ActivatedRoute) {
    this.ad = {
      title: '',
      birthday: '',
      fParentRef: '',
      mParentRef: '',
      breedId: 0,
      fParentId: 0,
      mParentId: 0,
      photos: [],
      club: '',
      description: '',
      firstVaccination: '',
      secondVaccination: '',
      advertItems: []
    };
  }


  ngOnInit() {
    this.appUserService.breeds
      .subscribe(res => {
        this.breeds = res
      });
    let id = this.route.snapshot.params['id'] || 0;
    if (id) {
      this.ad = this.appUserService.getAdvertById(id);
    }
  }

  findBreedID(name: any): number {
    return this.breeds.filter(item => item.name === name)[0].id
  }

  setSrc(event: any): boolean {
    if (event.index == 'new') {
      this.ad.photos.push(event.href);
    } else {
      this.ad.photos[event.index] = event.href;
    }
    return false;
  }


  setItem(event: any): boolean {
    if (event.index == 'new') {
      this.ad.advertItems.push(event.item);
    } else {
      this.ad.advertItems[event.index] = event.item;
    }
    return false;
  }

  toggle(value: Ad): boolean {
    this.ad.title = value.title ? value.title : this.ad.title;
    this.ad.birthday = value.birthday ? value.birthday : this.ad.birthday;
    this.ad.fParentRef = value.fParentRef ? value.fParentRef : this.ad.fParentRef;
    this.ad.mParentRef = value.mParentRef ? value.mParentRef : this.ad.mParentRef;
    this.ad.club = value.club ? value.club : this.ad.club;
    this.ad.breedId = this.findBreedID(value.breedId);
    this.ad.firstVaccination = value.firstVaccination ? value.firstVaccination : this.ad.firstVaccination;
    this.ad.secondVaccination = value.secondVaccination ? value.secondVaccination : this.ad.secondVaccination;
    this.ad.description = value.description ? value.description : this.ad.description;

    if (this.ad.id) {
      this.appUserService.updateAdvert(this.ad).subscribe(() => this.router.navigate(['/ads']));
    } else {
      this.appUserService.createAdvert(this.ad).subscribe(() => this.router.navigate(['/ads']));
    }

    return false
  }
}