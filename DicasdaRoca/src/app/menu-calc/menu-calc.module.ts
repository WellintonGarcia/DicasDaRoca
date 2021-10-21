import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCalcPageRoutingModule } from './menu-calc-routing.module';

import { MenuCalcPage } from './menu-calc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCalcPageRoutingModule
  ],
  declarations: [MenuCalcPage]
})
export class MenuCalcPageModule {}
