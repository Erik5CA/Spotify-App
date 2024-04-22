import { useRef, useState, useMemo } from "react";
import { searchArtistas } from "../services/artistas.js";

export function useArtistas({ busqueda }) {
  const [artistas, setArtistas] = useState([]);
  const [loadingArt, setLoading] = useState(false);
  const busquedaPrevia = useRef(busqueda);

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
