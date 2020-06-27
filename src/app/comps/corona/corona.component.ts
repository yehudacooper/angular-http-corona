import { Component, OnInit } from '@angular/core';
import { CoronaObj } from '../../../models.ts/corona';
import { CoronaService } from '../../services/corona.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {

  public coronaData: CoronaObj;
  public country: any;
  constructor(public myCoronaService: CoronaService) { }

  ngOnInit(): void {
    this.myCoronaService.getCorona().subscribe(data => {this.coronaData = data; });
  }
  showCorona(){
    console.log(this.coronaData);
   }
   chosenCountry(){
     this.coronaData.Countries.forEach(country => {
       if (country.Country === this.myCoronaService.choosenCountry){
         // tslint:disable-next-line:no-unused-expression
         this.country === country;
       }
     });
   }

}
