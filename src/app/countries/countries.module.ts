import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByContinentPageComponent } from './pages/by-continent-page/by-continent-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByContinentPageComponent,
    CountryPageComponent,
    CountriesTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})

export class CountriesModule { }
