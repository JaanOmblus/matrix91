import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpageShmShPPage } from './subpageShmShP.page';

const routes: Routes = [
  {
    path: '',
    component: SubpageShmShPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubpageShmShPPageRoutingModule {}