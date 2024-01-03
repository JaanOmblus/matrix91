import { Component } from '@angular/core';
import { ChaterComponent } from '../matrixCentral/matrixChater/matrixChater.component';

@Component({
  selector: 'matrix-central',
  templateUrl: './matrixCentral.component.html',
  styleUrls: ['./matrixCentral.component.css'],
})
export class CentralComponent {

employee = new ChaterComponent();
firstName = 'xxx';
lastName = 'yyy';
salary = 2000;

newsalary: any;

callFuncc(){
this.newsalary = this.employee.increaseSalary(5);
console.log(this.newsalary);

}

callFun2(){
  this.newsalary = this.employee.increaseSalary(5);
  //console.log(this.newsalary);
  return this.newsalary;
  }

//trykifunktsioon(){
//console.log("Central");
//}
//console.log(employee.salary);
//localStorage.setItem('palk', employee.salary.toString());

uusinfo: any;

callFun3(){
  let uusasi = new ChaterComponent();
  this.uusinfo = uusasi.increaseSalary(19);
  //this.newsalary = this.employee.increaseSalary(5);
  //console.log(this.newsalary);
  //console.log(this.uusasi);
  }


  data: any;
  compOneData: any;
  constructor() { } 

  //ngOnInit() {
 //   let myCompOneObj = new ChaterComponent();
 //    this.compOneData = myCompOneObj.compOneData;
  //}

  callFun() {
    let myCompOneObj = new ChaterComponent();
    this.data = myCompOneObj.myFunctionOne();
    return this.data
  }


  tulemus: any;
  calculationFun() {
    let arvutusComponent = new ChaterComponent();
    this.tulemus = arvutusComponent.liitmisfunktsioon(6);
    return this.tulemus;

  }



}

//let myCompOneObj = new ComOneComponent();
//     this.compOneData = myCompOneObj.compOneData;
//compOneData: any;

//callFun() {
//  let myCompOneObj = new ComOneComponent();
//  this.data = myCompOneObj.myFunctionOne()
//}