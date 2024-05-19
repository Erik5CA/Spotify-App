/* eslint-disable react/prop-types */
import "../styles/Artistas.css";
import { Artista } from "./Artista";
import Loading from "./Loading";

/**
 * This function renders a list of artists.
 *
 * @function ListOfArtistas
 * @param {Object} props - The props object containing artistas and seleccionarArtista.
 * @param {Array} props.artistas - An array of artist objects.
 * @param {Function} props.seleccionarArtista - A function to handle artist selection.
 * @returns {JSX.Element} - A JSX element representing the list of artists.
 */
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

/**
 * This function renders a message when no artists are found.
 *
 * @function NotFoundArtistas
 * @returns {JSX.Element} - A JSX element representing the not found message.
 */
function NotFoundArtistas() {
  return (
    <p className="title">No se encontraron resultados para esta busqueda.</p>
  );
}

/**
 * This function renders the main Artistas component.
 * It conditionally renders a loading spinner or the ListOfArtistas component based on the loading prop.
 *
 * @function Artistas
 * @param {Object} props - The props object containing artistas, seleccionarArtista, and loading.
 * @param {Array} props.artistas - An array of artist objects.
 * @param {Function} props.seleccionarArtista - A function to handle artist selection.
 * @param {boolean} props.loading - A boolean indicating whether the data is loading.
 * @returns {JSX.Element} - A JSX element representing the Artistas component.
 */
export function Artistas({ artistas, seleccionarArtista, loading }) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ListOfArtistas
          artistas={artistas}
          seleccionarArtista={seleccionarArtista}
        />
      )}
    </>
  );
}
