import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByCountryPageRoutingModule } from './by-country-routing.module';

import { ByCountryPage } from './by-country.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByCountryPageRoutingModule,
    SharedModule,
    ComponentsModule,
  ],
  declarations: [ByCountryPage],
})
export class ByCountryPageModule {}
