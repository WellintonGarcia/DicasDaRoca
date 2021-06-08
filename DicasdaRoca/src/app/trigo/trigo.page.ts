import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trigo',
  templateUrl: './trigo.page.html',
  styleUrls: ['./trigo.page.scss'],
})
export class TrigoPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPaginaLC(){
    this.nav.navigateForward('lista-culturas')
  }

  ngOnInit() {
  }

}
