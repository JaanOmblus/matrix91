import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import { NgApexchartsModule } from 'ng-apexcharts';

//import { FlashMessagesModule } from 'angular2-flash-messages';

import { AutoChartComponent } from '../matrixAutoChart/matrixAutoChart.component';
import { ClientInputComponent } from '../matrixClientInput/matrixClientInput.component';

import { EasyChartComponent } from '../matrixEasyChart/matrixEasyChart.component';
import { EasyChart2Component } from '../matrixEasyChart2/matrixEasyChart2.component';
//import { FlashComponent } from '../matrixFlash/matrixFlash.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    NgApexchartsModule    
  ],
  declarations: [Tab3Page, AutoChartComponent, ClientInputComponent, EasyChartComponent, EasyChart2Component]
})
export class Tab3PageModule {}
