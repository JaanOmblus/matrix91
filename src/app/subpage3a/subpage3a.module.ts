import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subpage3aPageRoutingModule } from './subpage3a-routing.module';

import { Subpage3aPage } from './subpage3a.page';

import { ClientRobotComponent } from '../matrixClientRobot/matrixClientRobot.component';
import { CClientRobotComponent } from '../matrixClientRobot/matrix-robot-msg/matrix-robot-msg.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subpage3aPageRoutingModule
  ],
  declarations: [Subpage3aPage, ClientRobotComponent, CClientRobotComponent]
})
export class SubpagePageModule {}