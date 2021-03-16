import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlowComponent } from './flow.component';
import { StagesModule } from './stages/stages.module';
import { ActionsModule } from './actions/actions.module';

@NgModule({
  declarations: [
    FlowComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    StagesModule,
    ActionsModule
  ]
})
export class FlowModule { }
