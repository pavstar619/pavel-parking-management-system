import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePieChartComponent } from './vehicle-pie-chart.component';

describe('VehiclePieChartComponent', () => {
  let component: VehiclePieChartComponent;
  let fixture: ComponentFixture<VehiclePieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclePieChartComponent]
    });
    fixture = TestBed.createComponent(VehiclePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
