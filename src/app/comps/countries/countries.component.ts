import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../../models.ts/country';
import { CoronaService } from '../../services/corona.service';
import { CoronaObj } from '../../../models.ts/corona';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public coronaData: CoronaObj;
  public country1: any;

  public allCountries: Country[] = [];
  constructor(private myCountryService: CountriesService, private myCoronaService: CoronaService) { }

  ngOnInit(): void {
    this.myCountryService.getCountries().subscribe( data => {this.allCountries = data; });
    this.myCoronaService.getCorona().subscribe(data => {this.coronaData = data; });
  }
   showCountries(){
    console.log(this.allCountries);
    console.log(this.coronaData);
   }
   choosenCountry(countryName: string){
     this.myCoronaService.choosenCountry = countryName;
     console.log(this.myCoronaService.choosenCountry);
     console.log(this.coronaData.Countries);
     this.coronaData.Countries.forEach(country => {
      if (country.Country === countryName){
        this.country1 = country;
        console.log(this.country1);

      }
      console.log(country.Country);
    });
     console.log(this.country1);
   }
  //  chosenCountry(){
  //   this.coronaData.Countries.forEach(country => {
  //     if (country.Country === this.myCoronaService.choosenCountry){
  //       // tslint:disable-next-line:no-unused-expression
  //       this.country === country;
  //     }
  //   });
  // }

}
