import { Component, Input, OnInit} from '@angular/core';
import { AppService } from './shared/app.service';
import { IUser, User } from './shared/app.model';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
	@Input() user: IUser;


	constructor(private appService: AppService) {
		this.user = {
					id: 0,
					name: '',
					email: '',
					pitomnik: '',
					facebook: '',
					skype: '',
					phone: 0,
					city: '',
					bread: '',
					club: '',
					image: ''
				};	
	}

	ngOnInit() {
       let id = 1 ;
       this.appService.getUserID(id).then(user => this.user = user);
	}
	
	getUser(value: number): void {
		let id = value ;
        this.appService.getUserID(id).then(user => this.user = user);
	}
}