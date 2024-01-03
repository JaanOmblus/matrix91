import { Component } from '@angular/core'; 
import { environment, myNewConstant } from '../../environments/environments';

@Component({ // Add the @Component decorator.
  selector: 'matrix-rentP', 
  templateUrl: './matrixRentaablP.component.html',
  styleUrls: ['./matrixRentaablP.component.css']
})


export class RentaablPComponent { 

  muutujaX = 1;
  muutujaY = 1;

  numberrent = 1;

  constructor() { //Siin toob sisse
  this.numberrent = environment.modelRent;
  }
  
  flagx = 1;

  koond = '';
  sisserent = 'Süsteem leidis etevõtte rentaablust analüüsides, et';
  jareldusrent = ' ettevõtte rentaablus on olemasoleva käibe mahu juures piisavalt suur tagamaks ettevõtte normaalset toimimist ja arengut.';
  jareldusrent2 = ' praegune käibe maht ei suuda tagada rentaablust, mida selliste varade juures sellisel turul võiks saavutada.';
  jareldusrent3 = ' Süsteemi hinnangul võib käibe "ebapiisavus" olla ajutine ja kui käive taastub võib probleem rentaablusega laheneda ilma täiendavate muudatuste sisseviimiseta.'
  jareldusrent4 = ' Rentaabluse tugevuse peamiseks põhjuseks on suur käibe maht suhtes varadega, mis on ettevõttesse investeeritud.'
  jareldusrent2a = ' Vajalik on analüüsida, miks ettevõttesse paigutatud vara sedavõrd vähe teenib, kindlasti on vajalikud korrigeerivad muudatused.'

  //flag: boolean = true;

  rentFunction(muutujaX: number){
    this.koond = this.sisserent+this.jareldusrent;
    muutujaX = this.numberrent;
    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent2a;
      this.flagx = 2;
      localStorage.setItem("rentaablus", this.koond);
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent3;
      this.flagx = 3;
      localStorage.setItem("rentaablus", this.koond);
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sisserent+this.jareldusrent+this.jareldusrent4;
      this.flagx = 4;
      localStorage.setItem("rentaablus", this.koond);
    }

    return this.koond;
  }
  
  //flag: boolean = true;


  //balance = 3;
  //row = 2;
 // availableBalance = 3;

  //colorFunction(muutujauus: number) {
  //public getColor(balance: number): string{
  //    return balance > 0 ? "green" : "red";
  // }

 // }



}