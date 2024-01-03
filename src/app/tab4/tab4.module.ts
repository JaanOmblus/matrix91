import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';

import { Tab4PageRoutingModule } from './tab4-routing.module';

//import { NgApexchartsModule } from 'ng-apexcharts';

//import { AutoChartComponent } from '../matrixAutoChart/matrixAutoChart.component';
import { CentralComponent } from '../matrixCentral/matrixCentral.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page, CentralComponent]
})
export class Tab3PageModule {}