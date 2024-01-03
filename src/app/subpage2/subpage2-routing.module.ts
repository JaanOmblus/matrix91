import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subpage2Page } from './subpage2.page';

const routes: Routes = [
  {
    path: '',
    component: Subpage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subpage2PageRoutingModule {}