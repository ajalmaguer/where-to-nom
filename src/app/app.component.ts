import { Component, OnInit } from '@angular/core';
import { FoodListService } from './food-list.service'

@Component({
	selector: 'nom-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'nom works!';

	constructor(private listService: FoodListService) {}

	ngOnInit() {
		this.listService.loadData()
	}

}
