import { Component, OnInit } from '@angular/core';

import { Ad } from '../ad/app.ad.model';
import { AppAdService } from '../ad/app.ad.service';
import { Router, ActivatedRoute  } from '@angular/router';


import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './app.ads.component.html',
  styleUrls: ['./app.ads.component.css'],
  providers: [ NgbCarouselConfig ]
})

export class AppAdsComponent implements OnInit {
  ad: Ad;
  ads: Ad[];
  appAdService: AppAdService;

	
  
    constructor(appAdService: AppAdService, private router: Router, config: NgbCarouselConfig ) {
        this.appAdService = appAdService;
        this.ads = [];
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = false;
     }

     onSelect(ad: Ad) {
        this.router.navigate(['/ad', ad.id]);
      }
     ngOnInit() {
        let userId = 1;
        this.appAdService.getAd(userId).then(ad => this.ads = ad);
    }
    
}

