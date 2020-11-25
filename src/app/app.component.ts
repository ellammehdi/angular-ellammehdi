import { Component, OnInit, VERSION } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public name = "Mehdi";
  public lname = "El Lamrani";
  public numberOflike: number = 5;

  constructor(private title: Title) {
    title.setTitle("fromation angular");
  }

  ngOnInit() {
    this.title.setTitle("formation Angular from on init");
  }
}
