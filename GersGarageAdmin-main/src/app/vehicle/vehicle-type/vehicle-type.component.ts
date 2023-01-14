import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.scss']
})
export class VehicleTypeComponent implements OnInit {
  public vehicleTypes: any =  [];
  constructor(private appService : AppService){
    
  }
  ngOnInit(): void {
    this.appService.getVehicleTypes()
    .subscribe(data => this.vehicleTypes = data);
  }

}
