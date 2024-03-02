/* eslint-disable react/prop-types */
import '../styles/Album.css'

export function Album({ album, openModal }) {
    return (
        <li className="info-album">
            <h3 className="nombre-album">{album.nameAlbum}</h3>
            <img className="imagen-album" src={album.imagenAlbum} alt="" />
            <button className='btn-traks' onClick={() => openModal(album.idAlbum)}>Ver Tracks</button>
        </li>
    )
}