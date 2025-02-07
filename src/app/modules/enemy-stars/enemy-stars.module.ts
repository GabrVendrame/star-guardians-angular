import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FiddlesticksComponent } from "@components/enemy-stars/fiddlesticks/fiddlesticks.component";
import { MorganaComponent } from "@components/enemy-stars/morgana/morgana.component";
import { ZoeComponent } from "@components/enemy-stars/zoe/zoe.component";
import { EnemyStarsRoutingModule } from "./enemy-stars-routing.module";

@NgModule({
  declarations: [MorganaComponent, ZoeComponent, FiddlesticksComponent],
  imports: [CommonModule, EnemyStarsRoutingModule],
})
export class EnemyStarsModule {}
