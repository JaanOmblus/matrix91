import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpageShmShPPageRoutingModule } from './subpageShmShP-routing.module';

import { SubpageShmShPPage } from './subpageShmShP.page';

//import { ClientRobotComponent } from '../matrixClientRobot/matrixClientRobot.component';
//import { CClientRobotComponent } from '../matrixClientRobot/matrix-robot-msg/matrix-robot-msg.component';

import { TsnWnComponent } from '../matrixKOVTsnWn/matrixKOVTsnWn.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpageShmShPPageRoutingModule
  ],
  declarations: [SubpageShmShPPage, TsnWnComponent]
})
export class SubpagePageModule {}