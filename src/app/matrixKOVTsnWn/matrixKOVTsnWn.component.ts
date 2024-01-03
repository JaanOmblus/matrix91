import { Component } from '@angular/core';
import { MngKkComponent } from '../matrixKOVTsnWn/matrixKOVMngKk/matrixKOVMngKk.component';
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: 'matrix-tsnwn',
  templateUrl: './matrixKOVTsnWn.component.html',
  styleUrls: ['./matrixKOVTsnWn.component.css'],
})
export class TsnWnComponent {
  
  maksevoimemudel: any;
  vordlussuhtarv: any;
  maksevoimeVald: any;
  maksevoimeValdF: number;
  numbermksv: number;

  tulemus: any;
  tulemus2: any;
  
  constructor() {
  this.maksevoimeVald = localStorage.getItem("vallasuhtarvMVK");
  this.maksevoimeValdF = parseFloat(this.maksevoimeVald);  //Valla reaalne MVK
  this.numbermksv = environment.modelMaksevoime;  //Mudelist saadud
  }

  calculationMaksevoimeComp() {
    let arvutusComponent = new MngKkComponent();
    this.tulemus = arvutusComponent.funktsioonArgyle(this.numbermksv, this.maksevoimeValdF);
    return this.tulemus;

  }
  
  miinimumnaitaja = 0.22; // neli põhilist suhtarvu iga valla kohta, nende min ja max leida...
  maksimumnaitaja = 1.33;
  calculationMaksevoimeComp2() {
    let arvutusComponent2 = new MngKkComponent();
    this.tulemus2 = arvutusComponent2.funktsioonArgyle2(this.numbermksv, this.maksevoimeValdF, this.miinimumnaitaja, this.maksimumnaitaja);
    return this.tulemus2;

  }
  



}