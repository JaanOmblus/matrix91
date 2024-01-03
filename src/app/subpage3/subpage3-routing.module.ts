import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subpage3Page } from './subpage3.page';

const routes: Routes = [
  {
    path: '',
    component: Subpage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subpage3PageRoutingModule {}