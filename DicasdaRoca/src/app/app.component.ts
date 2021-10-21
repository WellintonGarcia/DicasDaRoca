import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(
    public nav: NavController,
    private platform: Platform,
    ) {
      this.initializeApp();
     }

  initializeApp(){

    this.platform.ready().then(() => {
      this.nav.navigateForward('splash');
    });

  }

  abrirPaginaLC() {

    this.nav.navigateForward('lista-culturas');

  }

  abrirPaginaCR() {

    this.nav.navigateForward('culturas-recomendadas');

  }

  abrirPaginaMenu() {

    this.nav.navigateForward('menu');

  }

  abrirPaginaMC(){
    this.nav.navigateForward('menu-calc');
  }

}
