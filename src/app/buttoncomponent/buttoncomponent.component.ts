import { Component } from '@angular/core';

@Component({
  selector: 'app-buttoncomponent',
  templateUrl: './buttoncomponent.component.html',
  styleUrl: './buttoncomponent.component.css'
})
export class ButtoncomponentComponent {
  buttonStyles: any = {
    position: 'relative',
    top: '0px',
    left: '0px'
  };
  onMouseEnter() {
    // Example: Move the button 10 pixels to the right and 20 pixels down when hovered
    const randomleft : string = String(Math.floor(Math.random()*500)+20)+"px" ; 
    this.buttonStyles.left = randomleft;
    this.buttonStyles.top = randomleft;
  }

  // onMouseLeave() {
  //   // Reset the position when the mouse leaves
  //   this.buttonStyles.left = '0px';
  //   this.buttonStyles.top = '0px';
  // }
}
