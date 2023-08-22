import { Injectable } from '@angular/core';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  //Esta función recibe un código de país y comprueba si corresponde a algún país.
  //Si es así, devuelve la info del país en cuestión. Si no, devuelve null.
  searchCountryByCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(this.apiUrl + '/alpha/' + code)
    .pipe(
      //el map sirve para cambiar la info.
      //En este caso, no queremos un array de paises con un unico elemento, que es lo que nos da la API,
      //sino un objeto país sin más o un null en caso de que no haya nada.
      map( countries => countries.length > 0 ? countries[0] : null ), 
      catchError(err => of(null))
    );
  }

  searchCapital(value: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + '/capital/' + value)
    .pipe(
      catchError(err => of([]))
    );
  }

  searchCountry(value: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + '/name/' + value)
    .pipe(
      catchError(err => of([]))
    );
  }

  searchContinent(value: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl + '/region/' + value)
    .pipe(
      catchError(err => of([]))
    );
  }
}
