import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EnemieStarsComponent } from "@components/enemie-stars/enemie-stars.component";
import { EnemieStarsRoutingModule } from "./enemie-stars-routing.module";

@NgModule({
  declarations: [EnemieStarsComponent],
  imports: [CommonModule, EnemieStarsRoutingModule],
})
export class EnemieStarsModule {}
