import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'detail/:id', component: VehicleDetailsComponent },
  { path: 'info-form', component: InfoFormComponent },
  { path: 'vehicle-list', component: VehicleListComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
