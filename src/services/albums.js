import { options } from "./api";

export const searchAlbums = async ({ artistaId }) => {
  try {
    const urlAlbums = `https://spotify-web2.p.rapidapi.com/artist_albums/?id=${artistaId}&offset=0&limit=100`;
    const resonse = await fetch(urlAlbums, options);
    const data = await resonse.json();
    const albums = data.data.artist.discography.albums.items;
    const infoAlbums = albums.map((album) => ({
      idAlbum: album.releases.items[0].id,
      nameAlbum: album.releases.items[0].name,
      imagenAlbum: album.releases.items[0].coverArt.sources[0].url,
    }));
    return infoAlbums;
  } catch (error) {
    throw new Error("Error al buscar los albumes.");
  }
};
