import { options } from "./api";

export const searchArtistas = async ({ busqueda }) => {
  if (busqueda === "") return;
  try {
    const url = `https://spotify-web2.p.rapidapi.com/search/?q=${busqueda}&type=artists&offset=0&limit=5&numberOfTopResults=5`;
    const response = await fetch(url, options);
    const result = await response.json();

    const artistas = result?.artists?.items;

    // console.log(artistas);

    const artistasMap = artistas?.map((artista) => ({
      id: artista.data.uri.split(":")[2],
      nombre: artista.data.profile.name,
      imagen: artista.data.visuals.avatarImage?.sources[0]?.url,
    }));
    // console.log(artistasMap);
    return artistasMap?.filter((artista) => {
      if (artista.imagen) return artista;
    });
  } catch (error) {
    throw new Error("Error al buscar el artista.");
  }
};
