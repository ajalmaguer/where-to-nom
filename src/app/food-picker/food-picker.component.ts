import { Component, OnInit } from '@angular/core';
import { FoodListService, Restaurant } from '../food-list.service'

@Component({
	selector: 'nom-food-picker',
	templateUrl: './food-picker.component.html',
	styleUrls: ['./food-picker.component.css']
})
export class FoodPickerComponent implements OnInit {
	selection: Restaurant = {name: 'Where to nom?', list: null}
	options: Restaurant[]

	picking: boolean = false
	interval: number
	dInterval: number = 20
	count: number
	maxCount: number = 20

	beep: any = new Beep('/assets/beep.mp3')

	constructor(private listService: FoodListService) {
		
	}

	ngOnInit() {
		this.beep.load()
	}

	pickFood() {
		if (this.picking) return false
		this.picking = true

		console.log('picking food')
		this.options = this.listService.data.filter((restaurant) => {
			return restaurant.list == 'pick'
		})
		this.resetTimer()
		this.timer(()=> {})
	}

	resetTimer() {
		this.interval = 1
		this.count = 0
	}

	timer(callback) {
		this.interval += this.dInterval
		this.count++

		this.selection = this.getNewSelection()

		if (this.count < this.maxCount) {
			setTimeout(() => {
				this.timer(() => this.done())
			}, this.interval)
		} else {
			callback()
		}
	}

	done() {
		let delay = Math.random() * 2000
		setTimeout(() => {
			// set to result of api call
			console.log('done')
			this.picking = false

			this.selection = this.getNewSelection()
			this.listService.selectOption(this.selection)
		}, delay) 
	}

	getNewSelection() {
		let newSelection = this.options[Math.floor(Math.random()*this.options.length)]
		// console.log(this.selection, newSelection)
		for (var i=0; i < 3; i++ ) {
			if (this.selection == newSelection) {
				// console.log('pick again')
				newSelection = this.options[Math.floor(Math.random()*this.options.length)]
			}	
		}
		this.beep.play()
		return newSelection
	}

}

class Beep {
	sound1: any = new Audio()
	sound2: any = new Audio()
	sound3: any = new Audio()
	i: number = 0
	
	constructor(src: string) {
		this.sound1.src = src
		this.sound2.src = src
		this.sound3.src = src
	}

	load() {
		this.sound1.load()
		this.sound2.load()
		this.sound3.load()
	}

	play() {
		switch (this.i % 3) {
			case 0:
				this.sound1.load()
				this.sound1.play()
				break;
			case 1:
				this.sound2.load()
				this.sound2.play()
				break;
			case 2:
				this.sound3.load()
				this.sound3.play()
				break;
		}
		this.i++
	}
}
