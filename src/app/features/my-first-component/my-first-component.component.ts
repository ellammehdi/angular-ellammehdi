import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Informations, PonyModel } from "./informations";

@Component({
  selector: "app-my-first-component",
  templateUrl: "./my-first-component.component.html",
  styleUrls: ["./my-first-component.component.css"]
})
export class MyFirstComponentComponent implements OnInit {
  constructor() {}

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
