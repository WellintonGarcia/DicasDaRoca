import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulturasRecomendadasPage } from './culturas-recomendadas.page';

const routes: Routes = [
  {
    path: '',
    component: CulturasRecomendadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturasRecomendadasPageRoutingModule {}
