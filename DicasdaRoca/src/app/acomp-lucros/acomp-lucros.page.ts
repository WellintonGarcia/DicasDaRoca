import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-acomp-lucros',
  templateUrl: './acomp-lucros.page.html',
  styleUrls: ['./acomp-lucros.page.scss'],
})
export class AcompLucrosPage implements OnInit {

  constructor(public nav: NavController) {}
  abrirPaginaMC(){
    this.nav.navigateForward('menu-calc');
  }

  ngOnInit() {
  }

}
