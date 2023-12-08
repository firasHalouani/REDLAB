import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { PaletteColorsService } from '../palette-colors.service';
import { StylesService } from '../styles.service';

let palette :any =[
  {buttons:"#C69774", background :"#C69774" , Font : "#3081D0" , textfont:"sans-serif" },
  {buttons:"#8ADAB2", background :"#3081D0" ,Font : "#3081D0" , textfont:"serif" },
  {buttons:"#7071E8", background :"#B31312" , Font : "#8ADAB2" ,textfont:"cursive"},
  {buttons:"#E41749", background :"#000000" , Font : "#C69774", textfont:"cursive"}
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() sharedData : any  
  @Input() composant: any;
  constructor(private colorService: PaletteColorsService , private siteStyle : StylesService) {}
  
  ngOnInit(): void {
    
     this.changeColor()
     this.Bloc0()
     this.Bloc1()
    // Initialization logic goes here
    // console.log(this.colorService.baseColor);
    // console.log(this.colorService.complementaryColorValue);
    // console.log(this.colorService.analogousColorValue);
  }

  navbar: any = {
    position: "fixed",
    backgroundColor: "#3498db",
    color: "white",
    display: "grid",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    
    };
    
    navbarStyles: any = {
      backgroundColor: '#3498db',
      'padding': '10px',
      // marginLeft:"150px",
      borderRadius: "20px",
      color: 'white',
       'display': 'row',
      'justify-content': 'space-between',
      'align-items': 'center',
      'box-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)'
    };

  logoStyles: any = {
    'font-size': '1.5em',
    'font-weight': 'bold'
  };

  navListStyles: any = {
    'list-style': 'none',
    'margin': '0',
    'padding': '5px',
    'display': 'flex'
  };

  navListItemStyles: any = {
    // marginRight: '20px',
    color : "black",
    transition: " transform left 0.20s ease, top 0.1s ease",
  };

  navListLinkStyles: any = {
    'text-decoration': 'none',
    color: 'white',
    'font-weight': 'bold',
    'transition': 'color 0.3s ease',
    fontFamily : "serif"
  };

  navListLinkHoverStyles: any = {
    'color': '#ffcc00'
  };

  searchBarStyles: any = {
    'display': 'relative',
    'align-items': 'center'
  };

  inputStyles: any = {
    'padding': '8px',
    'border': 'none',
    'border-radius': '4px',
    'margin-right': '8px'
  };

  buttonStyles: any = {
    backgroundColor: '#00',
    'color': 'black',
    'border': 'none',
    'padding': '8px',
    'border-radius': '4px',
    'cursor': 'pointer'
  };

  buttonHoverStyles: any = {
    'background-color': '#27ae60'
  };

changeColor(){
  let p :any = this.siteStyle.randomStyle()
  p.effects.apply("sidebar")
  const randomIndex = Math.floor(Math.random() * palette.length);
  let color=p.Colors.ColorsClassification(this.sharedData)
     this.navListLinkStyles.color = color[2];
     this.navbarStyles.backgroundColor = color[1];
     this.buttonStyles.backgroundColor =color[0];
     this.navbarStyles.borderRadius = p.raduis.raduisvalue();
     this.navListLinkStyles.fontFamily = palette[randomIndex].fontFamily;
    //  this.navListItemStyles.marginRight = "0px"
     this.navListStyles.padding= p.size.compenentSize();
     console.log(p.size.compenentSize());
} 

Bloc2(){
  const parentElement = document.getElementById("Bloc0");
  const newDiv = document.createElement("div");
  newDiv.id = "my-new-div1";
  newDiv.innerHTML =this.composant[2]._composant[0][2]
  parentElement!.appendChild(newDiv);
}

Bloc0(){
  const parentElement = document.getElementById("Bloc0");
  const newDiv = document.createElement("div");
  newDiv.id = "my-new-div1";
  newDiv.innerHTML =this.composant[0]._composant[0][2]
  parentElement!.appendChild(newDiv);
}
Bloc1(){
  const parentElement = document.getElementById("Bloc0");
  const newDiv = document.createElement("div");
  newDiv.id = "my-new-div1";
  newDiv.innerHTML =this.composant[1]._composant[0][2]
  parentElement!.appendChild(newDiv);
}




}
