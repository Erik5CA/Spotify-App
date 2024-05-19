import { useRef, useState } from "react";
import { searchArtista } from "../services/infoArtista";

/**
 * Custom React hook to fetch and manage artist information.
 *
 * @returns {Object} An object containing the artist information, a function to fetch the artist info, and a loading state.
 */
export function useInfoArtista() {
  /**
   * State variable to hold the artist information.
   * @type {Object|null}
   */
  const [infoArtista, setInfoArtista] = useState(null);

  /**
   * State variable to hold the loading state.
   * @type {boolean}
   */
  const [loading, setLoading] = useState(false);

  /**
   * useRef hook to hold the previous artist ID.
   * @type {React.MutableRefObject<null>}
   */
  const artistaPrevio = useRef(null);

  /**
   * Function to fetch artist information.
   *
   * @param {string} artistaId The ID of the artist to fetch information for.
   * @throws {Error} Throws an error if the artist ID is the same as the previous one.
   */
  const getInfoArtista = async (artistaId) => {
    if (artistaId === artistaPrevio.current) return;
    try {
      artistaPrevio.current = artistaId;
      setLoading(true);
      const newInfoArtista = await searchArtista({ artistaId });
      setInfoArtista(newInfoArtista);
      setLoading(false);
    } catch (error) {
      throw new Error("Error");
    }
  };

  return { infoArtista, getInfoArtista, loading };
}
