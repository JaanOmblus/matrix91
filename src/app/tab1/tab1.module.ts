import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { EfektComponent } from '../matrixEfekt/matrixEfekt.component';
import { LaenComponent } from '../matrixLaen/matrixLaen.component';
import { MaksevoimComponent } from '../matrixMaksevoim/matrixMaksevoim.component';
import { RentaablComponent } from '../matrixRentaabl/matrixRentaabl.component';
import { StruktComponent } from '../matrixStrukt/matrixStrukt.component';
import { SumComponent } from '../matrixSum/matrixSum.component';
import { GraphComponent } from '../matrixGraph/matrixGraph.component';
import { InfoComponent } from '../matrixInfo/matrixInfo.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    PlotlyModule
  ],
  declarations: [Tab1Page, EfektComponent, LaenComponent, MaksevoimComponent, RentaablComponent, StruktComponent, SumComponent, GraphComponent, InfoComponent]
})
export class Tab1PageModule {}
