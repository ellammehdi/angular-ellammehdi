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
      firstName: ["", Validators.required],
      lastName: "",
      email: "",
      password: ""
    });
  }

  onSubmit() {
    console.log("lkjlkj");
  }
  UpdateProfile() {
    this.ProfileControl.setValue({
      firstName: "Your FirstName",
      lastName: "Your LastName",
      email: "Your Email",
      password: "Your Password"
    });
  }
  UpdateLogPass() {}

  ProfileControl = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });
}
