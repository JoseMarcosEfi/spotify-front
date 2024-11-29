import { Routes } from "@angular/router";

export const AppRotas: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path: 'player',
    loadChildren: () => import('./player/player.module').then(n => n.PlayerModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];
