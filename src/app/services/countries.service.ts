import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {
    const URL = `${this.apiURL}/capital/${term}`;

    return this.http.get<Country[]>(URL).pipe(catchError((error) => of([])));
  }

  searchCountry(term: string): Observable<Country[]> {
    const URL = `${this.apiURL}/name/${term}`;

    return this.http.get<Country[]>(URL).pipe(catchError((error) => of([])));
  }

  searchRegion(term: string): Observable<Country[]> {
    const URL = `${this.apiURL}/region/${term}`;

    return this.http.get<Country[]>(URL).pipe(catchError((error) => of([])));
  }
  searchCountryByAlphaCode(term: string): Observable<Country[]> {
    const URL = `${this.apiURL}/alpha/${term}`;

    return this.http.get<Country[]>(URL).pipe(catchError((error) => of([])));
  }
}
