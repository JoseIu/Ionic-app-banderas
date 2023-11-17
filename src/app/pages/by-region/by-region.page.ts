import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { Region } from 'src/app/interfaces/regios.type';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.page.html',
  styleUrls: ['./by-region.page.scss'],
})
export class ByRegionPage implements OnInit {
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesSerice: CountriesService) {}

  ngOnInit() {}

  searchByRegion(term: string): void {
    console.log(term);
    this.isLoading = true;
    this.countriesSerice.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
