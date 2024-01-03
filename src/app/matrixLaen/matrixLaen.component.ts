import { Component } from '@angular/core'; 
import { environment, myNewConstant } from '../../environments/environments';

@Component({ // Add the @Component decorator.
  selector: 'matrix-laen', 
  templateUrl: './matrixLaen.component.html',
  styleUrls: ['./matrixLaen.component.css']
})


export class LaenComponent { 

  muutujaX = 1;
  muutujaY = 1;

  numberlaen = 1;

  constructor() { //Siin toob sisse
    this.numberlaen = environment.modelLaen;
    }

    flagln = 1;
  
    koond = '';
  sisserent = 'Ettevõtte laenukoormus';
  jareldusrent = ' on selline, mille tõttu ettevõttel probleeme ei teki.';
  jareldusrent2 = ' pisut liiga suur.';
  jareldusrent3 = ' Samas, kui inflatsioon jätkub ja ettevõte suudab turuosa suurendada, siis võib sellise laenukoormusega ka jätkata.'
  jareldusrent4 = ' Pigem, kui suudab tootvalt paigutada, võib laenu isegi juurde võtta.'
  jareldusrent2a = ' Vajalikud on sammud laenukoormuse vähendamise suunas.'

  laenFunction(muutujaX: number){
    this.koond = this.sisserent+this.jareldusrent;
    muutujaX = this.numberlaen;
    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent2a;
      this.flagln = 2;
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent3;
      this.flagln = 3;
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sisserent+this.jareldusrent+this.jareldusrent4;
      this.flagln = 4;
    }

    return this.koond;
  }


}