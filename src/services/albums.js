import { options } from "./api";

/**
 * This function is used to search for albums of a given artist.
 *
 * @param {Object} params - The parameters of the function.
 * @param {string} params.artistaId - The id of the artist.
 *
 * @returns {Promise<Array>} - A promise that resolves to an array of albums.
 * Each album object contains the following properties:
 * - idAlbum: The id of the album.
 * - nameAlbum: The name of the album.
 * - imagenAlbum: The URL of the album's cover image.
 *
 * @throws {Error} - Throws an error if there is an issue with the API request.
 */
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
