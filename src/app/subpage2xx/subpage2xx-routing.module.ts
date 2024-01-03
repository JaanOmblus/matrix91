import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subpage2xxPage } from './subpage2xx.page';

const routes: Routes = [
  {
    path: '',
    component: Subpage2xxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subpage2xxPageRoutingModule {}