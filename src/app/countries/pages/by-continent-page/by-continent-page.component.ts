import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-continent-page',
  templateUrl: './by-continent-page.component.html',
  styles: [
  ]
})

export class ByContinentPageComponent {
  public countries: Country[] = [];

  constructor( private countriesService: CountriesService) {}

  searchByContinent(value: string): void {
    this.countriesService.searchContinent(value).subscribe(countries => {
      this.countries = countries;
    });
  }
}
