import { Component } from '@angular/core';
import { environment } from '../../environments/environments';

@Component({
  selector: 'matrix-region',
  templateUrl: 'matrixRegion.component.html',
  styleUrls: ['matrixRegion.component.css'],
})
export class RegionComponent {
  
  asukohtInd: number;
  asukohavaartus: string;

  constructor() {
    this.asukohtInd = environment.mregion;
  
  }

  koostameregion () {

    if (this.asukohtInd == 1) {
      this.asukohavaartus = "Põlva";
      localStorage.setItem("paiknemine", this.asukohavaartus);
    }
    else if (this.asukohtInd == 2) {
      this.asukohavaartus = "Tartu";
      localStorage.setItem("paiknemine", this.asukohavaartus);
      
    }

  return this.asukohavaartus;
  }
  
  

}