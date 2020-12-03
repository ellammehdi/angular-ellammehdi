import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Informations, PonyModel } from "./informations";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-my-first-component",
  templateUrl: "./my-first-component.component.html",
  styleUrls: ["./my-first-component.component.scss"]
})
export class MyFirstComponentComponent implements OnInit {
  identityFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.identityFormGroup = this.fb.group({
      firstName: ["", [Validators.required],[Validators.minLength(4)]],
      lastName: ["",[Validators.minLength(4)]],
      email: ["",[Validators.email]],
      Password: ["", [Validators.minLength(6)]],
    });
  }

  Submit() {
    console.log(this.identityFormGroup.value);
  }

get firstName (){
 return this.identityFormGroup.get("firstName");
}
get lastName (){
 return this.identityFormGroup.get("lastName");
}
get email (){
 return this.identityFormGroup.get("email");
}
get Password (){
 return this.identityFormGroup.get("Password");
}


  UpdateProfile() {
    this.identityFormGroup.setValue({
      firstName: "Your FirstName",
      lastName: "Your LastName",
      email: "example@gmail.com",
      Password: "YourPassword"
    });
  }
 
}
