import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-culturas',
  templateUrl: './lista-culturas.page.html',
  styleUrls: ['./lista-culturas.page.scss'],
})
export class ListaCulturasPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPaginaMandioca(){
    this.nav.navigateForward('mandioca')
  }
  abrirPaginaSoja(){
    this.nav.navigateForward('soja')
  }
  abrirPaginaMilho(){
    this.nav.navigateForward('milho')
  }
  abrirPaginaCafe(){
    this.nav.navigateForward('cafe')
  }
  abrirPaginaFeijao(){
    this.nav.navigateForward('feijao')
  }
  abrirPaginaArroz(){
    this.nav.navigateForward('arroz')
  }
  abrirPaginaTrigo(){
    this.nav.navigateForward('trigo')
  }

  
  ngOnInit() {
  }

}
