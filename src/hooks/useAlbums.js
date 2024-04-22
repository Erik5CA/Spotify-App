import { useRef, useState } from "react";
import { searchAlbums } from "../services/albums.js";

export function useAlbums() {
  const [albums, setAlbums] = useState(null);
  const artistaPrevio = useRef(null);

  const getAlbums = async (artistaId) => {
    if (artistaId === artistaPrevio.current) return;
    try {
      artistaPrevio.current = artistaId;
      const newAlbums = await searchAlbums({ artistaId });
      setAlbums(newAlbums);
    } catch (error) {
      throw new Error("Error");
    }
  };

  return { albums, getAlbums };
}
