/* eslint-disable react/prop-types */

import "../styles/FormSearch.css";

/**
 * This function represents a form component for searching artists.
 *
 * @function FormSearch
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.handleSumit - The function to handle form submission.
 * @param {Function} props.handleChange - The function to handle input change.
 * @param {String} props.busqueda - The current search query.
 * @param {String} props.error - The error message to display.
 * @returns {JSX.Element} - The JSX representation of the form component.
 */
export function FormSearch({ handleSumit, handleChange, busqueda, error }) {
  return (
    <form className="contenedor-form-search" onSubmit={handleSumit}>
      <div className="form-search">
        <input
          className="input-form-search"
          onChange={handleChange}
          value={busqueda}
          name="query"
          type="search"
          placeholder="Busca un artista"
        />
        <button className="button-form-search" type="submit">
          <svg
            width={15}
            height={15}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          Buscar
        </button>
      </div>
      {error && <p>{error}</p>}
    </form>
  );
}
