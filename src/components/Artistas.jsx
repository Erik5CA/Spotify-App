/* eslint-disable react/prop-types */
import "../styles/Artistas.css";
import { Artista } from "./Artista";
import Loading from "./Loading";

function ListOfArtistas({ artistas, seleccionarArtista }) {
  const hasArtistas = artistas?.length > 0;

  return (
    <>
      {hasArtistas ? (
        <div className="contenedor-lista-artistas">
          <ul className="artistas">
            {artistas?.map((artista) => (
              <Artista
                key={artista.id}
                artista={artista}
                seleccionarArtista={seleccionarArtista}
              />
            ))}
          </ul>
        </div>
      ) : (
        <NotFoundArtistas />
      )}
    </>
  );
}

function NotFoundArtistas() {
  return <p className="title">No se encontraron resultados para esta busqueda.</p>;
}

export function Artistas({ artistas, seleccionarArtista, loading }) {

  return (
    <>
    {loading ? <Loading/> 
    :
    <ListOfArtistas
          artistas={artistas}
          seleccionarArtista={seleccionarArtista}
        />
    }
      
    </>
  );
}
