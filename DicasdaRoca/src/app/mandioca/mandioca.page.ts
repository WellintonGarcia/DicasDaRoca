import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mandioca',
  templateUrl: './mandioca.page.html',
  styleUrls: ['./mandioca.page.scss'],
})
export class MandiocaPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPaginaLC(){
    this.nav.navigateForward('lista-culturas')
  }

  ngOnInit() {
  }

}
