import { useRef, useState } from "react";
import { searchAlbums } from "../services/albums.js";

/**
 * Custom React hook to manage albums data.
 *
 * @returns {Object} An object containing the albums state and a function to fetch albums by artistId.
 */
export function useAlbums() {
  /**
   * State variable to hold the albums data.
   * @type {Array}
   */
  const [albums, setAlbums] = useState(null);

  /**
   * useRef hook to hold the previous artistId.
   * @type {React.MutableRefObject}
   */
  const artistaPrevio = useRef(null);

  /**
   * Function to fetch albums by artistId.
   * If the artistId is the same as the previous one, it returns without making a new request.
   *
   * @param {string} artistaId The id of the artist to fetch albums for.
   * @throws Will throw an error if there is a problem with the request.
   */
  const getAlbums = async (artistaId) => {
    if (artistaId === artistaPrevio.current) return;
    try {
      artistaPrevio.current = artistaId;
      const newAlbums = await searchAlbums({ artistaId });
      setAlbums(newAlbums);
    } catch (error) {
      throw new Error("Error ");
    }
  };

  return { albums, getAlbums };
}
