/* eslint-disable react/prop-types */

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
