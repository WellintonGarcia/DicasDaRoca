import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-feijao',
  templateUrl: './feijao.page.html',
  styleUrls: ['./feijao.page.scss'],
})
export class FeijaoPage implements OnInit {


  constructor(public nav: NavController) {}
  abrirPaginaLC(){
    this.nav.navigateForward('lista-culturas')
  }

  ngOnInit() {
  }

}
