import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpagePageRoutingModule } from './subpage-routing.module';

import { SubpagePage } from './subpage.page';

import { EfektPComponent } from '../matrixEfektP/matrixEfektP.component';
import { LaenPComponent } from '../matrixLaenP/matrixLaenP.component';
import { MaksevoimPComponent } from '../matrixMaksevoimP/matrixMaksevoimP.component';
import { RentaablPComponent } from '../matrixRentaablP/matrixRentaablP.component';
import { StruktPComponent } from '../matrixStruktP/matrixStruktP.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpagePageRoutingModule
  ],
  declarations: [SubpagePage, EfektPComponent, LaenPComponent, MaksevoimPComponent, RentaablPComponent, StruktPComponent]
})
export class SubpagePageModule {}
