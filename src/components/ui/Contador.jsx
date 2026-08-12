import { useEffect, useState } from "react";

/* Número que sobe de 0 até o valor final quando a seção entra na tela.
   Quem controla o disparo é a prop "ativo" (ver useInView). */
export default function Contador({ valor, prefixo = "", sufixo = "", duracao = 1600, ativo }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!ativo) return;

    const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (semMovimento) {
      setN(valor);
      return;
    }

    let raf;
    const inicio = performance.now();

    const passo = (agora) => {
      const p = Math.min((agora - inicio) / duracao, 1);
      const suave = 1 - Math.pow(1 - p, 3); // desacelera no fim
      setN(Math.round(valor * suave));
      if (p < 1) raf = requestAnimationFrame(passo);
    };

    raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
  }, [ativo, valor, duracao]);

  return (
    <span>
      {prefixo}
      {n}
      {sufixo}
    </span>
  );
}
