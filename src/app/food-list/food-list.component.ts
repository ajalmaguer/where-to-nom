import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { FoodListService } from '../food-list.service'

@Component({
	selector: 'nom-food-list',
	templateUrl: './food-list.component.html',
	styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
	@Input() list: string[]
	@ViewChildren('itemInput') itemInputs

	constructor(private listService: FoodListService) { }

	ngOnInit() {
	}

	onBlur(i: number, item) {
		if (item.name == '') {
			this.listService.removeItem(item)
		}
		this.listService.saveData()
	}

	onKeyup(event) {
		if (event.keyCode == 13) {
			this.listService.addItem()
			setTimeout(() => {
				let self = this
				this.itemInputs.last.nativeElement.focus()
			}, 100) 
			
		}

	}


}
