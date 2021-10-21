import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cad-prod',
  templateUrl: './cad-prod.page.html',
  styleUrls: ['./cad-prod.page.scss'],
})
export class CadProdPage implements OnInit {

  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  constructor(public nav: NavController) {}
  abrirPaginaMC(){
    this.nav.navigateForward('menu-calc');
  }

  ngOnInit() {
  }

}
