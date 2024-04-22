import { useRef, useState } from "react";
import { searchArtista } from "../services/infoArtista";

export function useInfoArtista() {
  const [infoArtista, setInfoArtista] = useState(null);
  const [loading, setLoading] = useState(false);
  // const artistaPrevio = useRef(artistaId)

  // useEffect(() => {
  const getInfoArtista = async (artistaId) => {
    // if (artistaId === null) return
    // if (artistaId === artistaPrevio.current) return
    try {
      // artistaPrevio.current = artistaId
      setLoading(true);
      const newInfoArtista = await searchArtista({ artistaId });
      setInfoArtista(newInfoArtista);
      setLoading(false);
    } catch (error) {
      throw new Error("Error");
    }
  };

  //     getAlbums()
  // }, [artistaId])

  return { infoArtista, getInfoArtista, loading };
}
