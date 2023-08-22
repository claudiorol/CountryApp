import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  public currentCountry?: Country;

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({ codeForCountryPage }) => {
        return this.countriesService.searchCountryByCode(codeForCountryPage)
      })
    ).subscribe((country: Country | null) => {
      if (country == null) {
        this.router.navigateByUrl('')
      } else {
        this.currentCountry = country;
      }
    })
  }
}
