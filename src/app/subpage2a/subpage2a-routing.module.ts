import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subpage2aPage } from './subpage2a.page';

const routes: Routes = [
  {
    path: '',
    component: Subpage2aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subpage2aPageRoutingModule {}