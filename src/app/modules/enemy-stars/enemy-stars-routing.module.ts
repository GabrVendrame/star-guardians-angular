import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FiddlesticksComponent } from "@components/enemy-stars/fiddlesticks/fiddlesticks.component";
import { MorganaComponent } from "@components/enemy-stars/morgana/morgana.component";
import { ZoeComponent } from "@components/enemy-stars/zoe/zoe.component";

const routes: Routes = [
  {
    path: "fiddlesticks",
    component: FiddlesticksComponent,
  },
  {
    path: "morgana",
    component: MorganaComponent,
  },
  {
    path: "zoe",
    component: ZoeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnemyStarsRoutingModule {}
