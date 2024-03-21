import "./App.css";
import { Albums, Artistas, FormSearch, Logo } from "./components";
import { useAlbums, useArtistas, useSearch, useInfoArtista } from "./hooks";

import { useRef } from "react";
// import { Modal } from './components/Modal'

function App() {
  const inicio = useRef(true);
  const inicioAlbums = useRef(true);
  const { busqueda, setBusqueda, error } = useSearch();
  const { artistas, getArtistas } = useArtistas({ busqueda });
  const { albums, getAlbums } = useAlbums();
  const { infoArtista, getInfoArtista } = useInfoArtista();

  const handleSumit = (event) => {
    event.preventDefault();
    getArtistas({ busqueda });
    if (inicio) {
      inicio.current = false;
    }
    inicioAlbums.current = true;
  };

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };

  const seleccionarArtista = (idArtista) => {
    const newIdArtista = idArtista;
    getAlbums(newIdArtista);
    getInfoArtista(newIdArtista);
    if (inicioAlbums) {
      inicioAlbums.current = false;
    }
  };

  return (
    <>
      <header>
        <Logo />
        <FormSearch
          handleSumit={handleSumit}
          handleChange={handleChange}
          busqueda={busqueda}
          error={error}
        />
        {/* {error && <p>{error}</p>} */}
      </header>
      <main>
        <section className="contenedor-artistas">
          {inicio.current ? (
            <h1 className="title">Busca a tu artista favorito.</h1>
          ) : (
            <Artistas
              artistas={artistas}
              seleccionarArtista={seleccionarArtista}
              // estadoInicial={inicio}
            />
          )}
        </section>
        <section className="contenedor-albums" id="albums">
          {inicioAlbums.current ? (
            <h2 className="title">
              Selecciona a tu artista y ve su discografía.
            </h2>
          ) : (
            <Albums albums={albums} infoArtista={infoArtista} />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
