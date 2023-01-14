import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit{
  public bookings: any =  [];
  constructor(private appService : AppService){
  
  }
  ngOnInit(): void {
    this.appService.getBookings()
    .subscribe(data => this.bookings = data);
  }

}
