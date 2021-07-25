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
  minimumTemperature: string;
  maximumTemperature: string;
  //sys
  sunRise: string;
  sunSet: string;
  visibility: string;
  //weather
  weatherDescription: string;
  weatherIcon: string;
  //wind
  windSpeed: string;
  

  constructor( private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather("Kumasi")
    .subscribe(res => {
      this.getWeatherDetails(res);
    });
  }

  getWeatherDetails(weather:any){
    console.log("current weather + ", weather);
    // main
    this.feelsLike = (weather.main.feels_like-273.15).toFixed(0);
    this.temperature = (weather.main.temp-273.15).toFixed(0);
    this.minimumTemperature = (weather.main.temp_min-273.15).toFixed(0);
    this.maximumTemperature = (weather.main.temp_max-273.15).toFixed(0);
    this.pressure = weather.main.pressure;
    this.humidity = weather.main.humidity;
    //sys
    this.sunRise = this.weatherService.convertUnixDate(weather.sys.sunrise, false, true);
    this.sunSet = this.weatherService.convertUnixDate(weather.sys.sunset, false, true);
    //weather
    this.weatherDescription = weather.weather[0].description;
    // wind
    this.windSpeed =  (weather.wind.speed * 1.609).toFixed(1);
    //date
    console.log(this.weatherService.convertUnixDate(weather.dt));
    //icon
    this.weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    
  }

    
}
