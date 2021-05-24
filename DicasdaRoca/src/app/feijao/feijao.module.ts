import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeijaoPageRoutingModule } from './feijao-routing.module';

import { FeijaoPage } from './feijao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeijaoPageRoutingModule
  ],
  declarations: [FeijaoPage]
})
export class FeijaoPageModule {}
