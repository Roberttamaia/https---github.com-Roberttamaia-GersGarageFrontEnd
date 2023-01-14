import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-vehicle-parts',
  templateUrl: './vehicle-parts.component.html',
  styleUrls: ['./vehicle-parts.component.scss']
})
export class VehiclePartsComponent implements OnInit{
  public vehicleParts: any =  [];
  constructor(private appService : AppService){
    
  }
  ngOnInit(): void {
    this.appService.getVehicleParts()
    .subscribe(data => this.vehicleParts = data);
  }

}
