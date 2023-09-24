import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSummaryChartComponent } from './parking-summary-chart.component';

describe('ParkingSummaryChartComponent', () => {
  let component: ParkingSummaryChartComponent;
  let fixture: ComponentFixture<ParkingSummaryChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingSummaryChartComponent]
    });
    fixture = TestBed.createComponent(ParkingSummaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
