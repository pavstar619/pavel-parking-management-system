import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { VehicleInfo } from './../vehicle-info';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  currentDate = new Date(Date.now());
  PARKING_SPOTS = 20;
  vehicles: VehicleInfo[] = [];
  filteredVehicles: VehicleInfo[] = [];

  filterForm = this.fb.group({
    dateFilter: new FormControl(
      `${this.currentDate.getMonth() + 1
      }/${this.currentDate.getDate()}/${this.currentDate.getFullYear()}`
    ),
  });
  constructor(private fb: FormBuilder, private vehicleService: VehicleService) { }
  ngOnInit() {
    this.getVehicles();
    this.filterForm.valueChanges.subscribe((cng) => {
      const date = new Date(cng.dateFilter || '').toISOString().slice(0, 10);
      this.filteredVehicles = this.filterVehicles(date);
    });
  }

  getVehicles() {
    this.vehicleService.getAllVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
    });
  }

  vehiclesParkedByType(type: string) {
    return this.vehicles.filter((v) => v.status === 'in' && v.type === type)
      .length;
  }

  vehiclesParked() {
    return this.vehicles.filter((v) => v.status === 'in').length;
  }

  filterVehicles(date: string) {
    return this.vehicles.filter(
      (v) => v.entryTime.toLocaleString().includes(date) && v.status === 'in'
    );
  }
}
