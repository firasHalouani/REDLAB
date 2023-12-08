import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {
  
  constructor() {}
randomObject(list:any[]){
  return list[Math.floor(Math.random()*list.length)]
}
  addParticles(string :string){
    let test="white"
    const parentElement = document.getElementById(string);
    const width = parentElement!.offsetWidth;
    const height = parentElement!.offsetHeight;
    let particlesNumber = Math.floor(Math.random()*5)
    for(let i=0 ;i <particlesNumber ; i++){
      let cercleSize = Math.floor(Math.random()*50)+50
      const newDiv = document.createElement("div");
      newDiv.id = "my-new-div";
      newDiv.innerHTML =`<style>
      .cercle${i} {
        position: absolute;
        top: ${Math.floor(Math.random()*height)}px;
        right:${Math.floor(Math.random()*width)}px;
        width:${cercleSize}px;
        height:${cercleSize}px;
        background-color: ${test}; 
        border-radius: 50%; 
        opacity : 10% ;
          }
      </style>
      <div class="cercle${i}"></div>
      `;
      parentElement!.appendChild(newDiv);
    }
  }
  //
  ColorToDecimal(hexColor: any) {
    hexColor = hexColor.replace("#", "");
    const decimalValue = String(parseInt(hexColor, 16));
    const binaryString = decimalValue;
    return parseInt(binaryString);
  }
   invertColors(hex:any) {
    hex = hex.replace("#", "");
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
    }

  MinimalistDesign: any = [
    { 
      "effects" : {apply:(string:string)=>this.addParticles(string)} ,  
      "raduis" : {raduisvalue:()=> {return  "0px"} },
      "size" :{compenentSize:()=>{ return  Math.floor(Math.random()*10) +"px"}},
      "Icons" : [""],
      'Typography' :  ["Helvetica", "Arial", "Roboto"],
      "Colors" : {
        ColorsClassification: (colors: string[]) => {
          const sortedColors = colors.map(e => this.ColorToDecimal(e)).sort().map(e=>"#"+e.toString(16))
          return sortedColors;
        }
      },
    }
  ]
  NeumorphismDesign: any = [
    {  
  
      "size" :{compenentSize:()=>{ {return  Math.floor(Math.random()*50) +"px"}},
      "effects" : {apply:(string:string)=>this.addParticles(string)} ,  
      "raduis" : {raduisvalue:()=> {return  Math.floor(Math.random()*50) +"px"} },
      "Icons" : [""],
      'Typography' :  ["Helvetica", "Arial", "Roboto"],
      "Colors" : {
        ColorsClassification: (colors: string[]) => {
          const sortedColors = colors.map(e => this.ColorToDecimal(e)).sort().map(e=>"#"+e.toString(16))
          return sortedColors;
        }
      },
    }}
  ]
  ModeNightDesign: any = [
    {  
   
      "size" :{compenentSize:()=>{ return Math.floor(Math.random()*100) +"px"}},
      "effects" : {apply:(string:string)=>this.addParticles(string)} ,  
      "raduis" : {raduisvalue:()=> {return  "0px 0px 50px 0px"} },
      "Icons" : [""],
    'Typography' :  ["Helvetica", "Arial", "Roboto"],
      "Colors" : {
        ColorsClassification: (colors: string[]) => {
          const sortedColors = colors.map(e => this.ColorToDecimal(e)).sort().map(e=>"#"+e.toString(16))
          return sortedColors;
        }
      },
    }
  ]

randomStyle() : any{
  let ListStyle = [this.MinimalistDesign[0],this.NeumorphismDesign[0],this.ModeNightDesign[0]]
  return ListStyle[Math.floor(Math.random()*ListStyle.length)]
}

}
