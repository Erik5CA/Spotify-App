/* eslint-disable react/prop-types */
import "../styles/Album.css";

/**
 * This function represents an Album component.
 * It renders an album with its name, image, and a button to open a modal with the album's tracks.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.album - The album object containing properties like nameAlbum, imagenAlbum, and idAlbum.
 * @param {Function} props.openModal - A function to open the modal with the album's tracks. It takes the album's id as a parameter.
 *
 * @returns {JSX.Element} - A JSX element representing the Album component.
 */
export function Album({ album, openModal }) {
  return (
    <li className="info-album">
      <h3 className="nombre-album">{album.nameAlbum}</h3>
      <img
        className="imagen-album"
        src={album.imagenAlbum}
        alt={album.nameAlbum}
      />
      <button className="btn-traks" onClick={() => openModal(album.idAlbum)}>
        Ver Tracks
      </button>
    </li>
  );
}
