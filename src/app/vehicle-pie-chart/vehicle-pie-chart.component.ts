import { Component, Input } from '@angular/core';
import { VehicleInfo } from '../vehicle-info';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-vehicle-pie-chart',
  templateUrl: './vehicle-pie-chart.component.html',
})
export class VehiclePieChartComponent {
  @Input() vehicles: VehicleInfo[] = [];

  public pieChartLabels: string[] = [];
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartData = [{
    data: [] as number[]
  }];
  public pieChartType: string = 'pie';

  constructor() { }

  ngOnChanges() {
    this.updateChartData();
  }

  updateChartData() {
    // Clear previous data
    this.pieChartLabels = [];
    this.pieChartData[0].data = [];

    // Count the number of vehicles per type
    const vehicleTypeCounts: { [key: string]: number } = {};
    this.vehicles.forEach((vehicle) => {
      if (vehicle.status === 'in') {
        const type = vehicle.type;
        vehicleTypeCounts[type] = (vehicleTypeCounts[type] || 0) + 1;
      }
    });

    // Populate chart data
    for (const type in vehicleTypeCounts) {
      if (vehicleTypeCounts.hasOwnProperty(type)) {
        this.pieChartLabels.push(type);
      }
    }

    // Populate chart data
    const data: number[] = Object.values(vehicleTypeCounts);
    this.pieChartData[0].data = data;
  }
}
