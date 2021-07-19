import { NgModule } from '@angular/core';
import { ReactiveOnSubmitDirective } from '../directives/reactive-on-submit.directive';
import { ReactiveValidationDirective } from '../directives/reactive-validation.directive';


@NgModule({
  declarations: [
    ReactiveValidationDirective,
    ReactiveOnSubmitDirective
  ],
  exports: [
    ReactiveValidationDirective,
    ReactiveOnSubmitDirective
  ]
})
export class DirectivesModule { }
