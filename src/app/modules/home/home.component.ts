import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentTab: number
  currentInfo = [{ name: '', date: '', status: 0, archived: false }]
  info0 = [
    { name: 'Juicios Laborales', date: '4/02/2021', status: 0, archived: false },
    { name: 'Multas', date: '4/02/2021', status: 1, archived: false }
  ]
  info1 = [
    { name: 'Nombre 2', date: '4/02/2021', status: 0, archived: true },
    { name: 'Nombre 3', date: '4/02/2021', status: 0, archived: true }
  ]
  constructor() {
    this.currentTab = 0
  }
  changeView (val: number) {
    this.currentTab = val
    switch (val) {
      case 0: this.currentInfo = this.info0; break;
      case 1: this.currentInfo = this.info1; break;
    }
  }

  ngOnInit(): void {
    this.currentInfo.splice(0)
    this.currentInfo = this.info0
  }

}
