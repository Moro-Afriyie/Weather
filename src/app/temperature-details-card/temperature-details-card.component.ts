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
  //main
  feelsLike: number;
  humidity: number;
  pressure: number;
  temperature: number;
  mininumTemperature: number;
  maximumTemperature: number;
  //sys
  sunRise: number;
  sunSet: number;
  visibility: number;
  //weather
  weatherDescription: string;
  weatherIcon: string;
  windSpeed: number;
  

  constructor( private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather("Kumasi")
    .subscribe(res => {
      console.log("current weather + ",res);
    });
//    feels_like: 292.03
// humidity: 85
// pressure: 1008
// temp: 291.88
// temp_max: 293.21
// temp_min: 289.46

  }

}
