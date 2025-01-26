import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StarsRoutingModule } from "./stars-routing.module";
import { AkaliComponent } from "@components/stars/akali/akali.component";
import { KaisaComponent } from "@components/stars/kaisa/kaisa.component";
import { OriannaComponent } from "@components/stars/orianna/orianna.component";
import { SennaComponent } from "@components/stars/senna/senna.component";
import { SeraphineComponent } from "@components/stars/seraphine/seraphine.component";
import { XayahComponent } from "@components/stars/xayah/xayah.component";
import { RakanComponent } from "@components/stars/rakan/rakan.component";

@NgModule({
  declarations: [
    AkaliComponent,
    KaisaComponent,
    OriannaComponent,
    SennaComponent,
    SeraphineComponent,
    XayahComponent,
    RakanComponent,
  ],
  imports: [CommonModule, StarsRoutingModule],
})
export class StarsModule {}
