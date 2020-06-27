import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoronaObj } from '../../models.ts/corona';
@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  public choosenCountry: string;
  constructor(private myhttp: HttpClient ) {
   }

   getCorona(): Observable<CoronaObj>{
     return this.myhttp.get<CoronaObj>('https://api.covid19api.com/summary');
   }
}
