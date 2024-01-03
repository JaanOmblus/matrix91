import { Component, OnInit } from "@angular/core";
import entries from "./rateDictionary.json";
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: "matrix-ratedict",
  templateUrl: "./matrixRateDict.component.html",
  styleUrls: ["./matrixRateDict.component.css"]
})
export class RateDictComponent implements OnInit { 

  entriesArray: any = [];

  ReadMore:boolean = true
    visible:boolean = false
    onclick()
    {
      this.ReadMore = !this.ReadMore;
      this.visible = !this.visible
    }


  ngOnInit() {

    for (let key in entries.dictionary) {
      if (entries.dictionary.hasOwnProperty(key)) {
        this.entriesArray.push(entries.dictionary[key]);
      }
    }
    //console.log("dictionaryArray", this.entriesArray);  // Sisaldab kogu faili...
   

}

}