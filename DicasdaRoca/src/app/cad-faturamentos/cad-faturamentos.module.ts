import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadFaturamentosPageRoutingModule } from './cad-faturamentos-routing.module';

import { CadFaturamentosPage } from './cad-faturamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadFaturamentosPageRoutingModule
  ],
  declarations: [CadFaturamentosPage]
})
export class CadFaturamentosPageModule {}
