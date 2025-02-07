import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AkaliComponent } from "@components/stars/akali/akali.component";
import { KaisaComponent } from "@components/stars/kaisa/kaisa.component";
import { OriannaComponent } from "@components/stars/orianna/orianna.component";
import { RakanComponent } from "@components/stars/rakan/rakan.component";
import { SennaComponent } from "@components/stars/senna/senna.component";
import { SeraphineComponent } from "@components/stars/seraphine/seraphine.component";
import { XayahComponent } from "@components/stars/xayah/xayah.component";

const routes: Routes = [
  {
    path: "akali",
    component: AkaliComponent,
  },
  {
    path: "kaisa",
    component: KaisaComponent,
  },
  {
    path: "orianna",
    component: OriannaComponent,
  },
  {
    path: "rakan",
    component: RakanComponent,
  },
  {
    path: "senna",
    component: SennaComponent,
  },
  {
    path: "seraphine",
    component: SeraphineComponent,
  },
  {
    path: "Xayah",
    component: XayahComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarsRoutingModule {}
