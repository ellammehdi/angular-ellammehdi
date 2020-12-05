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
      firstName: ["", [Validators.required],[Validators.minLength(4)],[Validators.maxLength(15)]],
      lastName: ["",[Validators.required],[Validators.minLength(4)],[Validators.maxLength(15)]],
      email: ["",[Validators.required],[Validators.email]],
      numberPhone: ["",[Validators.required],Validators.pattern(("[6-9]\\d{9}"))]
    });
  }
 
/*<phoneFormControl = new FormControl('', [
  Validators.compose([
    Validators.required,
    PhoneValidator.validCountryPhone(country)
  ])
);*/
  Submit() {
    console.log(this.identityFormGroup.value);
  }

  UpdateProfile() {
    this.identityFormGroup.setValue({
      firstName: "Your FirstName",
      lastName: "Your LastName",
      email: "example@gmail.com",
      numberPhone: "Your Phone Number"
    });
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
get numberPhone (){
 return this.identityFormGroup.get("numberPhone");
}



  
 
}
