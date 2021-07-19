import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { HelpblockComponent } from '../components/help-block/help-block.component';
import { DirectivesModule } from './directives.module';

@NgModule({
  declarations: [HelpblockComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    DirectivesModule,
    NgbModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    HelpblockComponent,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  entryComponents: [
    HelpblockComponent
  ]
})
export class ComponentsModule { }
