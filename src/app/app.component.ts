import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service'

@Component({
	selector: 'mb-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'mb works!';

	constructor(private dataService: LocalStorageService) { }

	ngOnInit() {
		this.dataService.loadData()
	}

}
