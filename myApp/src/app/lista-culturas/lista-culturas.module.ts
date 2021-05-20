import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCulturasPageRoutingModule } from './lista-culturas-routing.module';

import { ListaCulturasPage } from './lista-culturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCulturasPageRoutingModule
  ],
  declarations: [ListaCulturasPage]
})
export class ListaCulturasPageModule {}
