import { useRef, useState, useMemo } from "react";
import { searchArtistas } from "../services/artistas.js";

/**
 * Custom React Hook for fetching and managing artist data.
 *
 * @param {Object} props - The props object containing the search query.
 * @param {string} props.busqueda - The search query for artistas.
 *
 * @returns {Object} An object containing the artistas, getArtistas function, and loadingArt state.
 * @returns {Array} artistas - The array of artistas fetched from the API.
 * @returns {Function} getArtistas - A function to fetch artistas based on the search query.
 * @returns {boolean} loadingArt - A boolean indicating whether the artistas are currently being fetched.
 */
export function useArtistas({ busqueda }) {
  const [artistas, setArtistas] = useState([]);
  const [loadingArt, setLoading] = useState(false);
  const busquedaPrevia = useRef(busqueda);

  /**
   * A memoized function to fetch artistas based on the search query.
   *
   * @returns {Function} A function that, when called, fetches artistas based on the search query.
   */
  const getArtistas = useMemo(() => {
    return async ({ busqueda }) => {
      if (busqueda === busquedaPrevia.current) return;
      try {
        setLoading(true);
        busquedaPrevia.current = busqueda;
        const newArtistas = await searchArtistas({ busqueda });
        setArtistas(newArtistas);
        setLoading(false);
      } catch (error) {
        throw new Error("Error");
      }
    };
  }, []);

  return { artistas, getArtistas, loadingArt };
}
