import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acomp-lucros',
  templateUrl: './acomp-lucros.page.html',
  styleUrls: ['./acomp-lucros.page.scss'],
})
export class AcompLucrosPage implements OnInit {
  despesas: string;
  nomeDespesa: string;
  valorDespesa: number;

  mes: number;
  ano: number;

  faturamentos: string;
  nomeFaturamento: string;
  valorFaturamento: number;


  constructor(public nav: NavController, private http: HttpClient) {}
  abrirPaginaMC(){
    this.nav.navigateForward('menu-calc');
  }
  selecaoDesp(){
    this.despesas = 'despesas';
  }
  selecaoFatur(){
    this.faturamentos = 'faturamentos';
  }

  ngOnInit() {
    this.http.get('https://api-dicasdaroca.herokuapp.com/find/'+this.despesas+'/'+this.mes+'/'+this.ano).subscribe(data => {
      this.nomeDespesa = data[0]['nome'],
      this.valorDespesa = data[0]['valor'],
      this.mes = data[0]['mes'],
      this.ano = data[0]['ano'];
    });

    this.http.get('https://api-dicasdaroca.herokuapp.com/find/'+this.faturamentos+'/'+this.mes+'/'+this.ano).subscribe(data => {
      this.nomeFaturamento = data[0]['nome'],
      this.valorFaturamento = data[0]['valor'],
      this.mes = data[0]['mes'],
      this.ano = data[0]['ano'];
    });
    }


}
