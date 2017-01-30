import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[mbTile]'
})
export class TileDirective {
	@HostBinding('class.selected') selected: boolean = false;

	constructor(private el: ElementRef) {
		this.el.nativeElement.style.cursor = 'pointer'
	}

	@HostListener('click') onClick(event) {
		this.selected = !this.selected
	}

}
