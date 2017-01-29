import { Component, OnInit } from '@angular/core';

declare var $

@Component({
	selector: 'mb-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	closeNavbar() {
		$("#navbarDropdown").collapse('hide')
	}

}
