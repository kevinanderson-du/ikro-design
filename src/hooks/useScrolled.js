import { useEffect, useState } from "react";

/* true quando a página passou de X pixels de rolagem (usado no header) */
export function useScrolled(limite = 24) {
  const [passou, setPassou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setPassou(window.scrollY > limite);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, [limite]);

  return passou;
}
