import {Component, OnInit} from '@angular/core';
import {AppUserService} from './shared/app.user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private appUserService: AppUserService) {
  }

  ngOnInit() {
    this.appUserService.getUsers();
    this.appUserService.getBreeds();
  }
}
