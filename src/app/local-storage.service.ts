import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
	data: any = []
	showedAlert: boolean = false

	constructor() { }

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
