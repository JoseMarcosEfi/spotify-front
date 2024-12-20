import { Routes } from "@angular/router";
import { PlayerComponent } from "./player.component";
import { AutenticadoGuard } from "src/app/guards/autenticado.guard";

export const PlayerRotas: Routes =[
  {
    path: '',
    component: PlayerComponent,
    canMatch: [AutenticadoGuard]
  
  }
]
