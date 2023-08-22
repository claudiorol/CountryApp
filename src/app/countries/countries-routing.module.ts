import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";
import { ByCountryPageComponent } from "./pages/by-country-page/by-country-page.component";
import { ByContinentPageComponent } from "./pages/by-continent-page/by-continent-page.component";
import { CountryPageComponent } from "./pages/country-page/country-page.component";

const routes: Routes = [
    {
        path: 'by-capital',
        component: ByCapitalPageComponent
    },
    {
        path: 'by-country',
        component: ByCountryPageComponent
    },
    {
        path: 'by-continent',
        component: ByContinentPageComponent
    },
    {
        path: 'by/:codeForCountryPage',
        component: CountryPageComponent
    },
    {
        path: '**',
        redirectTo: 'by-capital'
    }
];

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
  })

export class CountriesRoutingModule {}