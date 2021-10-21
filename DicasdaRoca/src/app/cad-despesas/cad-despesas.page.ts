import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cad-despesas',
  templateUrl: './cad-despesas.page.html',
  styleUrls: ['./cad-despesas.page.scss'],
})
export class CadDespesasPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPaginaMC(){
    this.nav.navigateForward('menu-calc');
  }
  abrirPaginaCP(){
    this.nav.navigateForward('cad-prod');
  }


  ngOnInit() {
  }

}
