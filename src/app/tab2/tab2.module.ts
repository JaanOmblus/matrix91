import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { NgApexchartsModule } from 'ng-apexcharts';

import { AdviceComponent } from '../matrixAdvice/matrixAdvice.component';
import { AdviceLComponent } from '../matrixAdviceL/matrixAdviceL.component';
import { AdviceL2Component } from '../matrixAdviceL2/matrixAdviceL2.component';
import { BChartComponent } from '../matrixBChart/matrixBChart.component';
import { InxputComponent } from '../matrixInput/matrixInput.component';
import { Inxput2Component } from '../matrixInxput2/matrixInxput2.component';
import { RegionComponent } from '../matrixRegion/matrixRegion.component';
import { KOVComponent } from '../matrixKOV/matrixKOV.component';
import { KOV2Component } from '../matrixKOV2/matrixKOV2.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [Tab2Page, AdviceComponent, AdviceLComponent, AdviceL2Component, BChartComponent, InxputComponent, Inxput2Component, RegionComponent, KOVComponent, KOV2Component]
})
export class Tab2PageModule {}
