import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acomp-lucros',
  templateUrl: './acomp-lucros.page.html',
  styleUrls: ['./acomp-lucros.page.scss'],
})
export class AcompLucrosPage implements OnInit {
  nomeDespesa: string;

  constructor(public nav: NavController, private http: HttpClient, private router: Router) {}
  abrirPaginaMC(){
    this.nav.navigateForward('menu-calc');
  }

  ngOnInit() {
    this.http.get('https://api-dicasdaroca.herokuapp.com/find/despesas/soja').subscribe(data => {
      this.nomeDespesa = data['.nome'];
    }, (err)=>{
      this.router.navigate(['connection-error']);
    });
    }


}
