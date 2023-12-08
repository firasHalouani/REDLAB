import { Component,Input,OnInit  } from '@angular/core';
import { StylesService } from '../styles.service';
// import {MatIconModule} from '@angular/material/icon'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @Input() sharedData : any 
  @Input() composant: any
  constructor(private siteStyle : StylesService){}

   ngOnInit(): void {
    this.changeColor()
    this.Bloc3()
  }
  

Fonts = ["Segoe UI" , "sans-serif", "serif"]
avatarSection:any ={
  textAlign: "center",
  marginLeft: "19px",
  display : "row"
}

avatarImg:any ={
  width: "60px",  /* Ajustez la taille selon vos besoins */
  height: "60px",
  borderRadius: "50%",  /* Pour rendre l'image circulaire */
  marginBottom: "5px",
};
sidebar: any = {
  top:"0px",
width : "121px",
height: "100%", 
backgroundColor : "#333" ,
borderRadius : "20px",
position: "relative",
  };
  
ul: any = {
    listStyleType: 'none',
    padding: 0,
  };
a: any = {
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
  display: "block",
  padding: "10px 20px",
};

label :any={
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
  padding: "10px 20px",
  opacity : "100%",
  fontFamily : "sans-serif"
}


// Dessine le cercle

changeColor(){
  let p :any = this.siteStyle.randomStyle()
  p.effects.apply("sidebar")
  let randomNumber : number = Math.floor(Math.random()*100)+100
  let color=p.Colors.ColorsClassification(this.sharedData)
this.sidebar.borderRadius= p.raduis.raduisvalue();  
  
this.sidebar.background=color[0]
this.sidebar.width=String(randomNumber)+"px"
this.label.fontFamily =this.Fonts[Math.floor(Math.random()*this.Fonts.length)]
if (randomNumber < 124 ) {
    this.sidebar.width=String(randomNumber-50)+"px"
    this.label.opacity="0%"
  }
  this.avatarImg.width=String(Math.floor(randomNumber/3))+"px"
  this.avatarImg.height=String(Math.floor(randomNumber/3))+"px"
}

Bloc3(){
  const parentElement = document.getElementById("Bloc3");
  const newDiv = document.createElement("div");
  newDiv.id = "my-new-div";
  newDiv.innerHTML =this.composant[3]._composant[0][2]
  parentElement!.appendChild(newDiv);
}

 


}
