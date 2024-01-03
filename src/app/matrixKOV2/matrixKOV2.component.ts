import { Component, OnInit } from "@angular/core";
import ratios from "./currentRatio.json";
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: "matrix-kov2",
  templateUrl: "./matrixKOV2.component.html",
  styleUrls: ["./matrixKOV2.component.css"]
})
export class KOV2Component implements OnInit {

omvkood: string;
ratioData: any;
kovArray: any = [];

  constructor() { //Siin toob sisse
    this.omvkood = environment.kovKood;
    this.ratioData = ratios;
    }


  ngOnInit() {

    for (let key in ratios.ratiosCu) {
      if (ratios.ratiosCu.hasOwnProperty(key)) {
        this.kovArray.push(ratios.ratiosCu[key]);
      }
    }
    console.log("Array on see:", this.kovArray);
    this.filterKirjet();

  }
  

  filterKirjet(){
    var oigeKirje= this.kovArray.filter(e=>{
      return e.kood === this.omvkood
    })

    console.log("Kirje on see: ", oigeKirje);  //Kirje tuleb ära
    
    oigeKirje.forEach(obj=> {
      console.log(obj.keskmineLVKK);
      localStorage.setItem("LVKK", obj.keskmineLVKK); //a
      var summa = parseFloat(obj.keskmineLVKK)*2;
      console.log("Korrutis", summa);
    });

    oigeKirje.forEach(obj=> {
      console.log(obj.nimi);
      localStorage.setItem("Omavalitsus", obj.nimi); //a
      //var summa = parseFloat(obj.keskmineLVKK)*2;
      //console.log("Korrutis", summa);
    });


  }

}


