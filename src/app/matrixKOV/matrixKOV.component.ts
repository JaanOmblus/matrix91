//https://klassifikaatorid.stat.ee/item/stat.ee/14f8b6a6-f529-4555-a9a2-6c97ce8ca9c2/4



import { Component, OnInit } from "@angular/core";
import kovid from "./matrixKOV.json";
//import kovid from "./matrixKOV/matrixKOV.json";


@Component({
  selector: "matrix-kov",
  templateUrl: "./matrixKOV.component.html",
  styleUrls: ["./matrixKOV.component.css"]
})
export class KOVComponent implements OnInit {
  kovData: any;

  constructor() {
    this.kovData = kovid;
  }

  //filterById(jsonObject, id) {return jsonObject.filter(function(jsonObject) {return (jsonObject['id'] == id);})[0];}
  //filterById(kovid, id) {return this.kovData.filter(function(kovid) {return (kovid['id'] == id);})[0];}
  //selectedObject = filterById(this.kovData['id'], 2);

  testresults = [
    {'unit_name':'100','status':'aprovado'},
    {'unit_name':'200','status':'reinspection'},
    {'unit_name':'200','status':'reinspection'},
    {'unit_name':'400','status':'reinspection'}
    ]

    kovArray: any = [];
    myarrayoutput: any = [];

  ngOnInit() {
    this.filterUnits();

    for (let key in kovid.kov) {
      if (kovid.kov.hasOwnProperty(key)) {
        this.kovArray.push(kovid.kov[key]);
      }
    }
    
    console.log("oluline: ", this.kovArray);

    this.filterUnits2();
    this.otsimeEdasi();

  }

  filterUnits(){
    var filteredUnitsLlist = this.testresults.filter(e=>{
      return e.status === "aprovado"
    })
    console.log("see konsoolile", filteredUnitsLlist);
  }

  filterUnits2(){
    var filteredUnitsLlist2 = this.kovArray.filter(e=>{
      return e.id === "2"
    })
    console.log("see konsoolile2", filteredUnitsLlist2);  //saame kätte õige kirje
    //console.log("see konsoolile2", filteredUnitsLlist2[id]);
    //PROOVIKS ÕIGEST KIRJEST SLICE TEHA
    //Kirje sees ei saa slicetada, kõik ongi üks slice.
    const slice = filteredUnitsLlist2.slice(0,2) // start and end length remove start value and display up to the end length
    console.log("see on slice", slice)
    //console.log("see konsoolile3", filteredUnitsLlist2.kood);  //Siit ei tule
    this.myarrayoutput.ElementAccess = ('MostSpokenLangs element at index 5 is : ' +  filteredUnitsLlist2[1]) ;
    console.log("element access katsetus", this.myarrayoutput); //siit tuleb tühi tulemus


    let myJSON =[
      {"factioname":"sp-force","inviter":"MohammedZr","salary":5000},
      {"factioname":"air-force", "inviter":"Admin","salary":8000}];
      
    myJSON.forEach(obj=> {
      console.log(obj.salary);
    });

    filteredUnitsLlist2.forEach(obj=> {
      console.log(obj.kood);  //annab välja koodi 0039, see oli ID 2 kood, nagu rida 59 otsisime...
    });


  }

  otsimeEdasi()
  {
  const find = this.kovArray.find(obj => obj.kood == '0037');
  //console.log(this.find);
  const findIndex = this.kovArray.indexOf(find);
  console.log("ehk see",findIndex); //Leiame, mitmes on see kirje...
  }


 // const find = test.find(obj => obj.name == 'yyy');
 // const findIndex = test.indexOf(find);
 // console.log("ehk see",findIndex);




}
