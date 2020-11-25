import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StockService {
  constructor() {}

  writeToConsole() {
    console.log("from service StockService");
  }
}
