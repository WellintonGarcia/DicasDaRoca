import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-soja',
  templateUrl: './soja.page.html',
  styleUrls: ['./soja.page.scss'],
})
export class SojaPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPaginaLC(){
    this.nav.navigateForward('lista-culturas')
  }

  ngOnInit() {
  }

}
