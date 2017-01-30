import { Directive, ElementRef, HostListener, HostBinding, Input} from '@angular/core';
import { LocalStorageService } from '../local-storage.service'

@Directive({
	selector: '[mbTile]'
})
export class TileDirective {
	@Input('mbTile') tileData

	constructor(private el: ElementRef, private dataService: LocalStorageService) {
		this.el.nativeElement.style.cursor = 'pointer'
	}

	@HostListener('click') onClick(event) {
		this.tileData.selected = !this.tileData.selected
		this.dataService.saveData()
	}

}
