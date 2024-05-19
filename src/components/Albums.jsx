/* eslint-disable react/prop-types */
import { Album } from "./Album";
import { Modal } from "./Modal";
import "../styles/Albums.css";
import { useState } from "react";
import { useTracks } from "../hooks/useTracks";
import Loading from "./Loading";

/**
 * Function to render a list of albums.
 * @param {Object} props - The props passed to the component.
 * @param {Array} props.albums - The array of albums to be rendered.
 * @returns {JSX.Element} - The JSX element to render the list of albums.
 */
function ListOfAlbums({ albums }) {
  // State to store the id of the album that is currently open in the modal
  const [modal, setModal] = useState(null);
  // Hooks to manage the tracks data
  const { tracks, getTracks, loadingTracks } = useTracks();

  /**
   * Function to open the modal for a specific album.
   * @param {string} albumId - The id of the album to open the modal.
   */
  const openModal = (albumId) => {
    setModal(albumId);
    const newIdAlbum = albumId;
    getTracks(newIdAlbum);
  };

  /**
   * Function to close the modal.
   */
  const closeModal = () => {
    setModal(null);
  };

  return (
    <>
      <h2 className="title-disco">Discografía</h2>
      <ul className="albums">
        {albums?.map((album) => (
          <Album key={album.idAlbum} album={album} openModal={openModal} />
        ))}
      </ul>
      {modal && (
        <Modal
          onClose={closeModal}
          tracks={tracks}
          loading={loadingTracks}
          album={albums.find((album) => album.idAlbum === modal)}
        />
      )}
    </>
  );
}

/**
 * Function to render a message when no albums are found for an artist.
 * @returns {JSX.Element} - The JSX element to render the not found message.
 */
function NotFoundAlbums() {
  return (
    <h5 className="title-disco">No se encontraron albums para este artista.</h5>
  );
}

/**
 * Function to render the main component for displaying artist's albums and information.
 * @param {Object} props - The props passed to the component.
 * @param {Array} props.albums - The array of albums to be displayed.
 * @param {Object} props.infoArtista - The artist's information to be displayed.
 * @param {boolean} props.loading - A flag indicating whether the data is still loading.
 * @returns {JSX.Element} - The JSX element to render the artist's albums and information.
 */
export function Albums({ albums, infoArtista, loading }) {
  // Check if there are albums to display
  const hasAlbums = albums?.length > 0;
  return (
    <div className="contenedor">
      {loading ? (
        // If loading, render the loading component
        <Loading />
      ) : (
        // If not loading, render the artist's information and albums
        <>
          <div className="contenedor-info-artista">
            <img src={infoArtista?.imagen} alt={infoArtista.name} />
            <div className="info-artista">
              <h2>{infoArtista.name}</h2>
              <p>
                {" "}
                <span>Followers: </span> {infoArtista.followers}
              </p>
              <p>
                {" "}
                <span> Generos: </span>{" "}
                {infoArtista?.genres?.map((genre) => genre + " / ")}
              </p>
            </div>
          </div>
          {hasAlbums ? <ListOfAlbums albums={albums} /> : <NotFoundAlbums />}
        </>
      )}
    </div>
  );
}
