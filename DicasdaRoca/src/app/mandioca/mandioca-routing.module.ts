import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MandiocaPage } from './mandioca.page';

const routes: Routes = [
  {
    path: '',
    component: MandiocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandiocaPageRoutingModule {}
