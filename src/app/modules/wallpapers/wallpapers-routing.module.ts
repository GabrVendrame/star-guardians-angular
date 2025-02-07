import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WallpapersComponent } from "@components/wallpapers/wallpapers.component";

const routes: Routes = [
  {
    path: "",
    component: WallpapersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WallpapersRoutingModule {}
