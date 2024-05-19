import "./App.css";
import { Albums, Artistas, FormSearch, Logo } from "./components";
import { useAlbums, useArtistas, useSearch, useInfoArtista } from "./hooks";
import { useRef } from "react";

/**
 * The main application component.
 * @returns {JSX.Element} The rendered application.
 */
function App() {
  // useRef hooks to track the initial render
  const inicio = useRef(true);
  const inicioAlbums = useRef(true);

  // useSearch hook to manage search state and perform search operations
  const { busqueda, setBusqueda, error } = useSearch();

  // useSearch hook to manage search state and perform search operations
  const { artistas, getArtistas, loadingArt } = useArtistas({ busqueda });

  // useAlbums hook to fetch and manage album data
  const { albums, getAlbums } = useAlbums();

  // useInfoArtista hook to fetch and manage artist info
  const { infoArtista, getInfoArtista, loading } = useInfoArtista();

  // handle form submission
  const handleSumit = (event) => {
    event.preventDefault();
    getArtistas({ busqueda });
    if (inicio) {
      inicio.current = false;
    }
    inicioAlbums.current = true;
  };

  //handle search input change
  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };

  //handle artist selection
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
      </header>
      <main>
        <section className="contenedor-artistas">
          {inicio.current ? (
            <div className="contenedor-mensaje-bienvenida">
              <h1 className="title">Busca a tu artista favorito.</h1>
            </div>
          ) : (
            <Artistas
              artistas={artistas}
              seleccionarArtista={seleccionarArtista}
              loading={loadingArt}
            />
          )}
        </section>
        <section className="contenedor-albums" id="albums">
          {inicioAlbums.current ? (
            <div className="contenedor-mensaje-bienvenida">
              <h2 className="title">
                Selecciona a tu artista y ve su discografía.
              </h2>
            </div>
          ) : (
            <Albums
              albums={albums}
              infoArtista={infoArtista}
              loading={loading}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
