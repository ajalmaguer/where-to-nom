/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodListService } from './food-list.service';

describe('Service: FoodList', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [FoodListService]
		});
	});

	it('should ...', inject([FoodListService], (service: FoodListService) => {
		expect(service).toBeTruthy();
	}));
});
