import { Component } from '@angular/core'; 
import { environment, myNewConstant } from '../../environments/environments';

@Component({ // Add the @Component decorator.
  selector: 'matrix-struktP', 
  templateUrl: './matrixStruktP.component.html',
  styleUrls: ['./matrixStruktP.component.css']
})


export class StruktPComponent { 

  muutujaX = 1;
  muutujaY = 1;

  numberx = 2;

  constructor() { //Siin toob sisse
  this.numberx = environment.modelStruktuur;
  }

  flagstr = 1;

  koond = '';
  sissemksv = 'Süsteem leidis etevõtte bilansistruktuuri analüüsides, et';
  jareldusmksv = ' bilansi struktuur on tasakaalus ja soodustab edukat äritegevust.';
  jareldusmksv2 = ' bilansi struktuur on tasakaalust väljas, see võib takistada jooksvat äritegevust, segada arenguplaane ja muutuda ka ohtlikuks selles kontekstis, et ettevõte ei pruugi enam olla suuteline oma kohustusi täitma.';
  jareldusmksv2a = ' Kohustuste osakaal on suurusjärgus ja nende dünaamika on selline, et midagi on vajalik muuta selleks, et ettevõte saaks normaalselt tööd teha.'
  jareldusmksv3 = ' Bilansi probleemiks on suur kohustuste osakaal, samas on kohustused pigem pikema perioodi peale jaotuvad ja see võib mitte oma negatiivset mõju avaldada.'
  jareldusmksv4 = ' Bilansi struktuuri vaates on piisavalt madal kohustuste osakaal, mis tähendab, et sisuka äriplaani olemasolu korral on võimalik kohustuste mahtu kasvatada.'

  strFunction(muutujaX: number){
    this.koond = this.sissemksv+this.jareldusmksv;
    muutujaX = this.numberx; //võttis omaks, saab aru
    //this.flagstr = 2;

    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sissemksv+this.jareldusmksv2+this.jareldusmksv2a;
      this.flagstr = 2;
      localStorage.setItem("struktuur", this.koond);
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sissemksv+this.jareldusmksv2+this.jareldusmksv3;
      this.flagstr = 3;
      localStorage.setItem("struktuur", this.koond);
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sissemksv+this.jareldusmksv+this.jareldusmksv4;
      this.flagstr = 4;
      localStorage.setItem("struktuur", this.koond);
    }

    return this.koond;
  }

  



}