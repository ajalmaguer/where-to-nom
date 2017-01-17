import { Injectable } from '@angular/core';

@Injectable()
export class FoodListService {
	options: string[] = ['Portos', 'In-N-Out', 'World Empanadas', 'Granville', 'Another Broken Egg', 'Casitas Tacos El Carbon']
	eaten: string[] = []

	constructor() { }


}
