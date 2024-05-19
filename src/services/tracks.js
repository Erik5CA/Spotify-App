import { options } from "./api";

/**
 * Converts milliseconds to minutes and seconds.
 *
 * @param {number} milliseconds - The duration in milliseconds.
 * @returns {string} - The duration in the format "minutes:seconds".
 */
const toMinuteSecond = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  let seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  if (seconds.length < 2) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

/**
 * This function is used to search for tracks in a specific album.
 *
 * @param {Object} params - The parameters of the function.
 * @param {string} params.albumId - The ID of the album to search for tracks.
 *
 * @returns {Promise<Array>} - A promise that resolves to an array of track objects.
 * Each track object has the following properties:
 * - idtrack: The unique identifier of the track.
 * - numberTrack: Number of track in album.
 * - nameTrack: Name track.
 * - duration: Time in millisecons.
 * - playcount: Count fo plays.
 * - artists: Array of artist.
 *
 * @throws {Error} - Throws an error if there is an issue with the search.
 */
export const searchTracks = async ({ albumId }) => {
  try {
    const urlTracks = `https://spotify-web2.p.rapidapi.com/album_tracks/?id=${albumId}&offset=0&limit=300`;
    const resonse = await fetch(urlTracks, options);
    const data = await resonse.json();
    const tracks = data.data.album.tracks.items;
    const newTracks = tracks.map((track) => ({
      idTrack: track.track.uri.split(":")[2],
      numberTrack: track.track.trackNumber,
      nameTrack: track.track.name,
      duration: toMinuteSecond(track.track.duration.totalMilliseconds),
      playcount: track.track.playcount,
      explicit: track.track.contentRating.label,
      artists: track.track.artists.items?.map((artist) => artist.profile.name),
    }));
    return newTracks;
  } catch (error) {
    throw new Error("Error al buscar los albumes.");
  }
};
