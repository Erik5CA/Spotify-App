import { useState, useRef } from "react";
import { searchTracks } from "../services/tracks";

export function useTracks() {
  const [tracks, setTracks] = useState(null);
  const [loadingTracks, setLoading] = useState(false);
  const artistaPrevio = useRef(null);

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
