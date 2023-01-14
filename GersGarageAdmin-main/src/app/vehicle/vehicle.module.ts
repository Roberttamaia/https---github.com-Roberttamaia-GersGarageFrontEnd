import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';
import { VehiclePartsComponent } from './vehicle-parts/vehicle-parts.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    VehicleComponent,
    VehicleListComponent,
    VehicleTypeComponent,
    VehiclePartsComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    SharedModule
  ]
})
export class VehicleModule { }
