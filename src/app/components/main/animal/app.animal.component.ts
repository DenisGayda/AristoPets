import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Animal } from './app.animal.model';
import { AppAnimalService } from './app.animal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { FileUploaderComponent } from '../file-uploader.component'


@Component({
  selector: 'app-animal',
  templateUrl: './app.animal.component.html',
  styleUrls: ['./app.animal.component.css'],
  inputs:['activeColor','baseColor','overlayColor']
})

export class AppAnimalComponent implements OnInit {
	animal: Animal;
    appAnimalService: AppAnimalService;

    imageSrc: string[];
    
    constructor( appAnimalService: AppAnimalService,
                 private router: Router,
                 private route: ActivatedRoute
                ) {
        this.animal = {
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
        };
        this.appAnimalService = appAnimalService;
        this.imageSrc = this.animal.image.slice();
        this.imageSrc.length += 1;
	}


    ngOnInit() {
        let id = this.route.snapshot.params['id'] || 0;
        if(id) {
           this.appAnimalService.getAnimalID(id)
               .then(animal => this.animal = animal)
               .then(res => this.imageSrc = this.animal.image.slice())
               .then(() => this.imageSrc.length += 1);
        }
    }

    setSrc(event: any){
         if(event.index == this.imageSrc.length-1) {
             this.animal.image.push(event.href);
             this.imageSrc.length += 1;

      }  
        else { 
            this.animal.image[event.index] = event.href;
            this.imageSrc[event.index] = event.href;
        }
    }

    

    
    
    saveAnimal(value: Animal): void {

        this.animal.name = value.name ? value.name : this.animal.name;
        this.animal.idUser = 1;
        this.animal.bread = value.bread ? value.bread : this.animal.bread;
        this.animal.sex = value.sex ? value.sex : this.animal.sex;
        this.animal.sexWork = value.sexWork;
        this.animal.color = value.color ? value.color : this.animal.color;
        this.animal.club = value.club ? value.club : this.animal.club;
        this.animal.description = value.description ? value.description : this.animal.description;
        if(this.animal.id) {
             this.appAnimalService.updateAnimal(this.animal).then(() =>  this.router.navigate(['/home']));
        } else {
            this.appAnimalService.createAnimal(this.animal).then(() =>  this.router.navigate(['/home']));
        }
        
    }
    

    toggle(event: any, value: any ): void{
        event.preventDefault();
        this.saveAnimal(value);
        
    } 

}