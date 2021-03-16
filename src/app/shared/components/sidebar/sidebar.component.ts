import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu: Array<string>
  constructor() {
    this.menu = [
      'Angry Files',
      'Estructura',
      'Perfiles',
      'Usuarios',
      'Workflow',
      'Reglas de asignación',
      'Mantenedores'
    ]
  }

  ngOnInit(): void {
  }

}
