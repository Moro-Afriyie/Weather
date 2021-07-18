import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  APIkey:string = 'b23e6a0dcfmsh4ad3478f38e8989p1bea08jsn7bcc14a25fc6';
  URL:string = 'https://community-open-weather-map.p.rapidapi.com';

  constructor(private http: HttpClient) { }


  // get the current weather based on the city
  getCurrentWeather(city) {
    return this.http.get(`${this.URL}/weather?q=${city}&appid=${this.APIkey}`);
  }
}
