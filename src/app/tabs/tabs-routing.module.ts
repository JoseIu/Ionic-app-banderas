import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'by-country',
        loadChildren: () =>
          import('../pages/by-country/by-country.module').then(
            (m) => m.ByCountryPageModule
          ),
      },
      {
        path: 'by-capital',
        loadChildren: () =>
          import('../pages/by-capital/by-capital.module').then(
            (m) => m.ByCapitalPageModule
          ),
      },
      {
        path: 'by-region',
        loadChildren: () =>
          import('../pages/by-region/by-region.module').then(
            (m) => m.ByRegionPageModule
          ),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/by-country',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
