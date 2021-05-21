import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandiocaPageRoutingModule } from './mandioca-routing.module';

import { MandiocaPage } from './mandioca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MandiocaPageRoutingModule
  ],
  declarations: [MandiocaPage]
})
export class MandiocaPageModule {}
