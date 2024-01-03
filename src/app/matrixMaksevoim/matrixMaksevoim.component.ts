import { Component } from '@angular/core'; 
import { environment, myNewConstant } from '../../environments/environments';

@Component({ // Add the @Component decorator.
  selector: 'matrix-mksvm', 
  templateUrl: './matrixMaksevoim.component.html',
  styleUrls: ['./matrixMaksevoim.component.css']
})


export class MaksevoimComponent { 

  muutujaX = 1;
  muutujaY = 1;
  numbermksv = 1;

  constructor() { //Siin toob sisse
    this.numbermksv = environment.modelMaksevoime;
    }
  
  flagmk = 1;

  koond = '';
  sissemksv = 'Ettevõttel';
  jareldusmksv = ' maksevõimet on.';
  jareldusmksv2 = ' maksevõimet pole.';
  jareldusmksv3 = ' Samas on lootust, et maksevõime taastub. Sõltub madala maksevõime põhjustest.'
  jareldusmksv4 = ' Maksevõime on väga tugev.'

  mksvFunction(muutujaX: number){
    this.koond = this.sissemksv+this.jareldusmksv;
    muutujaX = this.numbermksv;
    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sissemksv+this.jareldusmksv2;
      this.flagmk = 2;
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sissemksv+this.jareldusmksv2+this.jareldusmksv3;
      this.flagmk = 3;
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sissemksv+this.jareldusmksv+this.jareldusmksv4;
      this.flagmk = 4;
    }

    return this.koond;
  }


}