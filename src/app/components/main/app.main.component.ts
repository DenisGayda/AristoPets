import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { User } from '../../shared/app.model';
import { Animal } from './animal/app.animal.model';
import { AppSidebarComponent} from '../sidebar/app.sidebar.component';
import { AppService } from '../../shared/app.service';
import { AppAnimalService } from './animal/app.animal.service';
import { Router, ActivatedRoute,  } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './app.main.component.html',
  styleUrls: ['./app.main.component.css']
})

export class AppMainComponent {
	user: User;
  animals: Animal[];
  @Output() onInited: EventEmitter<Number>;
  

  

	
  
    constructor( 
      private appService: AppService,
      private appAnimalService: AppAnimalService,
      private route: ActivatedRoute,
      private router: Router 
      ) {
            router.events.subscribe(val => this.onInit(1))
            this.onInited = new EventEmitter<Number>();
            this.user = {
              id: 0,
              name: '',
              email: '',
              pitomnik: '',
              facebook: '',
              skype: '',
              phone: NaN,
              city: '',
              bread: '',
              club: '',
              image: ''
            };
            this.animals = [{
                id: 0,
                idUser: 1,
                name: '',
                image: [],
                bread: '',
                sex: '',
                sexWork: false,
                color: '',
                club: '',
                description: ''
            }];
            this.appService = appService;
        }

    ngOnInit() {
        let id = 1 ;
        this.appService.getUserID(id).then(user => this.user = user);
        this.appAnimalService.getAnimal(id).then(animals => this.animals = animals);
        
     }

    onInit(id: number) {
      this.onInited.emit(id);
    }


    
}