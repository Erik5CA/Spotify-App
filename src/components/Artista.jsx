/* eslint-disable react/prop-types */

export function Artista({ artista, seleccionarArtista }) {

    return (
        <li onClick={() => seleccionarArtista(artista.id)} className="artista">
            <img src={artista.imagen} alt={`Imagen del artista : ${artista.nombre}`} />
            <h3>{artista.nombre}</h3>
        </li>
    )
}