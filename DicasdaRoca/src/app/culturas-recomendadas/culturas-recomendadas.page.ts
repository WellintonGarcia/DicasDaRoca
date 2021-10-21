import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-culturas-recomendadas',
  templateUrl: './culturas-recomendadas.page.html',
  styleUrls: ['./culturas-recomendadas.page.scss'],
})
export class CulturasRecomendadasPage implements OnInit {

  constructor(public nav: NavController) {}

  abrirPaginaMenu(){
    this.nav.navigateForward('menu');
  }

  ngOnInit() {
  }

}
