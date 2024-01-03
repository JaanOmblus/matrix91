import { Component, ViewChild } from '@angular/core';
//import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'matrix-easychart2',
  templateUrl: './matrixEasyChart2.component.html',
  styleUrls: ['./matrixEasyChart2.component.css']
})
export class EasyChart2Component {
  
  ReadMore:boolean = true
  //hiding info box
  visible:boolean = false
  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }
  
  
  
  name = 'Angular   6';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      type: 'line',
      
      data: {
        datasets: [{
          label: 'Höhenlinie',
          backgroundColor: "rgba(255, 99, 132,0.4)",
          borderColor: "rgb(255, 99, 132)",
          fill: true,
          data: [
            { x: 1, y: 2 },
            { x: 2500, y: 2.5 },
            { x: 3000, y: 5 },
            { x: 3400, y: 4.75 },
            { x: 3600, y: 4.75 },
            { x: 5200, y: 6 },
            { x: 6000, y: 9 },
            { x: 7100, y: 6 },
          ],
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Höhenlinie'
        },
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            //ticks: {
            //  userCallback: function (tick) {
            //    if (tick >= 1000) {
            //      return (tick / 1000).toString() + 'km';
            //    }
            //    return tick.toString() + 'm';
           //   }
           // },
            //scaleLabel: {
            //  labelString: 'Länge',
            //  display: true,
           // }
          },
          y: {
            type: 'linear',
            //ticks: {
            //  userCallback: function (tick) {
            //    return tick.toString() + 'm';
            //  }
            //},
            //scaleLabel: {
            //  labelString: 'Höhe',
            //  display: true
            //}
          }
        }
      }
    });
  }
}
