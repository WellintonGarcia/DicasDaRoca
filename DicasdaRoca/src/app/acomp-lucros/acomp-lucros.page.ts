import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acomp-lucros',
  templateUrl: './acomp-lucros.page.html',
  styleUrls: ['./acomp-lucros.page.scss'],
})
export class AcompLucrosPage implements OnInit {
  nomeDespesa: string;
  valorDespesa: number;

  constructor(public nav: NavController, private http: HttpClient) {}
  abrirPaginaMC(){
    this.nav.navigateForward('menu-calc');
  }

  ngOnInit() {
    this.http.get('https://api-dicasdaroca.herokuapp.com/find/despesas/soja').subscribe(data => {
      this.nomeDespesa = data[0]['nome'],
      this.valorDespesa = data[0]['valor'];
    });
    }


}
