import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Informations, PonyModel } from "./informations";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-my-first-component",
  templateUrl: "./my-first-component.component.html",
  styleUrls: ["./my-first-component.component.css"]
})
export class MyFirstComponentComponent implements OnInit {
  LogForm: FormGroup;

  onSubmit() {
    console.log(this.ProfileControl.value);
  }
  UpdateProfile() {
    this.ProfileControl.setValue({
      firstName: "Your FirstName",
      lastName: "Your LastName",
      email: "Your Email",
      password: "Your Password",
      Address: {
        city: "Your City",
        CodePostal: "Code Postal"
      }
    });
  }
  UpdateLogPass() {}

  ProfileControl = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    Address: new FormGroup({
      city: new FormControl(),
      CodePostal: new FormControl()
    })
  });
  poniesDict = new Map<number, PonyModel>();

  ponies: Array<any> = [
    { name: "Rainbow Dash" },
    { name: "Pinkie Pie" },
    { name: "Fluttershy" },
    { name: "Rarity" }
  ];

  birthDate = Date.now();

  stringInfo = "";
  newInfo: Informations;
  newInfo2: Informations;
  ngOnInit() {}
}
