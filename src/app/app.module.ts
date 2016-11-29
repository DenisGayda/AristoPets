
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './shared/app.data';

import { AppComponent } from './app.component';
import { AppMainComponent } from './components/main/app.main.component';
import { AppSidebarComponent } from './components/sidebar/app.sidebar.component';
import { AppUserComponent } from './components/main/user/app.user-data.component';
import { AppAdComponent } from './components/main/ad/app.ad.component';
import { AppAnimalComponent } from './components/main/animal/app.animal.component';
import { AppHomeComponent } from './components/main/home/app.home.component';
import { AppAdsComponent } from './components/main/ads/app.ads.component';
import { FileUploaderComponent } from './components/main/file-uploader.component';


import { AppService } from './shared/app.service';
import { AppAnimalService } from './components/main/animal/app.animal.service';
import { AppAdService } from './components/main/ad/app.ad.service';


import { AppRoutingModile } from './shared/app.routing.module';




@NgModule({
  imports: [ 
  	BrowserModule,
    ReactiveFormsModule,
    AppRoutingModile,
  	FormsModule,
    NgbModule,
    HttpModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ], 
  declarations: [
  	AppComponent,
  	AppSidebarComponent,
  	AppMainComponent,
    AppUserComponent,
    AppAnimalComponent,
    AppAdComponent,
    AppHomeComponent,
    AppAdsComponent,
    FileUploaderComponent
  ],

  
  bootstrap: [AppComponent],
  providers: [ AppService, AppAnimalService, AppAdService, NgbModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
}) 

export class AppModule {}
