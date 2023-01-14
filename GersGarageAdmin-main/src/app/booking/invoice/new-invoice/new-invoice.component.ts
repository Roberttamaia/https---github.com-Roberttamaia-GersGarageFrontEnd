import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent {
  addInvoicesFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient){
    this.addInvoicesFormGroup = this.formBuilder.group({
      totalAmount: ['', Validators.required],
      paidAmount: ['', Validators.required],
    });
  }

invoices() {
  let data = {
    totalAmount: this.addInvoicesFormGroup.value.name,
    paidAmount: this.addInvoicesFormGroup.value.email,
  };
  return data;
}

 saveInvoice(){
  let data = this.invoices();
  this.http.post('http://localhost:9191/addIvoince', data).subscribe(
    (response) => console.log(response),
    (error) => console.log(error))
}
}