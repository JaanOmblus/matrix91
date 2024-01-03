import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environments';

@Component({
  selector: 'matrix-chat',
  templateUrl: './matrixChat.component.html',
  styleUrls: ['./matrixChat.component.css'],
})
export class ChatComponent implements OnInit {

  numbermks = 7;
  robotmks = '';
  robotloome()
  {  

    this.robotmks = localStorage.getItem("maksevoime");
    //this.numbermks = environment.modelMaksevoime;


    //if (this.numbermks <= 0.4) {
      //this.muutujaX = 100;
      //this.robotmks = 'Maksevõimega on suht kehvad lood...';
    //}
    //else if (0.4 < this.numbermks) {
      //this.robotmks = 'Maksevõime annab lootust...';
    //  this.robotmks = localStorage.getItem("paiknemine");
      
    //}
    return this.robotmks;
  }

  numberrnt = 7;
  robotrnt = '';
  robotloome2()
  {  

    this.robotrnt = localStorage.getItem("rentaablus");
    //this.numberrnt = environment.modelRent;

    //if (this.numberrnt <= 0.4) {
      //this.muutujaX = 100;
    //  this.robotrnt = 'Rentaablusest pole suurt lõhnagi...';
    //}
   // else if (0.4 < this.numberrnt) {
   //   this.robotrnt = 'Täiesti rentaabel värk...';
      
   // }
    return this.robotrnt;
  }

  numberefk = 7;
  robotefk = '';
  robotloome3()
  {  
    this.robotefk = localStorage.getItem("efektiivsus");
    //this.numberefk = environment.modelEfekt;

    //if (this.numberefk <= 0.4) {
      //this.muutujaX = 100;
    //  this.robotefk = 'Hullult ebaefektiivne värk...';
    //}
    //else if (0.4 < this.numberefk) {
   //   this.robotefk = 'Efektiivsust jääb ülegi, võib välja laenata...';
      
    //}
    return this.robotefk;
  }

  numberstr = 7;
  robotstr = '';
  robotloome4()
  {  
    this.robotstr = localStorage.getItem("struktuur");
    
    //this.numberli = environment.modelEfekt;

    //if (this.numberefk <= 0.4) {
      //this.muutujaX = 100;
    //  this.robotefk = 'Hullult ebaefektiivne värk...';
   // }
    //else if (0.4 < this.numberefk) {
    //  this.robotefk = 'Efektiivsust jääb ülegi, võib välja laenata...';
      
    //}
    return this.robotstr;
  }

  robotln = '';
  robotloome5()
  {  
    this.robotln = localStorage.getItem("laenukoormus");
    
    //this.numberli = environment.modelEfekt;

    //if (this.numberefk <= 0.4) {
      //this.muutujaX = 100;
    //  this.robotefk = 'Hullult ebaefektiivne värk...';
   // }
    //else if (0.4 < this.numberefk) {
    //  this.robotefk = 'Efektiivsust jääb ülegi, võib välja laenata...';
      
    //}
    return this.robotln;
  }

  public session = [];
  public writing = false;
  public messages = [
    {
      trigger: 'sessionStart',
      response: 'Tere, olen Robot InteligenciaArtificial, valige mille kohta soovite infot!',
      options: ['Maksevõime', 'Rentaablus', 'Efektiivsus', 'Struktuur', 'Laen'],
    },
    {
      trigger: 'Maksevõime',
      response: this.robotloome(),
      options: ['Rentaablus', 'Efektiivsus', 'Struktuur', 'Laen', 'Restart'],
    },
    {
      trigger: 'Rentaablus',
      response: this.robotloome2(),
      options: ['Maksevõime', 'Efektiivsus', 'Struktuur', 'Laen', 'Restart'],
    },
    {
      trigger: 'Efektiivsus',
      response: this.robotloome3(),
      options: ['Maksevõime', 'Rentaablus', 'Struktuur', 'Laen', 'Restart'],
    },
    {
      trigger: 'Struktuur',
      response: this.robotloome4(),
      options: ['Maksevõime', 'Rentaablus', 'Efektiivsus', 'Laen', 'Restart'],
    },
    {
      trigger: 'Laen',
      response: this.robotloome5(),
      options: ['Maksevõime', 'Rentaablus', 'Efektiivsus', 'Struktuur', 'Restart'],
    },
    {
      trigger: 'Restart',
      response: 'Tere, olen Bonito Robot de Inteligencia Artificial, valige oma soov!',
      options: ['Maksevõime', 'Rentaablus', 'Efektiivsus', 'Struktuur'],
    },
  ];

  constructor() {}

  ngOnInit() {
    this.session.push(
      this.formartMsjSession('bot', this.getNextMsg('sessionStart'))
    );
  }

  getNextMsg(trigger: string) {
    let msj = this.messages.find((msj) => msj.trigger == trigger);
    if (msj.trigger == 'Restart') {
      this.session = [];
      this.session.push(
        this.formartMsjSession('bot', this.getNextMsg('sessionStart'))
      );
    }
    return msj;
  }

  onOptionSelected(option: any) {
    this.writing = true;
    setTimeout(() => {
      this.session.push(this.formartMsjSession('user', { response: option }));
      this.session.push(this.formartMsjSession('bot', this.getNextMsg(option)));
      this.writing = false;
    }, 1800);
  }

  formartMsjSession(autor, msg) {
    return {
      autor,
      ...msg,
    };
  }
}
