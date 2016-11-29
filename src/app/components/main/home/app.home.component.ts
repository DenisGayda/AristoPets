import { Component, OnInit } from '@angular/core';

import { Animal } from '../animal/app.animal.model';
import { AppAnimalService } from '../animal/app.animal.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html',
  styleUrls: ['./app.home.component.css'],
  providers: [ NgbCarouselConfig ]
})

export class AppHomeComponent implements OnInit {
  animal: Animal;
  animals: Animal[];
  appAnimalService: AppAnimalService;

	
  
    constructor(appAnimalService: AppAnimalService, private router: Router, config: NgbCarouselConfig  ) {
        this.appAnimalService = appAnimalService;
        this.animals = [];
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = false;
     }

     onSelect(animal: Animal) {
        this.router.navigate(['/animal', animal.id]);
      }
     ngOnInit() {
        let userId = 1;
        this.appAnimalService.getAnimal(userId).then(animal => this.animals = animal);
    }
    
}