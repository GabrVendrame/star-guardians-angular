import { Component } from "@angular/core";
import { BackgroundComponent } from "../background/background.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: "app-home",
  imports: [FooterComponent, BackgroundComponent, NavbarComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
