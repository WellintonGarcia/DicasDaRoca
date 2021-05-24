import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SojaPage } from './soja.page';

const routes: Routes = [
  {
    path: '',
    component: SojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SojaPageRoutingModule {}
