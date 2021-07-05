import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { WeatherDetailsPageComponent } from './weather-details-page/weather-details-page.component';
import { WeekWeatherForecastCardComponent } from './week-weather-forecast-card/week-weather-forecast-card.component';
import { WeatherChartCardComponent } from './weather-chart-card/weather-chart-card.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TemperatureDetailsCardComponent } from './temperature-details-card/temperature-details-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    WeatherDetailsPageComponent,
    WeekWeatherForecastCardComponent,
    WeatherChartCardComponent,
    SearchComponent,
    TemperatureDetailsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
