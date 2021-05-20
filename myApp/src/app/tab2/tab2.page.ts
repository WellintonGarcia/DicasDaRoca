import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public nav: NavController) {}
  abrirPaginaLC(){
    this.nav.navigateForward('lista-culturas')
  }
  abrirPaginaCR(){
    this.nav.navigateForward('culturas-recomendadas')
  }

}
