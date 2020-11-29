import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ComppComponent } from "../compp/compp.component";
import { MyFirstComponentComponent } from "./features/my-first-component/my-first-component.component";
import { StockListingComponent } from "./features/stock-management/stock-listing/stock-listing.component";
import { StockService } from "./features/stock-management/stock.service";
import { MatInputModule } from "@angular/material/input";
import { DemoMaterialModule } from "./material.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ComppComponent,
    MyFirstComponentComponent,
    StockListingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
