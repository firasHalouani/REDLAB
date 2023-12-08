import { Component, Input, OnInit } from '@angular/core';
import { PaletteColorsService } from '../palette-colors.service';
import { StylesService } from '../styles.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'] 
})
export class NewsComponent implements OnInit {
  @Input() sharedData: any;
  newsData: any[] = [];
  
  FontStyles: any = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    padding: '10px 20px',
    opacity: '100%',
    fontFamily: 'sans-serif'
  };

  gridContainerStyles = {
    display: 'grid',
    'grid-template-columns': 'repeat(3, 1fr)',
    gap: '20px',
    'max-width': '1200px',
    margin: '20px auto',
    padding: '20px',
    'box-sizing': 'border-box'
  };

  cardStyles = {
    backgroundColor: 'skyblue',
    'border-radius': '8px',
    'box-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    'text-align': 'center'
  };

  constructor(private http: HttpClient, private colorService: PaletteColorsService, private siteStyle: StylesService) {}

  ngOnInit(): void {
    this.changeColor();
    this.http.get<any[]>('assets/db.json').subscribe(data => {
      this.newsData = data;
    });
  }

  changeColor() {
    let palette = this.colorService.Palette();
    this.cardStyles.backgroundColor = palette[2];
  }
}
