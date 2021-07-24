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
  feelsLike: string;
  humidity: number;
  pressure: string;
  temperature: string;
  mininumTemperature: string;
  maximumTemperature: string;
  //sys
  sunRise: string;
  sunSet: string;
  visibility: string;
  //weather
  weatherDescription: string;
  weatherIcon: string;
  windSpeed: number;
  

  constructor( private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather("Kumasi")
    .subscribe(res => {
      this.getWeatherDetails(res);
    });
  }
  getWeatherDetails(weather:any){
    console.log("current weather + ", weather);
    this.feelsLike = (weather.main.feels_like-273.15).toFixed(0);
    this.temperature = (weather.main.temp-273.15).toFixed(0);
    this.mininumTemperature = (weather.temp_min-273.15).toFixed(0);
    this.maximumTemperature = (weather.temp_max-273.15).toFixed(0);
    this.pressure = weather.main.pressure;
    this.humidity = weather.main.humidity;
  }

}
