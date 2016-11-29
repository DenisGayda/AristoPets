import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { User } from '../../../shared/app.model';
import { AppService } from '../../../shared/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../app.component';


@Component({
  selector: 'app-user-data',
  templateUrl: './app.user-data.component.html',
  styleUrls: ['./app.user-data.component.css'],
  inputs:['activeColor','baseColor','overlayColor']
})

export class AppUserComponent implements OnInit {
    user: User;
     @Output() onInited: EventEmitter<Number>;

    appService: AppService;

    loaded: boolean = false;
    imageLoaded: boolean = false;
    imageSrc: string = '';

    
    
    constructor(appService: AppService, private route: ActivatedRoute, private router: Router ) {

        this.onInited = new EventEmitter<Number>();
        this.appService = appService;
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
        }

    handleImageLoad() {
        this.imageLoaded = true;
    }
    
    handleInputChange(event: any) {
        var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();

        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }

        this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    
    _handleReaderLoaded(event: any) {
        var reader = event.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    }
        

    ngOnInit() {
        let id = 1;
 
        this.appService.getUserID(id).then(user => this.user = user);
    }

    saveUser(value: User): void {
        this.user.name = value.name ? value.name : this.user.name;
        this.user.city = value.city ? value.city : this.user.city;
        this.user.bread = value.bread ? value.bread : this.user.bread;
        this.user.club = value.club ? value.club : this.user.club;
        this.user.image = value.image ? value.image : this.user.image;
        this.user.skype = value.skype ? value.skype : this.user.skype;
        this.user.phone = value.phone ? value.phone : this.user.phone;
        this.user.pitomnik = value.pitomnik ? value.pitomnik : this.user.pitomnik;
        this.user.email = value.email ? value.email : this.user.email;

        this.appService.saveUser(this.user).then(value => console.log(value));
    }
    

    toggle(event: any, value: any ) {
        let id = 1;
        value.image = this.imageSrc;
        event.preventDefault();
        this.saveUser(value);
        this.onInit(id)
        this.router.navigate([''])
    } 
    onInit(id: number) {
      this.onInited.emit(id);
    }
}