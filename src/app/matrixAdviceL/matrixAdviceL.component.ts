import { Component } from '@angular/core'; 
import { environment } from '../../environments/environments';
import { HostListener } from '@angular/core';
import { AfterViewInit } from '@angular/core';

declare var anime: any;
declare var trykib: any;  

@Component({ // Add the @Component decorator.
  selector: 'matrix-adviceL', 
  templateUrl: './matrixAdviceL.component.html',
  styleUrls: ['./matrixAdviceL.component.css']
})


export class AdviceLComponent implements AfterViewInit { 

  naidis = "algtekst";
  text2 = "see on uus tekst proovimiseks, eriti pikemaks proovimiseks";


  muutujaX = 1;
  muutujaY = 1;

  numberx = 0;
  numberxxx = 0;
  numberxxxx =0;
  hinnangusumma = 0;
  hinnangusumma2 = 0;

  numberstr = 0;
  numbermks = 0;
  numberrnt = 0;
  numberefk = 0;
  numberln = 0;
  numberstring = '';
  lisa ='px';
  koondstring ='';
  ringiraadius = 0;

  constructor() { //Siin toob sisse
  this.numberstr = environment.modelStruktuur;
  this.numbermks = environment.modelMaksevoime;
  this.numberrnt = environment.modelRent;
  this.numberefk = environment.modelEfekt;
  this.numberln = environment.modelLaen;
  this.numberxxx = this.numberln+this.numberefk;
  this.numberxxxx = this.numberxxx *100;
  //this.numberstring = this.numberxxxx.toString();  
  //this.koondstring = this.numberstring + this.lisa;

  this.hinnangusumma = this.numberstr + this.numbermks + this.numberrnt + this.numberefk + this.numberln;
  this.hinnangusumma2 = Math.round(this.hinnangusumma*100)/100
  this.ringiraadius = (this.hinnangusumma2 * 20) + 100;
  this.numberstring = this.ringiraadius.toString();
  this.koondstring = this.numberstring + this.lisa;
}


  tekstiloome2() {

    if (this.hinnangusumma2 >= 4.8) {
      //this.muutujaX = 100;
      this.naidis = "Läheb ju väga hästi...";
    }
    else if (this.hinnangusumma2 < 4.8 && this.hinnangusumma2 >= 4.3 ) {
      this.naidis = "Peaaegu väga hästi...";
    }
    else if (this.hinnangusumma2 < 4.3 && this.hinnangusumma2 >= 4 ) {
      this.naidis = "Täitsa OK algus...";
    }
    else if (this.hinnangusumma2 < 4 && this.hinnangusumma2 >= 3.8 ) {
      this.naidis = "Pisut saaks ikka paremini...";
    }
    else if (this.hinnangusumma2 < 3.8 && this.hinnangusumma2 >= 3.3 ) {
      this.naidis = "Ehk ikka üle keskpärase...";
    }
    else if (this.hinnangusumma2 < 3.3 && this.hinnangusumma2 >= 3 ) {
      this.naidis = "Suht keskpärane variant...";
    }
    else if (this.hinnangusumma2 < 3 && this.hinnangusumma2 >= 2.8 ) {
      this.naidis = "Pisut alla keskpärase olukord...";
    }
    else if (this.hinnangusumma2 < 2.8 && this.hinnangusumma2 >= 2.3 ) {
      this.naidis = "Kisub kehvapoolsemaks lahendus...";
    }
    else if (this.hinnangusumma2 < 2.3 && this.hinnangusumma2 >= 2 ) {
      this.naidis = "Probleemne olukord...";
    }
    else if (this.hinnangusumma2 < 2 && this.hinnangusumma2 >= 1.8 ) {
      this.naidis = "Halb olukord...";
    }
    else if (this.hinnangusumma2 < 1.8 && this.hinnangusumma2 >= 1.3 ) {
      this.naidis = "Väga halb olukord...";
    }
    else if (this.hinnangusumma2 < 1.3) {
      this.naidis = "Katastrofaalne seis..."
    }
  
    return this.naidis + this.text2;
  
  }
  
  yldtext = 'Ettevõttel läheb hästi, soovitada probleemide lahendust otseselt ei ole. '
  strtext = '';
  mkstext = '';
  rnttext = '';
  efktext = '';
  lntext = '';

