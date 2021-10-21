import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcompLucrosPage } from './acomp-lucros.page';

const routes: Routes = [
  {
    path: '',
    component: AcompLucrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcompLucrosPageRoutingModule {}
