import { Component, OnInit } from '@angular/core';
//import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';
import { ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../environments/environments';

//https://www.appsloveworld.com/chartjs/100/1/chart-js-core-js6162-error-error-line-is-not-a-registered-controller-source-code?expand_article=1

@Component({
  selector: 'matrix-autochart',
  templateUrl: './matrixAutoChart.component.html',
  styleUrls: [ './matrixAutoChart.component.scss' ]
})
export class AutoChartComponent implements OnInit  {
  name = 'Angular';
  numberValue = 0;
 
//https://www.chartjs.org/docs/master/samples/scale-options/grid.html
numbermks = 7;
  numbriloome2()
  {  
    this.numbermks = environment.modelMaksevoime;
    return this.numbermks;
  }

  valjund = 1;  
  sisendmuutuja(numberValue:number) {

  this.valjund = numberValue*2;
  return this.valjund;
  }
  number1 = 7;

  numbriloome5()
  {
    this.number1 = this.sisendmuutuja(this.numberValue);
    return this.number1;
  }

  key: string = 'item';
  localValue: string = '';
  myItem: string;
  myItem2: number;

  loemestoragest() {
    this.myItem = localStorage.getItem(this.key);
    this.myItem2=Number(this.myItem);
    return this.myItem2;
  }


  chart: any;
  chartDataArray: any = []; // Chart Data
  optionsArray: any = []; // Menu Options
  optionsPanel: boolean; // Menu Status
  xGridVisible: boolean = true; // X Axis Lines
  yLabelVisible: boolean = true; // Y Axis Label
  selectedCheckbox: any; // InnerHTML of Selected Checkbox in Legend
  date: any = new Date();
  month: any = this.date.getMonth();
  months: any = [
    'Jaan',
    'Veebr',
    'Mär',
    'Apr',
    'Mai',
    'Juun',
    'Juul',
    'Aug',
    'Sept',
    'Okt',
    'Nov',
    'Dets',
  ];
  xAxisVisible: boolean = true;
  currentMonth: any = this.months[this.month];

  @ViewChild('yAxis', { static: false }) yAxis: ElementRef;
  @ViewChild('xGrid', { static: false }) xGrid: ElementRef;

  ngOnInit() {
    

    // Push JSON to options array
    
  }

  ngAfterViewInit() {
    let data: any,
      options: any,
      ctx: any = document.getElementById('lineChart3') as HTMLElement;

    data = {
      datasets: [
        {
          label: 'Maksevõime',
          backgroundColor: '',
          borderColor: '#02a9f7',
          data: [this.loemestoragest()*100, this.numbriloome2()*1.1*100, this.numbriloome2()*0.2*100, this.numbriloome2()*0.3*100, this.numbriloome2()*0.5*100, this.numbriloome2()*0.7*100, this.numbriloome2()*100*0.65, this.numbriloome2()*100*0.63, this.numbriloome2()*100*0.98, this.numbriloome2()*100*0.67, this.numbriloome2()*100*0.73, this.numbriloome2()*100*1.2],
          //data: this.chartDataArray[0].line,
          fill: false,
        },
        {
          label: 'Käibevahendid',
          fill: false,
          backgroundColor: '',
          borderColor: '#02577a',
          data: [this.numbriloome2()*100*0.95, this.numbriloome2()*100*1.08, this.numbriloome2()*100*0.85, this.numbriloome2()*100*0.9, this.numbriloome2()*100*0.92, this.numbriloome2()*100*0.94, this.numbriloome2()*100*0.93, this.numbriloome2()*100*0.89, this.numbriloome2()*100*0.99, this.numbriloome2()*100*0.92, this.numbriloome2()*100*0.93, this.numbriloome2()*100*0.96],
          //data: this.chartDataArray[1].line,
        },
      ],
      fill: false, // Change this to true, add rgba(...) in datasets background color
    };

    data.labels = this.months;

    options = {
      maintainAspectRatio: false, // Enables custom canvas dimension
      responsive: true,
      layout: {
        padding: {
          top: 20,
          right: 20,
          left: 20,
          bottom: 0,
        },
      },
      title: {
        display: false,
        text: '',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      legend: {
        display: false,
        position: '',
      },
      //scales: {
      //  yAxes: [
      //    {
      //      ticks: {
      //        display: false,
      //      },
      //      gridLines: {
      //        display: false,
      //      },
      //    },
      //  ],
      //  xAxes: [
      //    {
      //      ticks: { display: this.xAxisVisible },
      //      gridLines: {
      //        display: false,
      //      },
      //    },
      //  ],
      //},
    };

    this.chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });

    // 10 line spaced 10% apart. See options.json
    this.generateXgridLines(10, 10);
  }

  // Generate X Axis Grid
  // Clear div
  // Inject divs with dynamic styling
  generateXgridLines(lineCount: number, percentage: number) {
    this.xGrid.nativeElement.innerHTML = '';
    this.selectedCheckbox = lineCount;
    for (var i = 1; i < lineCount; i++) {
      this.xGrid.nativeElement.innerHTML +=
        "<div style='top:" +
        Math.round(percentage * i) +
        "%' class='xLines'></div>";
    }
  }

  // Change x axis line count
  // Select Checkbox on Line Number
  changeLineCount(xLines: any, e: any) {
    this.generateXgridLines(xLines.value, xLines.percent);
    this.selectedCheckbox = e.target.parentElement.querySelector('p').innerHTML;
  }

  // Toggle options menu
  toggleOptions() {
    this.optionsPanel = !this.optionsPanel;
  }

  // Select top three menu items
  selectItem(i: any) {
    if (this.optionsArray[i].item === 'Y Axis') {
      this.yLabelVisible = !this.yLabelVisible;
    }
    if (this.optionsArray[i].item === 'X Axis Labels') {
      this.xAxisVisible = !this.xAxisVisible;
      this.chart.options.scales.xAxes[0].display = this.xAxisVisible;
      this.chart.update();
    }
    if (this.optionsArray[i].item === 'X Axis Grid Lines') {
      this.xGridVisible = !this.xGridVisible;
    }
    this.optionsArray[i].checkMark = !this.optionsArray[i].checkMark;
  }

}


		
	