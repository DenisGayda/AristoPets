import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Ad } from './app.ad.model';
import { AppAdService } from './app.ad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { FileUploaderComponent } from '../file-uploader.component'

@Component({
  selector: 'app-ad',
  templateUrl: './app.ad.component.html',
  styleUrls: ['./app.ad.component.css']
})

export class AppAdComponent implements OnInit {


	ad: Ad;
    appAdService: AppAdService;

    
 

    
    constructor( appAdService: AppAdService,
                 private router: Router,
                 private route: ActivatedRoute
                ) {
        this.ad = {id: 0, idUser: 1, name: '', image: []};
        this.appAdService = appAdService;
 

	}


    ngOnInit() {
        let id = this.route.snapshot.params['id'] || 0;
        if(id) {
           this.appAdService.getAdID(id)
               .then(ad => this.ad = ad)
           }

    }

    
   

    setSrc(event: any){

        if(event.index == 'new') {
            console.log('new')

             this.ad.image.push(event.href);
        } else {
           this.ad.image[event.index] = event.href; 
        }
    }


    

    
    saveAd(value: Ad): void {

        this.ad.name = value.name ? value.name : this.ad.name;
        this.ad.idUser = 1;
        if(this.ad.id) {
            this.appAdService.updateAd(this.ad).then(() =>  this.router.navigate(['/ads']));
        } else {
            this.appAdService.createAd(this.ad).then(() =>  this.router.navigate(['/ads']));
        }
        
    }
    

    toggle(event: any, value: any ): void{
        event.preventDefault();
        this.saveAd(value); 
    }

    

}