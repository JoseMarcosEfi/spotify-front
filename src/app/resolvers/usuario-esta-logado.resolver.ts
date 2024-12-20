import { inject } from "@angular/core"
import { SpotifyService } from "../pages/services/spotify.service";
import { Router } from "@angular/router";

export const usuarioEstaLogadoResolver = () => new Promise(async(res, rej) => {
  const spotifySerrvice = inject(SpotifyService);
  const router = inject(Router);

  const naoAutenticado = () => {
    localStorage.clear();
    router.navigateByUrl('/login');
    rej('Usuário não autenticado')
    return  false;
  }

  const token = localStorage.getItem('token');

  if(!token){
    return naoAutenticado();
  }

const usuarioCriado = await spotifySerrvice.inicializarUsuario();
if(usuarioCriado)
  res(true);
else
  res(naoAutenticado());

  return false;
})
