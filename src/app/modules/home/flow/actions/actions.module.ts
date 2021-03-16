import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ActionsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DragDropModule,
    MatIconModule
  ],
  exports: [
    ActionsComponent
  ]
})
export class ActionsModule { }
