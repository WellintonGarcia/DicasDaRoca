import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadDespesasPage } from './cad-despesas.page';

const routes: Routes = [
  {
    path: '',
    component: CadDespesasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadDespesasPageRoutingModule {}
