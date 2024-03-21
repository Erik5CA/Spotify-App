/* eslint-disable react/prop-types */
import "../styles/Modal.css";

export function Modal({ onClose, tracks, album }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          Cerrar
        </button>
        <img className="modal-imagen" src={album.imagenAlbum} />
        {tracks?.map((track) => (
          <div className="track" key={track.idTrack}>
            <h3 className="modal-name-track">{track.nameTrack}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
