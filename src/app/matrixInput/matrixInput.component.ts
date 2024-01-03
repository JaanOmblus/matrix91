import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'matrix-inxput',
  templateUrl: './matrixInput.component.html',
  styleUrls: [ './matrixInput.component.css' ]
})
export class InxputComponent {
  name = 'Angular';
  numberValue:number =2;
  textValue = '0';
  textNumberValue = '0';

  key: string = 'item';
  localValue: string = '';
  myItem: string;

  ngOnInit() {
    //alert('Kas luban laadida?');
  }  

valjund:number;  
sisendmuutuja(numberValue:number) {
  this.localValue = numberValue.toString();
  localStorage.setItem(this.key, this.localValue);
  this.valjund = numberValue*2;
return this.valjund;
}

numbriloome2() {

return 8;
}

loemestoragest() {
  this.myItem = localStorage.getItem(this.key);
  Number(this.myItem);
  return this.myItem;
}



number1 = 7;
numbriloome5()
  {
    this.number1 = this.sisendmuutuja(this.numberValue);
    return this.number1;
  }

canvas: any;
ctx: any;
@ViewChild('mychart') mychart;
















}
