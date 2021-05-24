import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeijaoPage } from './feijao.page';

const routes: Routes = [
  {
    path: '',
    component: FeijaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeijaoPageRoutingModule {}
