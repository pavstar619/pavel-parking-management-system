import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleInfo } from './../vehicle-info';
import { VehicleService } from './../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent {
  @Input() vehicle?: VehicleInfo;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getVehicle();
    console.log('zzzzzz' + this.vehicle);
  }

  getVehicle(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehicleService.getVehicle(id)
      .subscribe(vehicle => this.vehicle = vehicle);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.vehicle) {
      this.vehicleService.updateVehicle(this.vehicle)
        .subscribe(() => this.goBack());
    }
  }
}
