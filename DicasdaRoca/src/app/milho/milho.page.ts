import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-milho',
  templateUrl: './milho.page.html',
  styleUrls: ['./milho.page.scss'],
})
export class MilhoPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPaginaLC(){
    this.nav.navigateForward('lista-culturas')
  }

  ngOnInit() {
  }

}
