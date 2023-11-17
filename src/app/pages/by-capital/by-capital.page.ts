import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.page.html',
  styleUrls: ['./by-capital.page.scss'],
})
export class ByCapitalPage implements OnInit {
  public countries: Country[] = [];
  constructor(private countiesService: CountriesService) {}

  ngOnInit() {}

  searchByCapital(term: string): void {
    this.countiesService.searchCapital(term).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
    });
  }
}
