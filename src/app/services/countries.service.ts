import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../../models.ts/country';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private myhttp: HttpClient ) {
   }

   getCountries(): Observable<Country[]>{
     return this.myhttp.get<Country[]>('https://restcountries.eu/rest/v2/all');
   }
}
