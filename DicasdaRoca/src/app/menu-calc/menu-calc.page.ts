import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-calc',
  templateUrl: './menu-calc.page.html',
  styleUrls: ['./menu-calc.page.scss'],
})
export class MenuCalcPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPaginaCD(){
    this.nav.navigateForward('cad-despesas');
  }
  abrirPaginaCF(){
    this.nav.navigateForward('cad-faturamentos');
  }
  abrirPaginaCP(){
    this.nav.navigateForward('cad-prod');
  }
  abrirPaginaAL(){
    this.nav.navigateForward('acomp-lucros');
  }
  abrirPaginaMenu(){
    this.nav.navigateForward('menu');
  }

  ngOnInit() {
  }

}
