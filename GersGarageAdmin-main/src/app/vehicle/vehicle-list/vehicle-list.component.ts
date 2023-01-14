import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  public vehicles: any =  [];
  constructor(private appService : AppService){
    
  }
  ngOnInit(): void {
    this.appService.getVehicles()
    .subscribe(data => this.vehicles = data);
  }

}