  tekstiloome3() {
  
    if (this.numberstr <= 0.51) {
      this.strtext = "Oluline on tegeleda bilansi struktuuri küsimustega. Võimalused on kas (a) omakapitali suurendamine või (b) kohustuste vähendamine või (c) mingi kombinatsioon nendest kahest. ";
      this.yldtext = 'Ettevõttel on probleemne olukord, võiks kaaluda mõne soovituse järgimist. ';
    }

    if (this.numbermks <= 0.51) {
      this.mkstext = "Oluline on tegeleda maksevõime suurendamisega.  Kui ettevõttel ei ole üldist probleeme laenudega või varadega üldises mõttes, siis on lahenduseks likviidsete varade osakaalu suurendamine. ";
      this.yldtext = 'Ettevõttel on probleemne olukord, võiks kaaluda mõne soovituse järgimist. ';
    }

    if (this.numberrnt <= 0.51) {
      this.rnttext = "Oluline on tegeleda rentaabluse suurendamisega.  Kuna ettevõtte varad toodavad liiga vähe väärtust tagasi, siis on peamiselt kaks võimalust olukorra parandamiseks: (a) suurendada käivet, ehk siis et tootvate varade kohta tuleks rohkem klienditellimusi või (b) vähendada varasid ja/või muuta nende olemust.  Võib olla aitab teist liiki varade kaasamine/kasutamine ettevõttel paremini toime tulla, rohkem väärtus luua. ";
      this.yldtext = 'Ettevõttel on probleemne olukord, võiks kaaluda mõne soovituse järgimist. ';
    }

    if (this.numberefk <= 0.51) {
      this.efktext = "Oluline on tegeleda sellega, kui efektiivselt ettevõte suudab oma varasid kasutada. Probleemne võib olla klientide poolt rahade laekumine, millest tulenevalt tuleb tegeleda sellega, et kliendid paremini tellimuste eest maksaksid.  Probleemne võib olla ka kauba- ja materjalivarude kasutamise efektiivsusega - lattu tootmine ei aita kaasa varade kasutamise efektiivsemaks muutmisele. ";
      this.yldtext = 'Ettevõttel on probleemne olukord, võiks kaaluda mõne soovituse järgimist. ';
    }

    if (this.numberln <= 0.51) {
      this.lntext = "Oluline on tegeleda sellega, kui palju on ettevõte laene võtnud. Selgelt on tekkimas olukord, kus laenude osakaal on muutumas liiga suureks ning võib tekkida olukord, kus ettevõte ei tule oma laenukoormuse haldamisega enam toime. Võimalusel tuleks katsuda lühiajalisi laene refinantseerida pikaajalisemateks laenudeks. Vältida peaks proovima olukorda, kus igapäevaste toimetulekukulude katteks võetakse laenu. Samuti tuleks kaaluda võimalust omakapitali osakaalu suurendamiseks läbi täiendavate omavahendite kaasamise ettevõttesse. ";
      this.yldtext = 'Ettevõttel on probleemne olukord, võiks kaaluda mõne soovituse järgimist. ';
    }

    return this.yldtext + this.strtext + this.mkstext + this.rnttext + this.efktext + this.lntext;
  }

  trykib: any;

//text2 = "see on uus tekst proovimiseks, eriti pikemaks proovimiseks";

ngAfterViewInit(): void {
    // Wrap every letter in a span
const textWrapper = document.querySelector('.an-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
.add({targets: '.an-1 .letter',
//scale: [4,1],
opacity: [0,1],
//duration: 950,
delay: (el:any, i:any) => 72*i

})

}

//naidis = "see on trükkimiseks mõeldud tekst... tuleb selline, nagu tuleb, paras peavalu..."

  
//hinnangusumma2 vahemikus 0-5

varv = '';
 
// this.numberxxx = this.numberln+this.numberefk;
 

tekstiloome() {

  if (this.hinnangusumma2 >= 4.8) {
    //this.muutujaX = 100;
    this.naidis = "Läheb ju väga hästi...";
  }
  else if (this.hinnangusumma2 < 4.8 && this.hinnangusumma2 >= 4.3 ) {
    this.naidis = "Peaaegu väga hästi...";
  }
  else if (this.hinnangusumma2 < 4.3 && this.hinnangusumma2 >= 4 ) {
    this.naidis = "Täitsa OK algus...";
  }
  else if (this.hinnangusumma2 < 4 && this.hinnangusumma2 >= 3.8 ) {
    this.naidis = "Pisut saaks ikka paremini...";
  }
  else if (this.hinnangusumma2 < 3.8 && this.hinnangusumma2 >= 3.3 ) {
    this.naidis = "Ehk ikka üle keskpärase...";
  }
  else if (this.hinnangusumma2 < 3.3 && this.hinnangusumma2 >= 3 ) {
    this.naidis = "Suht keskpärane variant...";
  }
  else if (this.hinnangusumma2 < 3 && this.hinnangusumma2 >= 2.8 ) {
    this.naidis = "Pisut alla keskpärase olukord...";
  }
  else if (this.hinnangusumma2 < 2.8 && this.hinnangusumma2 >= 2.3 ) {
    this.naidis = "Kisub kehvapoolsemaks lahendus...";
  }
  else if (this.hinnangusumma2 < 2.3 && this.hinnangusumma2 >= 2 ) {
    this.naidis = "Probleemne olukord...";
  }
  else if (this.hinnangusumma2 < 2 && this.hinnangusumma2 >= 1.8 ) {
    this.naidis = "Halb olukord...";
  }
  else if (this.hinnangusumma2 < 1.8 && this.hinnangusumma2 >= 1.3 ) {
    this.naidis = "Väga halb olukord...";
  }
  else if (this.hinnangusumma2 < 1.3) {
    this.naidis = "Katastrofaalne seis..."
  }

  return this.naidis;

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