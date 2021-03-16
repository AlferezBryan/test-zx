import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export class StagesComponent implements OnInit {
  stages = [
    { name: 'Etapa 1'}
  ]
  constructor() {  }
  addStage () {
    this.stages.push({ name: 'Etapa ' + (this.stages.length + 1)})
  }
  deleteStage() {
    this.stages.splice(-1,1)
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.stages, event.previousIndex, event.currentIndex);
  }
  ngOnInit(): void {  }

}
