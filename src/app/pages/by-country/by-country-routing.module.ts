import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByCountryPage } from './by-country.page';

const routes: Routes = [
  {
    path: '',
    component: ByCountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByCountryPageRoutingModule {}
