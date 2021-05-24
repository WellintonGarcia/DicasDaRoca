import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCulturasPage } from './lista-culturas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCulturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCulturasPageRoutingModule {}
