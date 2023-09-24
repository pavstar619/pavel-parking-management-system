import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { VehicleInfo } from './../vehicle-info';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent {
  vehicles: VehicleInfo[] = [];
  constructor(private vService: VehicleService) {}

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.vService.getAllVehicles().subscribe((vehicles) => {
      console.log(vehicles);
      this.vehicles = vehicles;
    });
  }

  updateVehicle(license: string) {
    
  }
}
