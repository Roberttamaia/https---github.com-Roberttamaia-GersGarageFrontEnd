import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehiclePartsComponent } from './vehicle-parts/vehicle-parts.component';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';
import { VehicleComponent } from './vehicle.component';
const routes: Routes = [
  {
    path: '',
    component: VehicleComponent,
    children: [
      { path: 'vehicle-list', component: VehicleListComponent },
      { path: 'vehicle-parts', component: VehiclePartsComponent },
      { path: 'vehicle-types', component: VehicleTypeComponent }

    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule {}
