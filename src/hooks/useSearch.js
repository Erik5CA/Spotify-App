import { useEffect, useState, useRef } from "react";

/**
 * Custom React hook for handling search functionality.
 *
 * @returns {Object} An object containing the search state, setter function, and error state.
 */
export function useSearch() {
  /**
   * State variable for storing the search input.
   * @type {string}
   */
  const [busqueda, setBusqueda] = useState("");

  /**
   * State variable for storing any error messages related to the search input.
   * @type {string|null}
   */
  const [error, setError] = useState(null);

  /**
   * useRef hook for tracking the first render of the component.
   * @type {React.MutableRefObject<boolean>}
   */
  const primerInput = useRef(true);

  /**
   * useEffect hook for handling search input validation.
   *
   * @param {string} busqueda The current search input.
   */
  useEffect(() => {
    if (primerInput.current) {
      primerInput.current = busqueda === "";
      return;
    }
    if (busqueda === "") {
      setError("Por favor introduzca un artista.");
      return;
    }

    setError(null);
  }, [busqueda]);

  return { busqueda, setBusqueda, error };
}
