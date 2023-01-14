import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from '../booking/booking.component';
import { ServicesComponent } from './services/services.component';
import { BookingsComponent } from './bookings/bookings.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BookingRoutingModule } from './booking-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewServiceComponent } from './services/new-service/new-service.component';
import { NewInvoiceComponent } from './invoice/new-invoice/new-invoice.component';



@NgModule({
  declarations: [
    BookingComponent,
    ServicesComponent,
    BookingsComponent,
    InvoiceComponent,
    NewServiceComponent,
    NewInvoiceComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule
  ]
})
export class BookingModule { }
