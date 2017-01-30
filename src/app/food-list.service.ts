import { Injectable } from '@angular/core';

@Injectable()
export class FoodListService {
	data: Restaurant[] = []
	showedAlert: boolean = false

	constructor() { }

	addItem() {
		this.data.push({name: '', list: 'pick'})
		this.saveData()
	}

	removeItem(item) {
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

	resetList() {
		this.data.forEach((item) => {
			item.list = 'pick'
		})
		this.saveData()
	}

	saveData() {
		this.setItem('data', this.data)
	}

	loadData() {
		let data = this.getItem('data')
		if (data != null && typeof data.forEach == 'function') {
			data.forEach((item)=> {
				this.data.push(item)
			})
		}
	}

	setItem(key: string, value: any) {
		if (this.isLocalStorageNameSupported()){
			window.localStorage.setItem(key, JSON.stringify(value))
		}
	}

	getItem(key: string) {
		if (this.isLocalStorageNameSupported()){
			return JSON.parse(window.localStorage.getItem(key))
		}
	}

	isLocalStorageNameSupported() {
		try 
		{
			window.localStorage.setItem('testKey', '1');
		} 
		catch (error) 
		{
			console.log(error)
			if (!this.showedAlert) {
				alert("can't store data in private mode")
				this.showedAlert = true
			}
			return false;
		}
		return true
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
