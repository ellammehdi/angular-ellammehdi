import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Informations, PonyModel } from "./informations";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-my-first-component",
  templateUrl: "./my-first-component.component.html",
  styleUrls: ["./my-first-component.component.css"]
})


export class MyFirstComponentComponent implements OnInit {
  LogForm:FormGroup;
  constructor(fb:FormBuilder) {
    this.LogForm=fb.group({
    UserName: '',
    Pass:'',
    })
                              }

   
    updateLogin(){
                 this.LoginControl.setValue("Enter Your Login");
                 }
    onSubmit(){
      console.log(this.ProfileControl.value);
              }
      UpdateProfile(){
       this.ProfileControl.setValue(
           {
             firstName:"Your FirstName",
             lastName:"Your LastName",
             email:"Your Email",
             password:"Your Password",
             Address: {
            city:"Your City",
            CodePostal:"Code Postal"}
           }
          )
          }
 UpdateLogPass(){
       this.ProfileControl.patchValue(
           {
            email:"email@example.com",
             password:"*********",
           }
          )
          }
        
          
  
  LoginControl= new FormControl();

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
  ngOnInit() {
    this.poniesDict.set(103, { name: "Rainbow Dash" });
    this.poniesDict.set(56, { name: "Pinkie Pie" });

    console.log(this.info);
    this.stringInfo = JSON.stringify(this.info);
    this.newInfo = JSON.parse(this.stringInfo);
    this.newInfo.firstName = "Alice";
    this.newInfo2 = this.newInfo;
    this.newInfo2.firstName = "Alice Info 2";
    console.log(this.newInfo);

    console.log(this.newInfo2);
  }

  info = {
    firstName: "Petra",
    middleName: "Gerald",
    lastName: "Ellis",
    gender: "male",
    yearOfBirth: "1992",
    countries: ["London", "New York", "Ireland"],
    cities: {
      Uk: ["London", "Cardiff", "Manchester", "Birmingham"],
      Usa: "New York",
      Ireland: "Belfast"
    }
  };
}
