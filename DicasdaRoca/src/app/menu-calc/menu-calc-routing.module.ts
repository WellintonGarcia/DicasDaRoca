import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCalcPage } from './menu-calc.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCalcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCalcPageRoutingModule {}
