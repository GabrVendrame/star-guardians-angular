import { Routes } from "@angular/router";
import { HomeComponent } from "@components/home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "stars",
    loadChildren: () =>
      import("@modules/stars/stars.module").then((m) => m.StarsModule),
  },
  {
    path: "enemy-stars",
    loadChildren: () =>
      import("@modules/enemy-stars/enemy-stars.module").then((m) => m.EnemyStarsModule),
  },
  {
    path: "wallpapers",
    loadChildren: () =>
      import("@modules/wallpapers/wallpapers.module").then((m) => m.WallpapersModule),
  }
];
