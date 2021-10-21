import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadProdPage } from './cad-prod.page';

const routes: Routes = [
  {
    path: '',
    component: CadProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadProdPageRoutingModule {}
