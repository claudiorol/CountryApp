import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCapital(value: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + '/capital/' + value)
    .pipe(catchError(err => of([]))
    );
  }

  searchCountry(value: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + '/name/' + value)
    .pipe(catchError(err => of([]))
    );
  }

  searchContinent(value: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + '/region/' + value)
    .pipe(catchError(err => of([]))
    );
  }
}
