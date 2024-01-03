import { Component } from '@angular/core'; 
import { environment, myNewConstant } from '../../environments/environments';

@Component({ // Add the @Component decorator.
  selector: 'matrix-rent', 
  templateUrl: './matrixRentaabl.component.html',
  styleUrls: ['./matrixRentaabl.component.css']
})


export class RentaablComponent { 

  muutujaX = 1;
  muutujaY = 1;

  numberrent = 1;

  constructor() { //Siin toob sisse
  this.numberrent = environment.modelRent;
  }
  
  flagx = 1;

  koond = '';
  sisserent = 'Ettevõtte';
  jareldusrent = ' rentaablus on turul toimetulekut võimaldav.';
  jareldusrent2 = ' rentaablus ei ole turul toimetulekut võimaldav.';
  jareldusrent3 = ' Samas võib antud rentaablusega tulla toime ja muude soodsate asjaolude juures saada ettevõtte kasvama.'
  jareldusrent4 = ' Rentaablus on sedavõrd tugev, et selle abil on võimalik lahendada ka muid probleeme, kui neid on, ehk siis rentaablus aitab kompenseerida muid puudujääke.'
  jareldusrent2a = ' Vajalikud on sisulised sammud rentaabluse parandamise suunas.'

  //flag: boolean = true;

  rentFunction(muutujaX: number){
    this.koond = this.sisserent+this.jareldusrent;
    muutujaX = this.numberrent;
    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent2a;
      this.flagx = 2;
      //localStorage.setItem("rentaablus", this.koond);
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent3;
      this.flagx = 3;
      //localStorage.setItem("rentaablus", this.koond);
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sisserent+this.jareldusrent+this.jareldusrent4;
      this.flagx = 4;
      //localStorage.setItem("rentaablus", this.koond);
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