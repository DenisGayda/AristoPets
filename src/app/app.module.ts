
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppComponent } from './app.component';
import { AppMainComponent } from './components/main/app.main.component';
import { AppSidebarComponent } from './components/sidebar/app.sidebar.component';
import { AppUserComponent } from './components/main/user/app.user-data.component';
import { AppAdComponent } from './components/main/ad/app.ad.component';
import { AppAnimalComponent } from './components/main/animal/app.animal.component';
import { AppHomeComponent } from './components/main/home/app.home.component';
import { AppAdsComponent } from './components/main/ads/app.ads.component';
import { FileUploaderComponent } from './components/main/file-uploader.component';
import {AdvertItemsComponent} from './components/main/ad/advert-items/advert-items.component';

import { ApiService } from './shared/api.service';
import { AppUserService } from './shared/app.user.service';




import { AppRoutingModile } from './shared/app.routing.module';




@NgModule({
  imports: [ 
  	BrowserModule,
    ReactiveFormsModule,
    AppRoutingModile,
  	FormsModule,
    HttpModule,
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
    FileUploaderComponent,
    AdvertItemsComponent
  ],

  
  bootstrap: [AppComponent],
  providers: [ ApiService, AppUserService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
}) 

export class AppModule {}

