import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafePage } from './cafe.page';

const routes: Routes = [
  {
    path: '',
    component: CafePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafePageRoutingModule {}
