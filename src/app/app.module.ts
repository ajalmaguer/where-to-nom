import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodPickerComponent } from './food-picker/food-picker.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodListService } from './food-list.service';
import { AddItemComponent } from './add-item/add-item.component'


@NgModule({
	declarations: [
		AppComponent,
		FoodPickerComponent,
		FoodListComponent,
		AddItemComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [
		FoodListService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
