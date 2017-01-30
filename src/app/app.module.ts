import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routes'
import { AppComponent } from './app.component';
import { LocalStorageService } from './local-storage.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayComponent } from './play/play.component';
import { HostComponent } from './host/host.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		PlayComponent,
		HostComponent,
		HomeComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [
		LocalStorageService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
