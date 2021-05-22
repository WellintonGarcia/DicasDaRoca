import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilhoPage } from './milho.page';

const routes: Routes = [
  {
    path: '',
    component: MilhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilhoPageRoutingModule {}
