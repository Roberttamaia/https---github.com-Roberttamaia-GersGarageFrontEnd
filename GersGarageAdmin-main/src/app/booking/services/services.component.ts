import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { NewServiceComponent } from './new-service/new-service.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{
  public services: any =  [];
constructor(private appService : AppService,private dialog : MatDialog){

}
ngOnInit(): void {
  this.appService.getServices()
  .subscribe(data => this.services = data);
}
openDialog(){
  this.dialog.open(NewServiceComponent);
}
}
