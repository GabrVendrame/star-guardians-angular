import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EnemieStarsRoutingModule } from "./enemy-stars-routing.module";
import { MorganaComponent } from "@components/enemy-stars/morgana/morgana.component";
import { ZoeComponent } from "@components/enemy-stars/zoe/zoe.component";
import { FiddlesticksComponent } from "@components/enemy-stars/fiddlesticks/fiddlesticks.component";

@NgModule({
  declarations: [MorganaComponent, ZoeComponent, FiddlesticksComponent],
  imports: [CommonModule, EnemieStarsRoutingModule],
})
export class EnemieStarsModule {}
