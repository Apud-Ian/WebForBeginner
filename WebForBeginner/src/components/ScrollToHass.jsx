// ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Quitar el '#' y decodificar caracteres como %20, %C3...
      const id = decodeURIComponent(hash.substring(1));

      // Esperar un poco por si el contenido aún no está renderizado
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);

  return null;
}
