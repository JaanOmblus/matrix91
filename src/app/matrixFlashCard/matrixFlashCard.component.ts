import { Component } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'matrix-flashcard',
  templateUrl: './matrixFlashCard.component.html',
  styleUrls: [ './matrixFlashCard.component.css' ]  
})
export class FlashCardComponent  {
  flipped = false;
  //imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH"

  toggle() {
    this.flipped = !this.flipped;
  }

  tekstike = "tagumise külje tekst"

  kirjuta() {
    this.tekstike = localStorage.getItem("rentaablus");
    return this.tekstike;
  }


  ReadMore:boolean = true
  //hiding info box
  visible:boolean = false
  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }
  



}