import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByCapitalPage } from './by-capital.page';

const routes: Routes = [
  {
    path: '',
    component: ByCapitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByCapitalPageRoutingModule {}
