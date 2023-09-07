import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-continent-page',
  templateUrl: './by-continent-page.component.html',
  styles: [`
  .btn-primary {
    color: #fff
  }
  `
  ]
})

export class ByContinentPageComponent implements OnInit {

  public continents: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedContinent?: string;
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor( private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byContinent.countries;
    this.selectedContinent = this.countriesService.cacheStore.byContinent.term;
  }

  searchByContinent(value: string): void {
    this.isLoading = true;
    this.selectedContinent = value;
    this.countriesService.searchContinent(value).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
