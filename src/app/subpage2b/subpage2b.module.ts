import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subpage2bPageRoutingModule } from './subpage2b-routing.module';

import { Subpage2bPage } from './subpage2b.page';

import { KOVMaakondComponent } from '../matrixKOVMaakond/matrixKOVMaakond.component';
import { KOVValdComponent } from '../matrixKOVVald/matrixKOVVald.component';
//import { TsnWnComponent } from '../matrixKOVTsnWn/matrixKOVTsnWn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subpage2bPageRoutingModule
  ],
  declarations: [Subpage2bPage, KOVValdComponent, KOVMaakondComponent]
})
export class SubpagePageModule {}