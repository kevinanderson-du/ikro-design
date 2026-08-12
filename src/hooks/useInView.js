import { useEffect, useRef, useState } from "react";

/* Dispara uma vez quando o elemento entra na tela.
   Uso: const [ref, visivel] = useInView(); ... <div ref={ref}> */
export function useInView(options = { threshold: 0.25 }) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visivel) return;

    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) setVisivel(true);
      });
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visivel]);

  return [ref, visivel];
}
