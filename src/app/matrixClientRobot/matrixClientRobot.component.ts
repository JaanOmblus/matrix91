import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environments';


import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

import { HostListener } from '@angular/core';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);





@Component({
  selector: 'matrix-clientrobot',
  templateUrl: './matrixClientRobot.component.html',
  styleUrls: ['./matrixClientRobot.component.css'],
})
export class ClientRobotComponent implements OnInit {


  hovered: boolean;
  setMyStyles() {
    let styles = {
      'background-color': this.hovered ? 'red' : 'blue',
      'font-weight': this.hovered ? 'bold' : 'normal',
      'border-radius': '50%',
      'width': '400px',
      'height': '400px',
      'transform': this.hovered?'perspective(1000px) translateZ(10px)':'perspective(1000px) translateZ(0px)'
      // 'transform':this.hovered? ' perspective(30px) ' +'scale3d(2, 0.7, 0.2)' + 'translateZ(100px)':''
     
    };
    return styles;
  }
  @HostListener('mouseover')
  public onChange(): any {
    this.hovered = !this.hovered;
  }



  numbermks = 7;
  robotmks = '';
  robotloome()
  {  

    this.robotmks = localStorage.getItem("robotext");
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
    this.numberefk = environment.modelEfekt;

    if (this.numberefk <= 0.4) {
      //this.muutujaX = 100;
      this.robotefk = 'Hullult ebaefektiivne värk...';
    }
    else if (0.4 < this.numberefk) {
      this.robotefk = 'Efektiivsust jääb ülegi, võib välja laenata...';
      
    }
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

  public session = [];
  public writing = false;
  public messages = [
    {
      trigger: 'sessionStart',
      response: 'Tere, olen Robot InteligenciaArtificial, valige mille kohta soovite infot!',
      options: ['Andmed', 'Ajalugu', 'Tulevik', 'Probleemid', 'Lahendusvariandid', 'Mis olemas', 'Mis valesti', 'Mida proovida'],
    },
    {
      trigger: 'Maksevõime',
      response: this.robotloome(),
      options: ['Rentaablus', 'Efektiivsus', 'Struktuur', 'Restart'],
    },
    {
      trigger: 'Rentaablus',
      response: this.robotloome2(),
      options: ['Maksevõime', 'Efektiivsus', 'Struktuur', 'Restart'],
    },
    {
      trigger: 'Efektiivsus',
      response: this.robotloome3(),
      options: ['Maksevõime', 'Rentaablus', 'Struktuur', 'Restart'],
    },
    {
      trigger: 'Struktuur',
      response: this.robotloome4(),
      options: ['Maksevõime', 'Rentaablus', 'Efektiivsus', 'Restart'],
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


  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  private createChartPie(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 5; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      });
    }

        const chart = Highcharts.chart('chart-pie', {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Elujõu komponendid',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        headerFormat: `<span class="mb-2">Kuupäev: {point.key}</span><br>`,
        pointFormat: '<span>Suurus: {point.y}</span>',
        useHTML: true,
      },
      series: [{
        name: null,
        innerSize: '50%',
        data,
      }],
    } as any);

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint({
        name: `Elujõud ${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      }, true, true);
    }, 1500);
  }
  


}
