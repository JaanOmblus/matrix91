import { Component } from '@angular/core'; 
import { environment, myNewConstant } from '../../environments/environments';

@Component({ // Add the @Component decorator.
  selector: 'matrix-efektP', 
  templateUrl: './matrixEfektP.component.html',
  styleUrls: ['./matrixEfektP.component.css']
})


export class EfektPComponent { 

  muutujaX = 1;
  muutujaY = 1;
  
  numberefekt = 1;

  constructor() { //Siin toob sisse
    this.numberefekt = environment.modelEfekt;
    }

    flagef = 1;

  koond = '';
  sisserent = 'Süsteem leidis seoses varade kasutamisega, et';
  jareldusrent = ' varasid on kasutatud efektiivselt, varadesse paigutatud rahalised vahendid toodavad ennast tagasi.';
  jareldusrent2 = ' varad ei tooda rahaliselt piisaval määral tagasi, s.t. ei taga turu keskmist rahalise investeeringu tootlikkust.';
  jareldusrent3 = ' Antud juhul on varade tootlikkus selles vahemikus, kus muude näitajate tugevuse korral ei ole otseselt varade kasutamise efektiivsus ettevõtte tegevust pidurdavaks probleemiks.'
  jareldusrent4 = ' Varade maht on tulenevalt sellest optimaalne. Samas, kui varade mahtu suurendatakse, siis on oluline jälgida, et muud proportsionaalsed näitajad (näiteks käive, töötajate arv jms.) tuleksid kaasa.'
  jareldusrent2a = ' Varade kasutamine on sedavõrd madala efektiivsusega, et tegemist on mingit liiki probleemiga. Kas varasid kasutatakse valel viisil/otstarbel või on algselt juba varadesse liigselt investeeritud. Praegune olukord ei ole ettevõttele hea.'

  efektFunction(muutujaX: number){
    this.koond = this.sisserent+this.jareldusrent;
    muutujaX = this.numberefekt;
    if (muutujaX <= 0.3) {
      //this.muutujaX = 100;
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent2a;
      this.flagef = 2;
      localStorage.setItem("efektiivsus", this.koond);
    }
    else if (0.3 <= muutujaX && muutujaX <= 0.7) {
      this.koond = this.sisserent+this.jareldusrent2+this.jareldusrent3;
      this.flagef = 3;
      localStorage.setItem("efektiivsus", this.koond);
    }
    else if (0.7 < muutujaX) {
      this.koond = this.sisserent+this.jareldusrent+this.jareldusrent4;
      this.flagef = 4;
      localStorage.setItem("efektiivsus", this.koond);
    }

    return this.koond;
  }


}