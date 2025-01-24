import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StarsComponent } from "@components/stars/stars.component";
import { StarsRoutingModule } from "./stars-routing.module";

@NgModule({
  declarations: [StarsComponent],
  imports: [CommonModule, StarsRoutingModule],
})
export class StarsModule {}
