import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { environment } from '../../environments/environments';

@Component({
  selector: 'matrix-info',
  templateUrl: './matrixInfo.component.html',
  styleUrls: [ './matrixInfo.component.css' ]
})
export class InfoComponent {

kk = '';

naitame() {

this.kk = "Ülaltoodud joonisel on näidatud mudelite hinnangud. Alljärgnevalt on võimalik avada joonisel kujutatud mudelite hinnangud tabelina. Kui mudeli hinnang on üle 0.7, siis on tegemist normaalse/hea olukorraga. Kui mudeli hinnang on alla 0.7, kuid üle 0.4, siis on tegemist vahepealse olukorraga. Kui mudeli hinnang on alla 0.4, siis on tegemist probleemse olukorraga.";

return this.kk;

}

naitame2() {

  this.kk = '';
  
  return this.kk;
  
  }

kkk = 3;

Andmed: mudeliTabel[] = [
  { title1: 'Mudeli nimi: ', title2: '  Mudeli hinnang: ', id: this.numbriloome(), name: 'mudelStruktuur ' },
  { title1: 'Mudeli nimi: ', title2: '  Mudeli hinnang: ', id: this.numbriloome2(), name: 'mudelMaksevõime' },
  { title1: 'Mudeli nimi: ', title2: '  Mudeli hinnang: ', id: this.numbriloome3(), name: 'mudelRentaablus' },
  { title1: 'Mudeli nimi: ', title2: '  Mudeli hinnang: ', id: this.numbriloome4(), name: 'mudelEfektiivsus' },
  { title1: 'Mudeli nimi: ', title2: '  Mudeli hinnang: ', id: this.numbriloome5(), name: 'mudelLaen' }
  
];

noAndmed: mudeliTabel[] = [];

results: any;

  name = 'Angular';
 

  showData() {
    this.results = this.Andmed;
  }

  showNoData() {
    this.results = this.noAndmed;
  }

  reset(){
    this.results = [{}];
  }

  numberstr = 7;
  numbriloome()
  {  
    this.numberstr = environment.modelStruktuur;
    return this.numberstr;
  }
  
  numbermks = 7;
  numbriloome2()
  {  
    this.numbermks = environment.modelMaksevoime;
    return this.numbermks;
  }

  numberrnt = 7;
  numbriloome3()
  {  
    this.numberrnt = environment.modelRent;
    return this.numberrnt;
  }

  numberefk = 7;
  numbriloome4()
  {
    this.numberefk = environment.modelEfekt;
    return this.numberefk;
  }

  numberln = 7;
  numbriloome5()
  {
    this.numberln = environment.modelLaen;
    return this.numberln;
  }



}

export interface mudeliTabel {
  id: any;
  name: string;
  title1: string;
  title2: string;
}



//const emptyHeros: Hero[] = [];

//const Heros: Hero[] = [
//  { id: 5, name: 'mudelStruktuur' },
//  { id: 12, name: 'Narco' },
//  { id: 13, name: 'Bombasto' },
//  { id: 14, name: 'Celeritas' },
//  { id: 15, name: 'Magneta' },
//  { id: 16, name: 'RubberMan' },
//  { id: 17, name: 'Dynama' },
//  { id: 18, name: 'Dr IQ' },
//  { id: 19, name: 'Magma' },
//  { id: 20, name: 'Tornado' }
//];


