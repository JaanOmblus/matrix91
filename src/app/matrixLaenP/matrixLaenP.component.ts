import { Component } from '@angular/core'; 
import { environment, myNewConstant } from '../../environments/environments';

@Component({ // Add the @Component decorator.
  selector: 'matrix-laenP', 
  templateUrl: './matrixLaenP.component.html',
  styleUrls: ['./matrixLaenP.component.css']
})


export class LaenPComponent { 

  muutujaX = 1;
  muutujaY = 1;

  numberlaen = 1;

  constructor() { //Siin toob sisse
    this.numberlaen = environment.modelLaen;
    }

    flagln = 1;
  
    koond = '';
  sisserent = 'Süsteem leidis ettevõtte laenukoormust analüüsides, et';
  jareldusrent = ' ettevõtte laenude maht ei ole üle jõu käiv, laenud töötavad ja on ratsionaalselt kasutatud.';
  jareldusrent2 = ' ettevõte on arvestataval määral laenu võtnud ja see laenukoormus võib teatud oludes osutuda problemaatiliseks (laenude teenindamine võib hakata majanduslikus mõttes üle jõu käima).';
  jareldusrent3 = ' Samas, kui ettevõtta kasutuses olevaid käibevahendeid suudetakse sagedase pöördega ja efektiivselt töös hoida, siis suudab ettevõtte tootlikkus tõenäoliselt katta laenukulusid viisil, et ei teki probleemi ettevõtte jätkusuutlikkusele.'
  jareldusrent4 = ' Arvestades seda, kui efektiivselt laenuraha on tööle pandud võib isegi väita, et ettevõte on võõrvahendite arvelt alarahastatud (s.t. laenu juurde võttes on võimalik ettevõtte kasvukiirust suurendada ja puhasväärtust kasvatada).'
  jareldusrent2a = ' Laenukoormus hakkab suure tõenäosusega ettevõtte tegevust pidurdama ja arengut suurel määral välistama. Laenude ümberstruktureerimine peaks olema reaalsete alternatiivide hulgas, mida kaalutakse.'

  laenFunction(muutujaX: number){
    this.koond = this.sisserent+this.jareldusrent;
    muutujaX = this.numberlaen;
    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent2a;
      this.flagln = 2;
      localStorage.setItem("laenukoormus", this.koond);
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent3;
      this.flagln = 3;
      localStorage.setItem("laenukoormus", this.koond);
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sisserent+this.jareldusrent+this.jareldusrent4;
      this.flagln = 4;
      localStorage.setItem("laenukoormus", this.koond);
    }

    return this.koond;
  }


}