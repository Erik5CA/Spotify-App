/* eslint-disable react/prop-types */
import { Album } from "./Album";
import { Modal } from "./Modal";
import "../styles/Albums.css";
import { useState } from "react";
import { useTracks } from "../hooks/useTracks";

function ListOfAlbums({ albums }) {
  const [modal, setModal] = useState(null);
  const { tracks, getTracks } = useTracks();

  const openModal = (albumId) => {
    setModal(albumId);
    const newIdAlbum = albumId;
    getTracks(newIdAlbum);
  };

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
          album={albums.find((album) => album.idAlbum === modal)}
        />
      )}
    </>
  );
}

function NotFoundAlbums() {
  return (
    <h5 className="title-disco">No se encontraron albums para este artista.</h5>
  );
}

export function Albums({ albums, infoArtista }) {
  const hasAlbums = albums?.length > 0;
  return (
    <div className="contenedor">
      <div className="contenedor-info-artista">
        <img src={infoArtista[0].imagen} alt="" />
        <div className="info-artista">
          <h2>{infoArtista[0].name}</h2>
          <p>
            {" "}
            <span>Folowers: </span> {infoArtista[0].followers}
          </p>
          <h4>Generos</h4>
          {infoArtista[0]?.genres?.map((genre) => (
            <p key={genre}>
              <span>{genre}</span>
            </p>
          ))}
        </div>
      </div>
      {hasAlbums ? <ListOfAlbums albums={albums} /> : <NotFoundAlbums />}
    </div>
  );
}
