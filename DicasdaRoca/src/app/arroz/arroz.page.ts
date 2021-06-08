import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-arroz',
  templateUrl: './arroz.page.html',
  styleUrls: ['./arroz.page.scss'],
})
export class ArrozPage implements OnInit {

constructor(public nav: NavController) {}
  abrirPaginaLC(){
    this.nav.navigateForward('lista-culturas')
  }

  ngOnInit() {
  }

}
