import { Component } from '@angular/core';

@Component({
  selector: 'matrix-kovmngkk',
  templateUrl: './matrixKOVMngKk.component.html',
  styleUrls: ['./matrixKOVMngKk.component.css'],
})
export class MngKkComponent {

  summa: any;
  funktsioonArgyle(liidetav, liidetav2) {
    this.summa = liidetav2 + liidetav;
    return this.summa;
  }

  protsent: any;
  sonum: any;
  funktsioonArgyle2(mudelinumber, vallanumber, miinimumnaitaja, maksimumnaitaja) {
    this.protsent = (vallanumber-miinimumnaitaja)/(maksimumnaitaja-miinimumnaitaja);
    //console.log("vallanumber:",vallanumber);
    //console.log("miinimumnaitaja:", miinimumnaitaja);
    let kk = vallanumber-miinimumnaitaja;
    //console.log("esimene lahutus:", kk);
    console.log("protsent", this.protsent);

    if (mudelinumber <= this.protsent) {
      this.sonum = "Olete kehvapoolne!!!";
      }
    else if (this.protsent < mudelinumber) {
      this.sonum = "Olete tubli!!!";
    }

    return this.sonum;
  }


}

//Vajame:
//iga valdkonna juhtiva suhtarvu min ja maximumi... panema json faili siia
//juhtivat suhtarvu, mis on reaalne võtame storagest.  KOVVald saab saata...


