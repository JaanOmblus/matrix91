import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subpage2xxPageRoutingModule } from './subpage2xx-routing.module';

import { Subpage2xxPage } from './subpage2xx.page';

import { ChatComponent } from '../matrixChat/matrixChat.component';
import { CChatMsgComponent } from '../matrixChat/c-chat-msg/c-chat-msg.component';

//import { CChatMsgComponent } from '../matrixChat/c-chat-msg/c-chat-msg.component';

//import { LiChartComponent } from '../matrixLiChart/matrixLiChart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subpage2xxPageRoutingModule
  ],
  declarations: [Subpage2xxPage, ChatComponent, CChatMsgComponent]
})
export class SubpagePageModule {}