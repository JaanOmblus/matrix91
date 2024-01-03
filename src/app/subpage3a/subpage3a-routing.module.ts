import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subpage3aPage } from './subpage3a.page';

const routes: Routes = [
  {
    path: '',
    component: Subpage3aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subpage3aPageRoutingModule {}