import 'jquery-slimscroll';
import { NgControl, FormGroupDirective } from '@angular/forms';

import { HelpblockComponent } from '../components/help-block/help-block.component';

import * as baseConstants from '../../core/base-constants';
import { AfterViewChecked, AfterViewInit, ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, DoCheck, ElementRef, ViewContainerRef } from '@angular/core';

declare let jQuery: any;
declare let $: any;

@Directive({
	selector: '[appReactiveValidation]'
})
export class ReactiveValidationDirective implements AfterViewChecked, AfterViewInit, DoCheck {

	toValidate: ElementRef;
	componentRef: ComponentFactory<HelpblockComponent>;
	helpblock: ComponentRef<HelpblockComponent>;
	inInputGroup = false;

	constructor(private element: ElementRef,
		private viewContainer: ViewContainerRef,
		private componentFactoryResolver: ComponentFactoryResolver,
		private ngModel: NgControl, private formGroup: FormGroupDirective) { }

	ngAfterViewInit(): void {
		console.log(3);
		
		this.componentRef = this.componentFactoryResolver.resolveComponentFactory(HelpblockComponent);
		this.toValidate = this._getToValidateElement();
		this.observeFormControlValueChanges();
		this.observeFormSubmission();
	}

	ngDoCheck(): void {
		console.log(3);
		if (this.componentRef) {
			if (this.ngModel.invalid && this.ngModel.touched) {
				this._deleteHelpBlocks();
				this._setHelpBlock();
			} else {
				this._deleteHelpBlocks();
			}
		}
	}

	private _getToValidateElement(): ElementRef {
		let toValidate = this.element.nativeElement.closest('.to-validate');
		if (toValidate == null) {
			toValidate = this.element.nativeElement.parentElement;
		}
		return toValidate;
	}

	private observeFormControlValueChanges() {
		this.ngModel.valueChanges.subscribe(() => {
			if (this.ngModel.invalid && this.ngModel.touched) {
				this._deleteHelpBlocks();
				this._setHelpBlock();
			} else {
				this._deleteHelpBlocks();
			}
		});
	}

	private observeFormSubmission() {
		this.formGroup.ngSubmit.subscribe(() => {
			this.formGroup.form.markAsTouched();
			if (this.ngModel.invalid) {
				this._deleteHelpBlocks();
				this._setHelpBlock();
			}
		});
	}

	private _setHelpBlock() {
		if (!jQuery(this.toValidate).hasClass('has-error') && !this.helpblock) {
			if (jQuery(this.element.nativeElement.parentElement).hasClass('input-group')) {
				this.inInputGroup = true;
				$('<small class="text-danger"#helpBlock>' + this.getErrorText() +
					'</small>').insertAfter(this.element.nativeElement.closest('.input-group'));
			} else {
				this.helpblock = this.viewContainer.createComponent(this.componentRef);
				this.helpblock.instance.message = this.getErrorText();
			}
		}
		jQuery(this.toValidate).addClass('has-error');
	}

	private _deleteHelpBlocks() {
		if (jQuery(this.toValidate).hasClass('has-error')) {
			jQuery(this.toValidate).removeClass('has-error');
			if (this.inInputGroup) {
				jQuery(this.element.nativeElement.closest('.to-validate').children).find('.text-danger').remove();
			}
		}

		if (this.helpblock) {
			this.helpblock.destroy();
			this.helpblock = null;
		}
	}

	ngAfterViewChecked(): void {
		if (this.element.nativeElement.attributes['required']) {
			jQuery(this.toValidate).addClass('label-required');
		} else {
			jQuery(this.toValidate).removeClass('label-required');
		}
	}

	getErrorText(): string {
		let text = '';

		if (this.ngModel.errors) {
			Object.keys(this.ngModel.errors).forEach(key => {
				if (('' + baseConstants.ERROR_MESSAGES[key]).includes('{0}')) {
					const error = (baseConstants.ERROR_MESSAGES[key] as string).replace('{0}', this.ngModel.errors[key]);
					text += error + ', ';
				} else {
					text += baseConstants.ERROR_MESSAGES[key] + ', ';
				}
			});
		}

		return text.substring(0, text.length - 2);
	}
}
