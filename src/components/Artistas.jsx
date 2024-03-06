/* eslint-disable react/prop-types */
import "../styles/Artistas.css";
import { Artista } from "./Artista";
function ListOfArtistas({ artistas, seleccionarArtista }) {
  return (
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
  );
}

function NotFoundArtistas() {
  return <p>No se encontraron resultados para esta busqueda.</p>;
}

export function Artistas({ artistas, seleccionarArtista }) {
  // TODO: Hacer que no aparezca el mensaje de no se encontraron artistas al iniciar la aplicación

  const hasArtistas = artistas?.length > 0;

  return (
    <>
      {hasArtistas ? (
        <ListOfArtistas
          artistas={artistas}
          seleccionarArtista={seleccionarArtista}
        />
      ) : (
        <NotFoundArtistas />
      )}
    </>
  );
}
