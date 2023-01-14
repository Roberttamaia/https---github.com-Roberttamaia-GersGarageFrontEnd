import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  addUserFormGroup: FormGroup;

constructor(private formBuilder: FormBuilder,private http: HttpClient){
  this.addUserFormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    role: ['', Validators.required]
  });
}

  ngOnInit(): void {
  }


  Users(){
    let data = {
      name: this.addUserFormGroup.value.name,
      firstName: this.addUserFormGroup.value.firstName,
      lastName: this.addUserFormGroup.value.lastName,
      email: this.addUserFormGroup.value.email,
      role: this.addUserFormGroup.value.role,
    
    };
    return data;

  }

  saveUser(){
    let data = this.Users();
    this.http.post('http://localhost:9191/addUser', data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error))
}
}