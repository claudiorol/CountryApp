import { Country } from "./country.interface"

export interface CacheStore {
    byCapital: TermCountries,
    byCountry: TermCountries,
    byContinent: TermCountries
}

export interface TermCountries {
    term: string,
    countries: Country[]
}