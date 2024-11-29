export const environment = {
  production: true,
};

export const SpotifyConfiguration = {
  clientId: 'ea190a518b0e4ffba2737cfdff454f2b',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    " user-read-currently-playing", //musica tocando agora
    "user-read-recently-played", //ler musicas tocadas recentemente
    "user-read-playback-state", // ler estado do player do usuario
    "user-top-read", // top artistas e musicas do usuario
    "user-modify-playback-state", //alterar do plyer do usuario
    "user-library-read", //ler biblioteca dos usuarios
    "playlist-read-private",// ler playlist privadas
    "playlist-read-collaborative" // ler playlists colaborativas
  ]
}
