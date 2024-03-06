import { useEffect, useState, useRef } from "react";

export function useSearch() {
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState(null);
  const primerInput = useRef(true);

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
