import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EnemieStarsRoutingModule } from "./enemie-stars-routing.module";
import { MorganaComponent } from "@components/enemie-stars/morgana/morgana.component";
import { ZoeComponent } from "@components/enemie-stars/zoe/zoe.component";
import { FiddlesticksComponent } from "@components/enemie-stars/fiddlesticks/fiddlesticks.component";

@NgModule({
  declarations: [MorganaComponent, ZoeComponent, FiddlesticksComponent],
  imports: [CommonModule, EnemieStarsRoutingModule],
})
export class EnemieStarsModule {}
