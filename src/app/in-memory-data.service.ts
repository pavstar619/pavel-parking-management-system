import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { VehicleInfo } from './vehicle-info';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const vehiclesInfo = [
      {
        licenseNo: "123456",
        type: "car",
        ownerName: "Ramy",
        ownerAddress: "asdash jhfkasf poasf saof",
        ownerPhone: "21412545",
        status: "in",
        entryTime: "2023-09-24T04:43:30.874Z",
        parkingCharge: 100,
        id: "4"
      },
      {
        licenseNo: "66",
        type: "car",
        ownerName: "Ramy11",
        ownerAddress: "asdash jhfkasf poasf saof11",
        ownerPhone: "2141254523",
        status: "in",
        entryTime: "2023-04-11T04:43:30.874Z",
        parkingCharge: 100,
        id: "5"
      },
      {
        licenseNo: "664",
        type: "truck",
        ownerName: "Ramy111",
        ownerAddress: "asdash jhfkasf poasf saof11ee",
        ownerPhone: "2141254523e",
        status: "in",
        entryTime: "2023-04-11T04:43:30.874Z",
        parkingCharge: 100,
        id: "7"
      },
    ];
    return { vehiclesInfo };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(vehicles: VehicleInfo[]): number {
  //   return vehicles.length > 0 ? Math.max(...vehicles.map(vehicle => vehicle.id)) + 1 : 11;
  // }
}