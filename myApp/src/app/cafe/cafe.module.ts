import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafePageRoutingModule } from './cafe-routing.module';

import { CafePage } from './cafe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CafePageRoutingModule
  ],
  declarations: [CafePage]
})
export class CafePageModule {}
