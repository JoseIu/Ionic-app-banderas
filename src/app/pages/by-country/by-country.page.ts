import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.page.html',
  styleUrls: ['./by-country.page.scss'],
})
export class ByCountryPage implements OnInit {
  public country: Country[] = [];
  constructor(private countriesService: CountriesService) {}

  ngOnInit() {}

  searchCountry(term: string) {
    console.log('desde by-countryy' + term);
    this.countriesService.searchCountry(term).subscribe((countries) => {
      console.log(countries);
      this.country = countries;
    });
  }
}
