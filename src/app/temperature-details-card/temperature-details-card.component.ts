import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-temperature-details-card',
  templateUrl: './temperature-details-card.component.html',
  styleUrls: ['./temperature-details-card.component.scss']
})
export class TemperatureDetailsCardComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 100;
  constructor( private weatherService: WeatherService) { }

  ngOnInit(): void {
    // this.weatherService.getCurrentWeather("london")
    // .subscribe(res => console.log("current weather + ",res));
    // this.weatherService.getFiveDaysWeatherForecast("london")
    // .subscribe(res => console.log("Five days forecast: ",res));
   
  }

}
