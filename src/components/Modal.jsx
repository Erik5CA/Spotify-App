/* eslint-disable react/prop-types */
import "../styles/Modal.css";
import Loading from "./Loading";

export function Modal({ onClose, tracks, album, loading }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg
            width={30}
            height={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h3 className="album-name">{album.nameAlbum}</h3>
        <img className="modal-imagen" src={album.imagenAlbum} loading="lazy" />
        {loading ? (
          <Loading />
        ) : (
          <>
            {tracks?.map((track) => (
              <div className="track" key={track.idTrack}>
                <div>
                  <h3 className="modal-name-track">{track.nameTrack}</h3>
                  <p>{track.artists.map((artist) => artist + " | ")}</p>
                </div>
                <div className="track-info">
                  <p>{track.duration}</p>
                  {track.explicit !== "NONE" && (
                    <p className="track-explicit">{track.explicit[0]}</p>
                  )}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
