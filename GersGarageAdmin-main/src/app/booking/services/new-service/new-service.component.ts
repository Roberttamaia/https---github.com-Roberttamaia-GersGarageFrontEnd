import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent {
  addServiceFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient
    ) {

    this.addServiceFormGroup = this.formBuilder.group({
      serviceName: ['', Validators.required],
      weight: ['', Validators.required]

    });

   }



services() {
  let data = {
    serviceName: this.addServiceFormGroup.value.serviceName,
    weight: this.addServiceFormGroup.value.weight
  };
  return data;
}


   saveService(){
    let data = this.services();
    this.http.post('http://localhost:9191/addService', data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error))
   }


}