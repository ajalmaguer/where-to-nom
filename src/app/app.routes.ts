import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayComponent } from './play/play.component';
import { HostComponent } from './host/host.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [

	{ path: '', component: HomeComponent },
	{ path: 'play', component: PlayComponent },
	{ path: 'host', component: HostComponent },
	{ path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }