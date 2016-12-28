import {Component, OnInit} from '@angular/core';

import {Animal} from '../../../shared/app.model';
import {AppUserService} from '../../../shared/app.user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html',
  styleUrls: ['./app.home.component.css'],
})

export class AppHomeComponent implements OnInit {
  animal: Animal;
  animals: Animal[];


  constructor(private appUserService: AppUserService,
              private router: Router) {}

  ngOnInit() {
    this.appUserService.animals.subscribe(res => this.animals = res);
  }

  onSelect(animal: Animal) {
    this.router.navigate(['/animal', animal.id]);
  }

  onDelete(id: number): boolean {
    this.appUserService.deleteAnimal(id);
    return false
  }
}