import { options } from "./api";

/**
 * This function is used to search for artist information using the Spotify API.
 *
 * @param {Object} params - The parameters for the function.
 * @param {string} params.artistaId - The ID of the artist to search for.
 *
 * @returns {Promise<Object>} - A promise that resolves to the artist information.
 * Each artist information object has the following properties:
 * - id: The unique identifier of the artist.
 * - name: The name of the artist.
 * - imagen: The URL of the artist's image.
 * - followers: Number of followers.
 * - genres: Genres of the artist.
 * @throws {Error} - If there is an error while searching for the artist.
 */
export const searchArtista = async ({ artistaId }) => {
  try {
    const urlInfoArtista = `https://spotify-web2.p.rapidapi.com/artists/?ids=${artistaId}`;
    const resonse = await fetch(urlInfoArtista, options);
    const { artists } = await resonse.json();
    const infoArtista = artists?.map((artista) => ({
      id: artista.id,
      name: artista.name,
      imagen: artista?.images[0]?.url,
      followers: parseInt(artista.followers.total).toLocaleString("es-MX"),
      genres: artista.genres,
    }));
    return infoArtista[0];
  } catch (error) {
    throw new Error("Error al buscar la informacion del artista.");
  }
};
