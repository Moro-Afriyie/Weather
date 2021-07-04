import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherChartCardComponent } from './weather-chart-card.component';

describe('WeatherChartCardComponent', () => {
  let component: WeatherChartCardComponent;
  let fixture: ComponentFixture<WeatherChartCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherChartCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
