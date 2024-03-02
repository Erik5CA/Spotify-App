
import './App.css'
import { Artistas } from './components/Artistas'
import { useArtistas } from './hooks/useArtistas'
import { useSearch } from './hooks/useSearch'
import { FormSearch } from './components/FormSearch'
import { useState } from 'react'
import { useAlbums } from './hooks/useAlbums'
import { Albums } from './components/Albums'
// import { Modal } from './components/Modal'

function App() {
  const [seleccionArtista, setSeleccionArtista] = useState(null)
  const { busqueda, setBusqueda, error } = useSearch()
  const { artistas, getArtistas } = useArtistas({ busqueda })
  const { albums, getAlbums } = useAlbums()

  const handleSumit = (event) => {
    event.preventDefault()
    getArtistas({ busqueda })
  }

  const handleChange = (event) => {
    setBusqueda(event.target.value)
  }

  const seleccionarArtista = (idArtista) => {
    const newIdArtista = idArtista
    console.log(newIdArtista)
    setSeleccionArtista(newIdArtista)
    getAlbums(newIdArtista)
    // console.log(albums)
  }

  return (
    <>
      <header>
        <FormSearch handleSumit={handleSumit} handleChange={handleChange} busqueda={busqueda} />
        {error ?? <p>{error}</p>}
      </header>
      <main>
        <Artistas artistas={artistas} seleccionarArtista={seleccionarArtista} />
        <Albums albums={albums} />
      </main>

    </>
  )
}

export default App
