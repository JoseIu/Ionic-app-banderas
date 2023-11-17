import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'by-country',
    loadChildren: () =>
      import('./pages/by-country/by-country.module').then(
        (m) => m.ByCountryPageModule
      ),
  },
  {
    path: 'by-capital',
    loadChildren: () =>
      import('./pages/by-capital/by-capital.module').then(
        (m) => m.ByCapitalPageModule
      ),
  },
  {
    path: 'by-region',
    loadChildren: () =>
      import('./pages/by-region/by-region.module').then(
        (m) => m.ByRegionPageModule
      ),
  },
  {
    path: 'by/:id',
    loadChildren: () =>
      import('./pages/country/country.module').then((m) => m.CountryPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
