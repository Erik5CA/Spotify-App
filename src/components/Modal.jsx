/* eslint-disable react/prop-types */
import "../styles/Modal.css";
import Loading from "./Loading";

/**
 * A modal component that displays album information and tracks.
 *
 * @param {Object} props - The component's props.
 * @param {Function} props.onClose - A function to be called when the modal is closed.
 * @param {Array} props.tracks - An array of track objects.
 * @param {Object} props.album - An object representing the album.
 * @param {Boolean} props.loading - A boolean indicating whether the tracks are loading.
 *
 * @returns {JSX.Element} - The modal component.
 */
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
        <img
          className="modal-imagen"
          src={album.imagenAlbum}
          loading="lazy"
          alt={album.nameAlbum}
        />
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
