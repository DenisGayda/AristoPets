import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppMainComponent } from '../components/main/app.main.component';
import { AppUserComponent } from '../components/main/user/app.user-data.component';
import { AppAdComponent } from '../components/main/ad/app.ad.component';
import { AppAnimalComponent } from '../components/main/animal/app.animal.component';
import { AppHomeComponent } from '../components/main/home/app.home.component';
import { AppAdsComponent } from '../components/main/ads/app.ads.component';

const routes: Routes = [
	{ path: '',	redirectTo: '/home', pathMatch: 'full'},
	{ path: '', component: AppMainComponent }
];

const child: Routes = [
	{ path: '', children: [
		{ path: 'home', component: AppHomeComponent },
		{ path: 'ads', component: AppAdsComponent },
    { path: 'user', component: AppUserComponent },
		{ path: 'animal', component: AppAnimalComponent },
		{ path: 'animal/:id', component: AppAnimalComponent },
		{ path: 'ad', component: AppAdComponent },
		{ path: 'ad/:id', component: AppAdComponent }
  	]}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes), RouterModule.forChild(child) ],
	exports: [ RouterModule ]
})

export class AppRoutingModile {}