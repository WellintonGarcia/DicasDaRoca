import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cad-faturamentos',
  templateUrl: './cad-faturamentos.page.html',
  styleUrls: ['./cad-faturamentos.page.scss'],
})
export class CadFaturamentosPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPaginaCP(){
    this.nav.navigateForward('cad-prod');
  }

  abrirPaginaMC(){
    this.nav.navigateForward('menu-calc');
  }
  ngOnInit() {
  }

}
