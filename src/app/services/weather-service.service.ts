import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  APIkey = '';
  URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  constructor(private http: HttpClient) { }


  // get the current weather based on the city
  getCurrentWeather(city) {
    return this.http.get(`${this.URL}/weather?q=${city}&appid=${this.APIkey}`)
  }
}
