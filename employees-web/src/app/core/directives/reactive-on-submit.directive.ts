import { Directive, HostListener, ElementRef } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

declare var jQuery: any;
@Directive({
	selector: '[appReactiveOnSubmit]'
})
export class ReactiveOnSubmitDirective {

	animationClass = 'animated shake';

	constructor(private _form: FormGroupDirective, private _element: ElementRef) {}

	@HostListener('submit') onsubmit() {
		if (this._form.invalid) {
			const elements: Array<any> = this._element.nativeElement.querySelectorAll('.ng-invalid');
			const invalidElement = elements[elements.length - 1];
			if (invalidElement != null) {
				invalidElement.focus();
				jQuery(invalidElement).addClass(this.animationClass);
				setTimeout(() => {
					jQuery(invalidElement).removeClass(this.animationClass);
				}, 1000);
			}
		}
	}
}
