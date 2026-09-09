import { useEffect, useState } from "react";

/* ==========================================================================
   MÁQUINA DE ESCREVER
   Escreve a palavra letra por letra, espera, apaga e passa para a próxima,
   em looping. Devolve o texto do momento — quem desenha é o componente.
   ========================================================================== */

export function useMaquinaEscrever(
  palavras = [],
  { escrita = 130, apagada = 70, pausaCheia = 1600, pausaVazia = 400 } = {}
) {
  const [texto, setTexto] = useState("");
  const [indice, setIndice] = useState(0);
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
    if (palavras.length === 0) return;

    /* quem prefere menos movimento vê só a primeira palavra, parada */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTexto(palavras[0]);
      return;
    }

    const palavra = palavras[indice % palavras.length];
    let tempo;

    if (!apagando && texto === palavra) {
      /* completou: segura um pouco antes de apagar */
      tempo = setTimeout(() => setApagando(true), pausaCheia);
    } else if (apagando && texto === "") {
      /* apagou tudo: vai para a próxima */
      tempo = setTimeout(() => {
        setApagando(false);
        setIndice((i) => (i + 1) % palavras.length);
      }, pausaVazia);
    } else {
      const proximo = apagando
        ? palavra.slice(0, texto.length - 1)
        : palavra.slice(0, texto.length + 1);
      tempo = setTimeout(() => setTexto(proximo), apagando ? apagada : escrita);
    }

    return () => clearTimeout(tempo);
  }, [texto, apagando, indice, palavras, escrita, apagada, pausaCheia, pausaVazia]);

  return texto;
}
