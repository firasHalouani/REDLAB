import { Injectable } from '@angular/core';
import { Bloc } from './Blocs';
import { AllMycomponentService } from './all-mycomponent.service';
import { PaletteColorsService } from './palette-colors.service';
import { StylesService } from './styles.service';

@Injectable({
  providedIn: 'root'
})
export class ScreenSplitService {
  colors!:any 
  constructor(private siteStyle : StylesService , private al : AllMycomponentService ,private colorService: PaletteColorsService ) {
    this.colors= this.colorService.Palette()
    let p :any = this.siteStyle.randomStyle()
  }
  
  // let color=p.Colors.ColorsClassification(this.sharedData)
  avatar : string  = this.al.avatar()
  searchbar : string = this.al.searchBar(this.colorService.Palette()[1])
  navbarelement : string = this.al.navbarElement()
  Logo : string = this.al.logo()
  logo : string  = `<p>REDLAB</p>`
   list: Bloc[] = [
    new Bloc(0, false),
    new Bloc(1, false),
    new Bloc(2, false),
    new Bloc(3, false),
  ];

   composant: any[] = [
    ["avatar", [2,3], this.avatar],
    ["SiteLogo", [2,3] ,this.logo],
    ["searchbar", [0,1], this.searchbar],
    ["navbar", [0,1],this.navbarelement],
  ];


   test(t:number){
    return this.composant.filter(p=>p[1].some((s: any)=>
       (s===t)
    ))
  }
  split(){
    for (let i =0; i<this.list.length ; i++){
      let comp=this.test(i)
      console.log("comp=",comp)
      let randomcomp =comp.length!=0?comp[Math.floor(Math.random()*comp.length)] : comp[0]
      console.log(randomcomp)
      this.list[i].addComponent(randomcomp)
      this.composant = this.composant.filter(item =>item!=randomcomp);
    }
    return this.list
    }
 
  

}
