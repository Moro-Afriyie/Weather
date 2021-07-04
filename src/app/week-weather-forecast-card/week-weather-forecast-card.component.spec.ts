import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekWeatherForecastCardComponent } from './week-weather-forecast-card.component';

describe('WeekWeatherForecastCardComponent', () => {
  let component: WeekWeatherForecastCardComponent;
  let fixture: ComponentFixture<WeekWeatherForecastCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekWeatherForecastCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekWeatherForecastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
