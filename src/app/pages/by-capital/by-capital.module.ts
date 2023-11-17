import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByCapitalPageRoutingModule } from './by-capital-routing.module';

import { ByCapitalPage } from './by-capital.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByCapitalPageRoutingModule,
    SharedModule,
    ComponentsModule,
  ],
  declarations: [ByCapitalPage],
})
export class ByCapitalPageModule {}
