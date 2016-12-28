import {Component, OnInit} from '@angular/core';

import {Ad} from '../../../shared/app.model';
import {AppUserService} from '../../../shared/app.user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './app.ads.component.html',
  styleUrls: ['./app.ads.component.css']
})

export class AppAdsComponent implements OnInit {
  ad: Ad;
  ads: Ad[];


  constructor(private appUserService: AppUserService,
              private router: Router) {
    this.ads = [];
  }

  ngOnInit() {
    this.appUserService.adverts.subscribe(res => this.ads = res);
  }

  onSelect(ad: Ad) {
    this.router.navigate(['/ad', ad.id]);
  }

  onDelete(id: number): boolean {
    this.appUserService.deleteAdvert(id);
    return false
  }
}