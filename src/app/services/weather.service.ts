import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // get Api key
  APIkey:string = environment.APIkey;
  URL:string = 'http://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) { }


  // get the current weather based on the city
  getCurrentWeather(city: string) {
    return this.http.get(`${this.URL}/weather?q=${city}&appid=${this.APIkey}`);
  }
  
  //get 5 days weather forecast with 3 hours interval
  getFiveDaysWeatherForecast(city: string) {
    return this.http.get(`${this.URL}/forecast?q=${city}&exclude=minutely,hourly,alerts&appid=${this.APIkey}`)
  }

  //get 30 days climate forecast 
  getClimateForecast(city: string) {
    return this.http.get(`${this.URL}/climate?q=${city}&appid=${this.APIkey}`)
  }
}
