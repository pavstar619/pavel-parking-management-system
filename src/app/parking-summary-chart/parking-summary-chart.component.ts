import { Component, Input } from '@angular/core';
import { VehicleInfo } from '../vehicle-info';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-parking-summary-chart',
  templateUrl: './parking-summary-chart.component.html',
})
export class ParkingSummaryChartComponent {
  @Input() vehicles: VehicleInfo[] = [];
  public lineChartData = [{
    data: [] as number[]
  }];
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend: boolean = true;

  constructor() { }

  ngOnChanges() {
    this.updateChartData();
  }

  updateChartData() {
    // Initialize data arrays
    const dailyData: number[] = [];
    const weeklyData: number[] = [];
    const monthlyData: number[] = [];

    // Initialize labels
    const labels: string[] = [];

    // Create date objects for the current date and the previous 6 days
    const currentDate = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);

      // Calculate summaries for each interval (daily, weekly, monthly)
      const dailySummary = this.calculateDailySummary(date);
      const weeklySummary = this.calculateWeeklySummary(date);
      const monthlySummary = this.calculateMonthlySummary(date);

      // Add data to arrays
      dailyData.push(dailySummary);
      weeklyData.push(weeklySummary);
      monthlyData.push(monthlySummary);

      // Add label to labels array (e.g., "Sep 1", "Sep 2", etc.)
      labels.push(this.formatDateLabel(date));
    }

    // Update chart data and labels
    this.lineChartData = [
      { data: dailyData, },
      { data: weeklyData, },
      { data: monthlyData, },
    ];
    this.lineChartLabels = labels;
  }

  calculateDailySummary(date: Date): number {
    // Implement logic to calculate daily summary
    // Example: Count the number of parked cars for the given date
    const dateString = date.toISOString().slice(0, 10); // Format date as YYYY-MM-DD
    return this.vehicles.filter(
      (vehicle) =>
        vehicle.status === 'in' &&
        vehicle.entryTime.toString().slice(0, 10) === dateString
    ).length;
  }

  calculateWeeklySummary(date: Date): number {
    // Implement logic to calculate weekly summary
    // Example: Count the number of parked cars for the current week
    // You can adjust this logic based on your requirements
    return 0; // Placeholder, replace with actual calculation
  }

  calculateMonthlySummary(date: Date): number {
    // Implement logic to calculate monthly summary
    // Example: Count the number of parked cars for the current month
    // You can adjust this logic based on your requirements
    return 0; // Placeholder, replace with actual calculation
  }

  formatDateLabel(date: Date): string {
    // Format the date label for the chart (e.g., "Sep 1", "Sep 2", etc.)
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return `${monthNames[date.getMonth()]} ${date.getDate()}`;
  }
}
