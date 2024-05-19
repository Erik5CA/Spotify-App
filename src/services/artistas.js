import { options } from "./api";

/**
 * This function is used to search for artists using the Spotify API.
 *
 * @param {Object} params - The parameters for the search.
 * @param {string} params.busqueda - The search term for the artist.
 *
 * @returns {Promise<Array>} - A promise that resolves to an array of artist objects.
 * Each artist object has the following properties:
 * - id: The unique identifier of the artist.
 * - nombre: The name of the artist.
 * - imagen: The URL of the artist's image.
 *
 * @throws {Error} - If there is an error while searching for the artist.
 */
export const searchArtistas = async ({ busqueda }) => {
  if (busqueda === "") return;
  try {
    const url = `https://spotify-web2.p.rapidapi.com/search/?q=${busqueda}&type=artists&offset=0&limit=5&numberOfTopResults=5`;
    const response = await fetch(url, options);
    const result = await response.json();
    const artistas = result?.artists?.items;
    const artistasMap = artistas?.map((artista) => ({
      id: artista.data.uri.split(":")[2],
      nombre: artista.data.profile.name,
      imagen: artista.data.visuals.avatarImage?.sources[0]?.url,
    }));
    return artistasMap?.filter((artista) => {
      if (artista.imagen) return artista;
    });
  } catch (error) {
    throw new Error("Error al buscar el artista.");
  }
};
