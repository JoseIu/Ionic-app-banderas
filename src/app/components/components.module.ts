import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from './country-card/country-card.component';
import { IonicModule } from '@ionic/angular';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [CountryCardComponent, LoaderComponent],
  exports: [CountryCardComponent, LoaderComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
