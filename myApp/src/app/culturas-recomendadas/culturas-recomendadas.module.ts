import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CulturasRecomendadasPageRoutingModule } from './culturas-recomendadas-routing.module';

import { CulturasRecomendadasPage } from './culturas-recomendadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulturasRecomendadasPageRoutingModule
  ],
  declarations: [CulturasRecomendadasPage]
})
export class CulturasRecomendadasPageModule {}
