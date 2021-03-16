import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {
  currentTab: number
  tabs: Array<string>
  constructor() {
    this.currentTab = 0
    this.tabs = [
      'Etapas',
      'Acciones',
      'Funciones',
      'Formulario',
      'Template',
      'SLA',
      'Notificaciones',
      'Grupos'
    ]
  }

  ngOnInit(): void {
  }

}
