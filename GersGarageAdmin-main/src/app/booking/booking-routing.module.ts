import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { BookingsComponent } from './bookings/bookings.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      { path: 'bookings', component: BookingsComponent },
      { path: 'invoices', component: InvoiceComponent },
      { path: 'services', component: ServicesComponent }


    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
