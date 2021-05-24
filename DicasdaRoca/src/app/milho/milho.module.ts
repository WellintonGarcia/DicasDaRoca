import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilhoPageRoutingModule } from './milho-routing.module';

import { MilhoPage } from './milho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilhoPageRoutingModule
  ],
  declarations: [MilhoPage]
})
export class MilhoPageModule {}
