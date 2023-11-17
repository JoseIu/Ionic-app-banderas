import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.countriesService
        .searchCountryByAlphaCode(id)
        .subscribe((country) => console.log(country));
    });
  }
}
