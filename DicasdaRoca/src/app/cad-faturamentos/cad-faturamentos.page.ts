import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cad-faturamentos',
  templateUrl: './cad-faturamentos.page.html',
  styleUrls: ['./cad-faturamentos.page.scss'],
})
export class CadFaturamentosPage implements OnInit {
  nomeFaturamento: string;
  valorFaturamento: number;
  mesFaturamento: number;
  anoFaturamento: number;

  constructor(public nav: NavController, private http: HttpClient) {}
  abrirPaginaCP(){
    this.nav.navigateForward('cad-prod');
  }

  abrirPaginaMC(){
    this.nav.navigateForward('menu-calc');
  }

  saveInfosFatur(){
    this.http.get('https://api-dicasdaroca.herokuapp.com/faturamento/'+this.nomeFaturamento+'/'+this.valorFaturamento+'/'+this.mesFaturamento+'/'+this.anoFaturamento).subscribe(data=> {
      console.log(data);});
  }

  ngOnInit() {
  }

}
