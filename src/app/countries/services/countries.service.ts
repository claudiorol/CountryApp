import { Injectable } from '@angular/core';
import { Observable, catchError, of, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore: CacheStore = {
    byCapital: { term: "", countries: [] },
    byCountry: { term: "", countries: [] },
    byContinent: { term: "", countries: [] }
  }

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

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(err => of([]))
    );
  }

  searchCapital(value: string): Observable<Country[]> {
    const url = this.apiUrl + '/capital/' + value;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byCapital = { term: value, countries: countries })
    );
  }

  searchCountry(value: string): Observable<Country[]> {
    const url = this.apiUrl + '/name/' + value;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byCountry = { term: value, countries: countries })
    );
  }

  searchContinent(value: string): Observable<Country[]> {
    const url = this.apiUrl + '/region/' + value;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byContinent = { term: value, countries: countries })
    );
  }
}
