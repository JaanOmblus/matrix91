import { Component } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'matrix-flash',
  templateUrl: './matrixFlash.component.html',
  styleUrls: [ './matrixFlash.component.css' ]
})
export class FlashComponent {
constructor(private flashMessage: FlashMessagesService) { }
  
  showFlash() {
        this.flashMessage.show('Your Data was Saved', { cssClass: 'alert-success', timeout: 2000 });
    }
}