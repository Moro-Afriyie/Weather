import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureDetailsCardComponent } from './temperature-details-card.component';

describe('TemperatureDetailsCardComponent', () => {
  let component: TemperatureDetailsCardComponent;
  let fixture: ComponentFixture<TemperatureDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
