/* eslint-disable react/prop-types */
import '../styles/Modal.css'

export function Modal({ onClose, tracks, album }) {

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>Cerrar</button>
                {
                    tracks?.map((track) => (
                        <div className="track" key={track.idTrack}>
                            <img className="modal-imagen" src={album.imagenAlbum} />
                            <h3 className="modal-name-track">{track.numberTrack} - {track.nameTrack}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}