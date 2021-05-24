import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrigoPage } from './trigo.page';

const routes: Routes = [
  {
    path: '',
    component: TrigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrigoPageRoutingModule {}
