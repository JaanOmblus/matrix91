import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Subpage2bPage } from './subpage2b.page';

const routes: Routes = [
  {
    path: '',
    component: Subpage2bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Subpage2bPageRoutingModule {}