import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPaginaLC(){
    this.nav.navigateForward('lista-culturas');
  }
  abrirPaginaCR(){
    this.nav.navigateForward('culturas-recomendadas');
  }
  abrirPaginaMC(){
    this.nav.navigateForward('menu-calc');
  }

  ngOnInit() {
  }

}
