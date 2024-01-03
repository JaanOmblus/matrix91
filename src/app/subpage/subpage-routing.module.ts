import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpagePage } from './subpage.page';

const routes: Routes = [
  {
    path: '',
    component: SubpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubpagePageRoutingModule {}
