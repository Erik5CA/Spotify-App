import { useState, useRef } from "react";
import { searchTracks } from "../services/tracks";

/**
 * Custom React hook for managing tracks data.
 *
 * @returns {Object} An object containing the tracks data, getTracks function, and loading state.
 */
export function useTracks() {
  /**
   * State variable to store the tracks data.
   * @type {Array}
   */
  const [tracks, setTracks] = useState(null);

  /**
   * State variable to indicate if tracks are being loaded.
   * @type {Boolean}
   */
  const [loadingTracks, setLoading] = useState(false);

  /**
   * useRef hook to store the previous albumId.
   * @type {React.MutableRefObject}
   */
  const artistaPrevio = useRef(null);

  /**
   * Function to fetch tracks data based on the albumId.
   * If the albumId is the same as the previous one, it will not make a new request.
   *
   * @param {String} albumId The id of the album to fetch tracks for.
   * @returns {Promise} A promise that resolves with the tracks data.
   * @throws {Error} Throws an error if there is an issue fetching the tracks.
   */
  const getTracks = async (albumId) => {
    if (albumId === artistaPrevio.current) return;
    try {
      artistaPrevio.current = albumId;
      setLoading(true);
      const newTracks = await searchTracks({ albumId });
      setTracks(newTracks);
      setLoading(false);
    } catch (error) {
      throw new Error("Error");
    }
  };

  return { tracks, getTracks, loadingTracks };
}
