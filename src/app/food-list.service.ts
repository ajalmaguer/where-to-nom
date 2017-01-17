import { Injectable } from '@angular/core';

@Injectable()
export class FoodListService {
	data: Restaurant[] = []

	constructor() { }

	addItem() {
		this.data.push({name: '', list: 'pick'})
		this.saveData()
	}

	removeItem(item) {
		console.log(this.data)
		this.data.splice(this.data.indexOf(item), 1)

		this.saveData()
	}

	seedData() {
		this.data = getSeedData()
		this.saveData()
	}

	selectOption(item: Restaurant) {
		let selectedItem: Restaurant = this.data.splice(this.data.indexOf(item),1)[0]
		selectedItem.list = 'eaten'
		this.data.push(selectedItem)
		this.saveData()
	}

	saveData() {
		this.setItem('data', this.data)
	}

	loadData() {
		let data = this.getItem('data')
		console.log(data, data != null)
		if (data != null && typeof data.forEach == 'function') {
			data.forEach((item)=> {
				this.data.push(item)
			})
		}
	}

	resetList() {
		this.data.forEach((item) => {
			item.list = 'pick'
		})
		this.saveData()
	}

	setItem(key: string, value: any) {
		window.localStorage.setItem(key, JSON.stringify(value))
	}

	getItem(key: string) {
		return JSON.parse(window.localStorage.getItem(key))
	}
}

export interface Restaurant {
	name: string
	list: string
}


function getSeedData() {
	let data: Restaurant[] = [
		{
			name: 'Another Broken Egg',
			list: 'pick'
		},{
			name: 'Portos',
			list: 'pick'
		},{
			name: 'Granville',
			list: 'pick'
		},{
			name: 'World Empanadas',
			list: 'pick'
		},{
			name: 'In-n-Out',
			list: 'pick'
		},{
			name: 'Casitas Tacos El Carbon',
			list: 'eaten'
		},{
			name: 'Better Fresh',
			list: 'eaten'
		}
	]

	return data
}
