import { useRef, useState } from "react";
import { searchAlbums } from "../services/albums.js";

export function useAlbums() {
    const [albums, setAlbums] = useState(null)
    // const artistaPrevio = useRef(artistaId)

    // useEffect(() => {
    const getAlbums = async (artistaId) => {
        // if (artistaId === null) return
        // if (artistaId === artistaPrevio.current) return
        try {
            // artistaPrevio.current = artistaId
            const newAlbums = await searchAlbums({ artistaId })
            setAlbums(newAlbums)
        } catch (error) {
            throw new Error('Error')
        }
    }

    //     getAlbums()
    // }, [artistaId])

    return { albums, getAlbums }
}