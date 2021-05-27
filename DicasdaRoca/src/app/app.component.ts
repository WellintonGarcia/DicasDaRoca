import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';



@Component({

  selector: 'app-root',

  templateUrl: 'app.component.html',

  styleUrls: ['app.component.scss'],

})

export class AppComponent {

  constructor(public nav: NavController) { }

  abrirPaginaLC() {

    this.nav.navigateForward('lista-culturas')

  }

  abrirPaginaCR() {

    this.nav.navigateForward('culturas-recomendadas')

  }

  abrirPaginaMenu() {

    this.nav.navigateForward('menu')

  }

}
