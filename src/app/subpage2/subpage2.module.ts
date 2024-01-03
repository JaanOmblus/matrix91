import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subpage2PageRoutingModule } from './subpage2-routing.module';

import { Subpage2Page } from './subpage2.page';

import { LiChartComponent } from '../matrixLiChart/matrixLiChart.component';
import { HiChartComponent } from '../matrixHiChart/matrixHiChart.component';
//import { ChatComponent } from '../matrixChat/matrixChat.component';
import { Chat2Component } from '../matrixChat2/matrixChat2.component';
//import { CChatMsgComponent } from '../matrixChat/c-chat-msg/c-chat-msg.component';
import { RateDictComponent } from '../matrixRateDict/matrixRateDict.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subpage2PageRoutingModule
  ],
  declarations: [Subpage2Page, LiChartComponent, HiChartComponent, Chat2Component, RateDictComponent]
})
export class SubpagePageModule {}