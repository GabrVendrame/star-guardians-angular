import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WallpapersComponent } from "@components/wallpapers/wallpapers.component";
import { WallpapersRoutingModule } from "./wallpapers-routing.module";

@NgModule({
  declarations: [WallpapersComponent],
  imports: [CommonModule, WallpapersRoutingModule],
})
export class WallpapersModule {}
