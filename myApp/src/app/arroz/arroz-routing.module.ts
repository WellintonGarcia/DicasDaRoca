import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrozPage } from './arroz.page';

const routes: Routes = [
  {
    path: '',
    component: ArrozPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrozPageRoutingModule {}
