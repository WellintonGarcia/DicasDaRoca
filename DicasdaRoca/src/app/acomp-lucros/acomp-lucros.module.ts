import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcompLucrosPageRoutingModule } from './acomp-lucros-routing.module';

import { AcompLucrosPage } from './acomp-lucros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcompLucrosPageRoutingModule,
  ],
  declarations: [AcompLucrosPage]
})
export class AcompLucrosPageModule {}
