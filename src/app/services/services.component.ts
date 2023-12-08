import { Component, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { PaletteColorsService } from '../palette-colors.service';
import { StylesService } from '../styles.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  city!:string;
  weatherData:any;
  @Input() sharedData : any 
  constructor(private weatherService:WeatherService , private colorService: PaletteColorsService , private siteStyle : StylesService){}
  
  ngOnInit(): void {
    this.changeColor()
 }

  container  : any =  {
    backgroundColor: "bluesky",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "8px",
    textalign: "center",
    marginLeft: "250px",
    marginTop: "20px", /* Add margin-top to create space between the header and content */
}

label :any={
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
  padding: "10px 20px",
  opacity : "100%",
  fontFamily : "sans-serif"
}


  
  getWeather(){
    this.weatherService.getWeather(this.city).subscribe(data=>{
      this.weatherData=data;
      console.log(data);
    })
  }

  changeColor(){

    let p :any = this.colorService.Palette()
    let color=this.siteStyle.randomStyle()
    let colors=color.Colors.ColorsClassification(p)
    this.container.backgroundColor=colors[1]
    this.label.color=colors[2]

    // this.FontStyles.color=color[0]

   
  } 



}
