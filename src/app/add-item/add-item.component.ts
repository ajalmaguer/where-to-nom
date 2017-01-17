import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../food-list.service'

@Component({
	selector: 'nom-add-item',
	templateUrl: './add-item.component.html',
	styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

	constructor(private list: FoodListService) { }

	ngOnInit() {
	}

}
