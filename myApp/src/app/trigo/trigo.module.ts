import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrigoPageRoutingModule } from './trigo-routing.module';

import { TrigoPage } from './trigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrigoPageRoutingModule
  ],
  declarations: [TrigoPage]
})
export class TrigoPageModule {}
