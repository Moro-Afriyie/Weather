import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  APIkey:string = 'b23e6a0dcfmsh4ad3478f38e8989p1bea08jsn7bcc14a25fc6';
  URL:string = 'https://community-open-weather-map.p.rapidapi.com';

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
