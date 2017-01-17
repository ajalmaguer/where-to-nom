/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoodPickerComponent } from './food-picker.component';

describe('FoodPickerComponent', () => {
	let component: FoodPickerComponent;
	let fixture: ComponentFixture<FoodPickerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ FoodPickerComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FoodPickerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
