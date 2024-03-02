import { useState } from "react"
import { searchTracks } from "../services/tracks"

export function useTracks() {
    const [tracks, setTracks] = useState(null)
    // const artistaPrevio = useRef(artistaId)

    // useEffect(() => {
    const getTracks = async (albumId) => {
        // if (artistaId === null) return
        // if (artistaId === artistaPrevio.current) return
        try {
            // artistaPrevio.current = artistaId
            const newTracks = await searchTracks({ albumId })
            setTracks(newTracks)
        } catch (error) {
            throw new Error('Error')
        }
    }

    //     getAlbums()
    // }, [artistaId])

    return { tracks, getTracks }
}