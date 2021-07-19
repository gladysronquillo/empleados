import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components.module';
import { MaterialModule } from './material.module';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
		ComponentsModule,
    MaterialModule
  ]
})
export class CoreModule { }
