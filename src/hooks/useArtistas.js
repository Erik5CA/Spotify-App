import { useRef, useState, useMemo } from 'react'
import { searchArtistas } from '../services/artistas.js'

export function useArtistas({ busqueda }) {
    const [artistas, setArtistas] = useState([])
    const busquedaPrevia = useRef(busqueda)

    // console.log('useArtista')

    const getArtistas = useMemo(() => {
        return async ({ busqueda }) => {
            if (busqueda === busquedaPrevia.current) return
            try {
                busquedaPrevia.current = busqueda
                const newArtistas = await searchArtistas({ busqueda })
                setArtistas(newArtistas)
            } catch (error) {
                throw new Error('Error')
            }
        }
    }, [])

    return { artistas, getArtistas }
}