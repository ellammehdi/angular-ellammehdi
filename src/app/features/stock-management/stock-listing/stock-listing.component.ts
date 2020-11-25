import { Component, OnInit } from "@angular/core";
import { StockService } from "../stock.service";
import { User } from "./user";

@Component({
  selector: "app-stock-listing",
  templateUrl: "./stock-listing.component.html",
  styleUrls: ["./stock-listing.component.css"]
})
export class StockListingComponent implements OnInit {
  public countries: string[] = ["morocco", "spain", "france", "belgium"];
  PAYS = "Algerie";
  messageCount = "0";
  user: User;
  user2: User;
  users: Array<User> = [];

  Info = {
    Firstname: "Petra",
    Middlename: "Gerald",
    Lastname: "Ellis",
    Gender: "male",
    YearOfBirth: "1992",
    Countries: ["London", "New York", "Ireland"],
    Cities: {
      Uk: ["London", "Cardiff", "Manchester", "Birmingham"],
      Usa: "New York",
      Ireland: "Belfast"
    }
  };

  constructor(private stockService: StockService) {}

  ngOnInit() {
    console.log("FirstName from JSON : " + this.Info.Firstname);
    console.log("thecountry is : " + this.Info.Countries[1]);
    console.log("city from json : " + this.Info.Cities.Uk[2]);

    document.getElementById("toJson").innerHTML = JSON.stringify(this.Info);

    this.stockService.writeToConsole();
    this.user = <User>{};
    this.user.firstName = "mehdi";
    this.user.lastName = "el lamrani";
    this.user.address = "bloc 32, num 22 , aida village , tanger";
    this.user.phoneNumber = ["0604437550", "0669484272"];
    this.user.email = [
      "ellamraniimehdi@gmail.com",
      "mehdi.aellamrani@hotmail.fr"
    ];
    this.user.isActive = true;
    this.user.activeStyle = "";

    this.user2 = <User>{};
    this.user2.firstName = "Oussama";
    this.user2.lastName = "Dinia";
    this.user2.address = "10 rue ampere 92000 Nanterre";
    this.user2.phoneNumber = ["00000000", "0661501386"];
    this.user2.email = ["oussama.dinia@gmail.com", "oussama.dinia@engie.com"];
    this.user2.isActive = false;
    this.user2.activeStyle = "active";

    this.users.push(this.user);
    this.users.push(this.user2);
    console.log(this.users);
  }
}
