import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

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

  //This is to change the unix date to a standard date
  convertUnixDate(date, dayname = false, time = false){
    const day = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    const month = ["Jan", "Feb", "Mar", "April", "May", "June",
        "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    const d = new Date(date * 1000)
    const isAMorPM = d.getHours() >= 12 ? "pm" : "am"
    const weatherDateTime = `${d.getHours() > 12 ? d.getHours() - 12 : d.getHours()}:${d.getMinutes()} ${isAMorPM}, ${day[d.getDay()]}, ${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    const dayName = `${month[d.getMonth()]} ${d.getDate()}`
    const getTime = `${d.getHours() > 12 ? d.getHours() - 12 : d.getHours()}:${d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes()} ${isAMorPM}`
    if (dayname)
        return dayName

    if (time)
        return getTime

    return weatherDateTime
}
}
