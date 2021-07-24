import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-week-weather-forecast-card',
  templateUrl: './week-weather-forecast-card.component.html',
  styleUrls: ['./week-weather-forecast-card.component.scss']
})
export class WeekWeatherForecastCardComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
   this.weatherService.getFiveDaysWeatherForecast("Kumasi")
    .subscribe(res => console.log("Five days forecast: ",res));
  }

}
