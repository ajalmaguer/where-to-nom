import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodPickerComponent } from './food-picker/food-picker.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodListService } from './food-list.service';
import { AddItemComponent } from './add-item/add-item.component';
import { NomFilterPipe } from './pipes/nom-filter.pipe';


@NgModule({
	declarations: [
		AppComponent,
		FoodPickerComponent,
		FoodListComponent,
		AddItemComponent,
		NomFilterPipe,
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
