import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.page.html',
  styleUrls: ['./cafe.page.scss'],
})
export class CafePage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPaginaLC(){
    this.nav.navigateForward('lista-culturas')
  }

  ngOnInit() {
  }

}