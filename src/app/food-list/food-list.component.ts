import { Component, OnInit, Input } from '@angular/core';
import { FoodListService } from '../food-list.service'

@Component({
	selector: 'nom-food-list',
	templateUrl: './food-list.component.html',
	styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
	@Input() list: string[]

	constructor(private listService: FoodListService) { }

	ngOnInit() {
	}

	onBlur(i: number, item) {
		console.log('i =', i, 'item =', item)
		if (item.name == '') {
			console.log('blank')
			this.listService.removeItem(item)
		}
	}


}
