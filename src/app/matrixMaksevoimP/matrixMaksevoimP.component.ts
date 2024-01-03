import { Component } from '@angular/core'; 
import { environment, myNewConstant } from '../../environments/environments';

@Component({ // Add the @Component decorator.
  selector: 'matrix-mksvmP', 
  templateUrl: './matrixMaksevoimP.component.html',
  styleUrls: ['./matrixMaksevoimP.component.css']
})


export class MaksevoimPComponent { 

  muutujaX = 1;
  muutujaY = 1;
  numbermksv = 1;

  constructor() { //Siin toob sisse
    this.numbermksv = environment.modelMaksevoime;
    }
  
  flagmk = 1;

  koond = '';
  sissemksv = 'Süsteem leidis etevõtte maksevõimet analüüsides, et';
  jareldusmksv = ' ettevõte suudab käibevara ja likviidsete vahendite arvelt võlausaldajate kõik lühiajalised nõuded täita, s.t. maksevõime on piisav ja maksevõimega probleeme ei ole.';
  jareldusmksv2 = ' võivad tekkida probleemid võlausaldajate nõuete katmisel, eriti kui kõik nõuded, mida on võimalik lühiajalises ajalises perspektiivis sissenõutavaks pöörata, ka sissenõutavaks pööratakse.';
  jareldusmksv3 = ' Samas on arvestatav tõenäosus, et kui muud näitajad on positiivsed ja ettevõttel läheb turul hästi, siis maksevõime probleem liiga palju segama ei hakka.'
  jareldusmksv4 = ' Maksevõime on sedavõrd tugev, et vajadusel võib rohkem ärilist riski võtta.'
  jareldusmksv2a = ' Praeguses ettevõtte tegevusolukorras on pigem tegemist sellise seisuga, kus maksevõime probleemi tekkimine ja süvenemine on pigem tõenäoline.'

  mksvFunction(muutujaX: number){
    this.koond = this.sissemksv+this.jareldusmksv;
    muutujaX = this.numbermksv;
    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sissemksv+this.jareldusmksv2+this.jareldusmksv2a;
      this.flagmk = 2;
      localStorage.setItem("maksevoime", this.koond);
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sissemksv+this.jareldusmksv2+this.jareldusmksv3;
      this.flagmk = 3;
      localStorage.setItem("maksevoime", this.koond);
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sissemksv+this.jareldusmksv+this.jareldusmksv4;
      this.flagmk = 4;
      localStorage.setItem("maksevoime", this.koond);
    }

    return this.koond;
  }


}