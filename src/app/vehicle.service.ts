import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleInfo } from './vehicle-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  baseUrl = 'api/vehiclesInfo';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  createVehicleInfo(vInfo: VehicleInfo): Observable<VehicleInfo> {
    return this.http.post<VehicleInfo>(this.baseUrl, vInfo, this.httpOptions);
  }

  getAllVehicles(): Observable<VehicleInfo[]> {
    return this.http.get<VehicleInfo[]>(this.baseUrl);
  }
}
