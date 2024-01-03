import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subpage3PageRoutingModule } from './subpage3-routing.module';

import { Subpage3Page } from './subpage3.page';

import { PlayComponent } from '../matrixPlay/matrixPlay.component';
import { FlashCardComponent } from '../matrixFlashCard/matrixFlashCard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subpage3PageRoutingModule
  ],
  declarations: [Subpage3Page, PlayComponent, FlashCardComponent]
})
export class SubpagePageModule {}