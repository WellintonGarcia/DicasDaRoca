import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadFaturamentosPage } from './cad-faturamentos.page';

const routes: Routes = [
  {
    path: '',
    component: CadFaturamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadFaturamentosPageRoutingModule {}
