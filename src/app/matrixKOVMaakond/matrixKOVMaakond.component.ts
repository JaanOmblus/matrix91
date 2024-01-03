import { Component, OnInit } from "@angular/core";
import ratios from "./maakondRatios.json";
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: "matrix-maakond",
  templateUrl: "./matrixKOVMaakond.component.html",
  styleUrls: ["./matrixKOVMaakond.component.css"]
})
export class KOVMaakondComponent implements OnInit {

omvnimi: string;
ratioData: any;
kovArray: any = [];
maakonnanimi: string;

  constructor() { //Siin toob sisse
    //this.omvkood = environment.kovKood;
    this.omvnimi = environment.omvNimi;
    this.ratioData = ratios;
    }


  ngOnInit() {

    this.maakonnaValik();
    
    for (let key in ratios.ratiosMaakond) {
      if (ratios.ratiosMaakond.hasOwnProperty(key)) {
        this.kovArray.push(ratios.ratiosMaakond[key]);
      }
    }
    console.log("Maakonna nimi", this.maakonnanimi);
    console.log("Array", this.kovArray);
    this.filterKirjet();

  }
  
//https://www.neti.ee/cgi-bin/teema/RIIK_JA_YHISKOND/Regioonid/Vallad/
  maakonnaValik() {

    if (this.omvnimi == "Anija vald" || this.omvnimi == "Harku vald" || this.omvnimi == "Jõelähtme vald" || this.omvnimi == "Kiili vald" || this.omvnimi == "Kose vald" || this.omvnimi == "Kuusalu vald" || this.omvnimi == "Lääne-Harju vald" || this.omvnimi == "Raasiku vald" || this.omvnimi == "Rae vald" || this.omvnimi == "Saku vald" || this.omvnimi == "Saue vald" || this.omvnimi == "Viimsi vald") {
      this.maakonnanimi = "Harju maakond";
      }
    else if (this.omvnimi == "Hiiumaa vald") {
      this.maakonnanimi = "Hiiu maakond";
    }

  }


  filterKirjet(){
    var oigeKirje= this.kovArray.filter(e=>{
      return e.MAAKOND === this.omvnimi
    })

    console.log("Kirje on see maakonnas: ", oigeKirje);  //Kirje tuleb ära
    
    oigeKirje.forEach(obj=> {
      console.log(obj.keskmineLVKK);
      localStorage.setItem("LVKK", obj.keskmineLVKK); //a
      var summa = parseFloat(obj.keskmineLVKK)*2;
      console.log("Korrutis maakonnas", summa);
    });

    oigeKirje.forEach(obj=> {
      console.log(obj.nimi);
      localStorage.setItem("Omavalitsus", obj.nimi); //a
      //var summa = parseFloat(obj.keskmineLVKK)*2;
      //console.log("Korrutis", summa);
    });


  }

}


