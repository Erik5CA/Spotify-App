import "./App.css";
import { Artistas } from "./components/Artistas";
import { useArtistas } from "./hooks/useArtistas";
import { useSearch } from "./hooks/useSearch";
import { FormSearch } from "./components/FormSearch";
// import { useState } from "react";
import { useAlbums } from "./hooks/useAlbums";
import { Albums } from "./components/Albums";
// import { Modal } from './components/Modal'

function App() {
  // const [inicio, setInicio] = useState(true);
  const { busqueda, setBusqueda, error } = useSearch();
  const { artistas, getArtistas } = useArtistas({ busqueda });
  const { albums, getAlbums } = useAlbums();

  const handleSumit = (event) => {
    event.preventDefault();
    getArtistas({ busqueda });
    // setInicio(false);
  };

  const handleChange = (event) => {
    setBusqueda(event.target.value);
  };

  const seleccionarArtista = (idArtista) => {
    const newIdArtista = idArtista;
    getAlbums(newIdArtista);
  };

  // TODO: Hacer que no aparezca el mensaje de no se encontraron artistas y no se encontraron albums al iniciar la aplicación y en su lugar muestre un mensaje de bienvenida

  return (
    <>
      <header>
        <FormSearch
          handleSumit={handleSumit}
          handleChange={handleChange}
          busqueda={busqueda}
        />
        {error && <p>{error}</p>}
      </header>
      <main>
        {/* {inicio ? (
          <h1>Busca a tu artista favorito.</h1>
        ) : ( */}
        <>
          <Artistas
            artistas={artistas}
            seleccionarArtista={seleccionarArtista}
            // estadoInicial={inicio}
          />
          <Albums albums={albums} />
        </>
        {/* )} */}
      </main>
    </>
  );
}

export default App;
