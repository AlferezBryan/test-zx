import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  flag = -1
  tempX = { name: '' }
  stages = [
    { name: 'Etapa 1' },
    { name: 'Etapa 2' },
    { name: 'Etapa 3' },
    { name: 'Etapa 4' }
  ]
  actions = [
    { name: '' },
    { name: '' },
    { name: '' }
  ]
  newOptions = [
    { name: 'Asignar' },
    { name: 'Devolver' },
    { name: 'Reasignar' },
    { name: 'Tomar' },
    { name: 'Autoasignar' }
  ]
  constructor() { }
  drag1(el: any) {
    this.tempX = el
  }
  drop1(i: number) {
    this.flag = i
  }
  drop2(event: CdkDragDrop<{name: string; }[]>) {
    this.actions[this.flag] = this.tempX
    this.flag = -1
  }
  ngOnInit(): void {
  }

}
