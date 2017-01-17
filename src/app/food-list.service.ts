import { Injectable } from '@angular/core';

@Injectable()
export class FoodListService {
	options: string[] = []
	eaten: string[] = []

	constructor() { }



	selectOption(option: string) {
		let i = this.options.indexOf(option)
		let selected: string
		if (i !== -1) {
			selected = this.options.splice(i,1)[0]
		} else {
			console.log('selected = ', selected)
		}

		this.eaten.push(selected)
		this.saveData()
	}

	saveData() {
		this.setItem('options', this.options)
		this.setItem('eaten', this.eaten)
	}

	loadData() {
		let options = this.getItem('options')
		console.log(options, options != null)
		if (options != null && typeof options.forEach == 'function') {
			options.forEach((item)=> {
				this.options.push(item)
			})
		}
		let eaten = this.getItem('eaten')
		console.log(eaten, eaten != null)
		if (eaten != null && typeof eaten.forEach == 'function') {
			eaten.forEach((item)=> {
				this.eaten.push(item)
			})
		}
		
	}

	resetList() {
		this.eaten.forEach((item) => {
			this.options.push(item)
		})
		this.eaten = []
		this.saveData()
	}

	setItem(key: string, value: any) {
		window.localStorage.setItem(key, JSON.stringify(value))
	}

	getItem(key: string) {
		return JSON.parse(window.localStorage.getItem(key))
	}
}


// ["Another Broken Egg","Portos","Granville","In-N-Out","Casitas Tacos El Carbon", "World Empanadas"]