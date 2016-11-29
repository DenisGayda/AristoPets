import {Component, Input } from '@angular/core';
import { User } from '../../shared/app.model';
import { DomSanitizer } from '@angular/platform-browser'


@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html',
  styleUrls: ['./app.sidebar.component.css']
})

export class AppSidebarComponent {
	@Input() user: User;


	constructor(private sanitizer: DomSanitizer){

	}

	skypeHref() {
		let href = `skype:${this.user.skype}?call`;
		return this.sanitizer.bypassSecurityTrustUrl(href);
	}
}