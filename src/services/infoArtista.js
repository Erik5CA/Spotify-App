import { options } from "./api";

export const searchArtista = async ({ artistaId }) => {
  // console.log('searchAlbums')
  try {
    const urlInfoArtista = `https://spotify-web2.p.rapidapi.com/artists/?ids=${artistaId}`;
    const resonse = await fetch(urlInfoArtista, options);
    const { artists } = await resonse.json();
    console.log(artists);
    const infoArtista = artists?.map((artista) => ({
      id: artista.id,
      name: artista.name,
      imagen: artista?.images[0]?.url,
      followers: parseInt(artista.followers.total).toLocaleString("es-MX"),
      genres: artista.genres,
    }));
    console.log(infoArtista);
    return infoArtista[0];
  } catch (error) {
    throw new Error("Error al buscar la informacion del artista.");
  }
};
