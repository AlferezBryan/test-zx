import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StagesComponent } from './stages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    StagesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    DragDropModule
  ],
  exports: [
    StagesComponent
  ]
})
export class StagesModule { }
