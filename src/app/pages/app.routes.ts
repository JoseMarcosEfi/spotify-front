import { Routes } from "@angular/router";
import { usuarioEstaLogadoResolver } from "../resolvers/usuario-esta-logado.resolver";
import { AutenticadoGuard } from "../guards/autenticado.guard";

export const AppRotas: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path: 'player',
    loadChildren: () => import('./player/player.module').then(n => n.PlayerModule),
    resolve:{
      usuarioEstaLogado: usuarioEstaLogadoResolver,
    },
    canMatch: [AutenticadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];
