import { Component, Injectable } from '@angular/core';
import { PaletteColorsService } from './palette-colors.service';
import { ScreenSplitService } from './screen-split.service';
import { Bloc } from './Blocs';
// import { Test } from './Colors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  list: Bloc[] = [
    new Bloc(0, false),
    new Bloc(1, false),
    new Bloc(2, false),
    new Bloc(3, false),
  ];
  
  
  title = 'REDLAB';
  sharedData!: any;
  test!: any;
  composant! : any
  constructor(private colorService: PaletteColorsService , private sp :ScreenSplitService ){
    this.sharedData= this.colorService.Palette()
    this.composant=this.sp.split()
    console.log(this.composant)
  }
  ngOnInit(): void {

    this.sharedData= this.colorService.Palette()
    this.changeBackground()
    // this.test=this.sp.split()
    // console.log(this.sp.msg)
    // console.log("new")
    // this.test.forEach((p:any)=>{console.log(p)})
  }

  color : any ={
    backgroundColor : "red"
  }
  changeBackground() {
    const imageUrl = `url("assets/image/image${Math.floor(Math.random()*9)}.jpg")`; 
    document.body.style.backgroundImage = imageUrl;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  }

  
}
