import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { environment } from '../../environments/environments';

@Component({
  selector: 'matrix-graph',
  templateUrl: './matrixGraph.component.html',
  //template: '<plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot>',
  styleUrls: [ './matrixGraph.component.css' ]
})
export class GraphComponent {
  
  
  numberstr = 6;
  numbermks = 0;
  numberrnt = 0;
  numberefk = 0;
  numberln = 0;
  
 
   

  //constructor() { //Siin toob sisse
  //  this.numberstr = environment.modelStruktuur;
  //  this.numbermks = environment.modelMaksevoime;
  //  this.numberrnt = environment.modelRent;
  //  this.numberefk = environment.modelEfekt;
  //  this.numberln = environment.modelLaen;
  //}

  numbriloome(x:number)
  {  
    this.numberstr = environment.modelStruktuur;
    return this.numberstr;
  }

  numbriloome2()
  {  
    this.numbermks = environment.modelMaksevoime;
    return this.numbermks;
  }

  numbriloome3()
  {  
    this.numberrnt = environment.modelRent;
    return this.numberrnt;
  }

  numbriloome4()
  {
    this.numberefk = environment.modelEfekt;
    return this.numberefk;
  }

  numbriloome5()
  {
    this.numberln = environment.modelLaen;
    return this.numberln;
  }

  name = 'Elujõud';
  j = 1;
  legend = true;
  
    
  public graph = {
        data: [
            { x: ['mudel1', 'mudel2', 'mudel3', 'mudel4', 'mudel5'], y: [this.numbriloome(7)*1.2, this.numbriloome2()*1.6, this.numbriloome3()*2.1, this.numbriloome4()*1.9, this.numbriloome5()*1.8], text: ["Struktuur", 'Maksevõime', 'Rentaablus', 'Efektiivsus', 'Laen'],  name: 'Prognoos', type: 'scatter', mode: 'lines+points+text', marker: {color: 'rgb(98, 0, 255)'} },
            { x: ['mudel1','mudel2', 'mudel3', 'mudel4', 'mudel5'], y: [this.numbriloome(7), this.numbriloome2(), this.numbriloome3(), this.numbriloome4(), this.numbriloome5()], text: ["Struktuur", 'Maksevõime', 'Rentaablus', 'Efektiivsus', 'Laen'], name: 'Hetkeseis', type: 'bar', marker: {color: 'rgb(170, 255, 0)'} },
        ],
        layout: {width: 620, height: 400, showlegend: false, legend: {x: 0, orientation: 'h', y: -1.5}, 
        title: 'Seis elujõulisusega',
      

       // var trace1 = {
       //   x: ['A12', 'BC2', 109, '12F', 215, 304],
      //    y: [1, 6, 3, 5, 1, 4],
       //   mode: 'markers',
       //   type: 'bar',
       //   name: 'Team A',
      //    text: ['Apples', 'Pears', 'Peaches', 'Bananas', 'Pineapples', 'Cherries'],
      //  };



        xaxis: {
          title: 'Mudelite arvamused',
          titlefont: {
            family: 'Arial, sans-serif',
            size: 18,
            color: 'lightgrey'
            
          },

          //tickvals:['2007-01-01', '2007-09-01', '2008-01-01'],
          //ticktext : ['2007', '2015', '2016'],

          showticklabels: true,
          showtext: true,
          tickangle: 'auto',
          tickfont: {
            family: 'Old Standard TT, serif',
            size: 14,
            color: 'black'
          },
          exponentformat: 'e',
          showexponent: 'all'
        }
      
      
      
      
      }
    };

  

  
}