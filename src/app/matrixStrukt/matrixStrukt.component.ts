import { Component } from '@angular/core'; 
import { environment, myNewConstant } from '../../environments/environments';

@Component({ // Add the @Component decorator.
  selector: 'matrix-strukt', 
  templateUrl: './matrixStrukt.component.html',
  styleUrls: ['./matrixStrukt.component.css']
})


export class StruktComponent { 

  muutujaX = 1;
  muutujaY = 1;

  numberx = 2;

  constructor() { //Siin toob sisse
  this.numberx = environment.modelStruktuur;
  }

  flagstr = 1;

  koond = '';
  sissemksv = 'Ettevõtte bilansi struktuur';
  jareldusmksv = ' on normaalset äritegevust võimaldav.';
  jareldusmksv2 = ' on väga nõrgapoolne.';
  jareldusmksv2a = ' Mõistlik oleks midagi ette võtta selleks, et bilanss näeks parem välja.'
  jareldusmksv3 = ' Samas on lootust, et äritegevuse paranedes muutub ka bilansi struktuur paremaks. Kunstlikke muudatusi ise esile kutsuda vaja ei ole.'
  jareldusmksv4 = ' Bilansi struktuuri vaates olulisi muudatusi vaja sisse viia ei ole, neid ei ole vaja esile kutsuda.'

  strFunction(muutujaX: number){
    this.koond = this.sissemksv+this.jareldusmksv;
    muutujaX = this.numberx; //võttis omaks, saab aru
    //this.flagstr = 2;

    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sissemksv+this.jareldusmksv2+this.jareldusmksv2a;
      this.flagstr = 2;
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sissemksv+this.jareldusmksv2+this.jareldusmksv3;
      this.flagstr = 3;
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sissemksv+this.jareldusmksv+this.jareldusmksv4;
      this.flagstr = 4;
    }

    return this.koond;
  }

  



}