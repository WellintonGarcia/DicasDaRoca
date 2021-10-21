import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadDespesasPageRoutingModule } from './cad-despesas-routing.module';

import { CadDespesasPage } from './cad-despesas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadDespesasPageRoutingModule
  ],
  declarations: [CadDespesasPage]
})
export class CadDespesasPageModule {}
