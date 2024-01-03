import { Component } from '@angular/core';

@Component({
  selector: 'matrix-chater',
  templateUrl: './matrixChater.component.html',
  styleUrls: ['./matrixChater.component.css'],
})
export class ChaterComponent {
  title = 'Statistikamaailma';

  firstName!: string;
  lastName!: string;
  //salary!: number;
  salary = 2000;

  increaseSalary(percent: number): void {
    if (percent >= 0 && percent <= 100) {
      const amount = this.salary * (percent / 100);
      this.salary += amount;
    }
  }

  compOneData: any;
  constructor() { }

  //ngOnInit() {
  //this.compOneData = {'name':'asdasd'};
  //}

    
  myFunctionOne(){
    //console.log('Comp One console called');
    return 'called'
  }

  summa: any;
  liitmisfunktsioon(liidetav) {
    this.summa = this.salary + liidetav;
    return this.summa;
  }


}