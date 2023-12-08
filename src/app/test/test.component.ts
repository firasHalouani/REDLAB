import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  @Input() composant : any 
  constructor(){}

  ngOnInit(): void {
    console.log(this.composant[0]._composant[0][2])
    const parentElement = document.getElementById("bloca");
    const newDiv = document.createElement("div");
    newDiv.id = "my-new-div";
    newDiv.innerHTML =this.composant[0]._composant[0][2]
    parentElement!.appendChild(newDiv);
  }
}
