/* eslint-disable react/prop-types */

/**
 * This function represents a single artist component.
 * It renders an artist's information and triggers an action when clicked.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.artista - The artist object containing id, name, and image.
 * @param {Function} props.seleccionarArtista - The function to be called when the artist is clicked.
 *
 * @returns {JSX.Element} - A JSX element representing the artist component.
 */
export function Artista({ artista, seleccionarArtista }) {
  return (
    <li onClick={() => seleccionarArtista(artista.id)}>
      <a href="#albums" className="artista">
        <img
          src={artista.imagen}
          alt={`Imagen del artista : ${artista.nombre}`}
        />
        <div className="nombre-artista">
          <h3>{artista.nombre}</h3>
        </div>
      </a>
    </li>
  );
}
