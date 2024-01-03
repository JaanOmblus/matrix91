import { Component, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { environment } from '../../environments/environments';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  colors: String[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'matrix-bchart',
  templateUrl: './matrixBChart.component.html',
  styleUrls: ['./matrixBChart.component.css'],
})
export class BChartComponent {
  name = 'Angular';
  @ViewChild('chart', { static: false }) chart: ChartComponent;
  public chartOptions;


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

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'mudelihinnang',
          data: [this.numbriloome(), this.numbriloome2(), this.numbriloome3(), this.numbriloome4(), this.numbriloome5()],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      colors: [
        '#d4526e',
        '#13d8aa',
        '#A5978B',
        '#2b908f',
        '#f9a3a4'
        
      ],
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Struktuuri mudel',
          'Maksevõime mudel',
          'Rentaabluse mudel',
          'Efektiivsuse mudel',
          'Laenukoormuse mudel'
          

        ],
      },
    };
  }
}
