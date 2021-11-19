import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cad-despesas',
  templateUrl: './cad-despesas.page.html',
  styleUrls: ['./cad-despesas.page.scss'],
})
export class CadDespesasPage implements OnInit {
  nomeDespesa: string;
  valorDespesa: number;
  constructor(public nav: NavController, private http: HttpClient) {}
  abrirPaginaMC(){
    this.nav.navigateForward('menu-calc');
  }
  abrirPaginaCP(){
    this.nav.navigateForward('cad-prod');
  }
  saveInfosDesp(){
    this.http.get('https://api-dicasdaroca.herokuapp.com/despesa/'+this.nomeDespesa+'/'+this.valorDespesa).subscribe(data=> {
      console.log(data);});
  }


  ngOnInit() {
  }

}
