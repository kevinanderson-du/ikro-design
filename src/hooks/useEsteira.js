import { useCallback, useEffect, useRef } from "react";

/* ==========================================================================
   ESTEIRA ARRASTÁVEL
   Anda sozinha, para quando o mouse encosta e pode ser arrastada.
   Como o conteúdo é duplicado no JSX, ao passar da metade a posição volta
   para o início — o corte é invisível e o giro parece infinito.
   ========================================================================== */

export function useEsteira({ velocidade = 0.45 } = {}) {
  const ref = useRef(null);
  const pausado = useRef(false);
  const arrastando = useRef(false);
  const inicioX = useRef(0);
  const inicioScroll = useRef(0);
  const andou = useRef(0);
  const pos = useRef(0);

  /* ------------------------------ movimento ------------------------------ */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf;
    pos.current = el.scrollLeft;

    const passo = () => {
      const metade = el.scrollWidth / 2;

      if (pausado.current || arrastando.current) {
        /* o usuário está no comando: só acompanha a posição dele */
        pos.current = el.scrollLeft;
      } else {
        /* a posição é acumulada aqui, com casas decimais.
           Se fosse lida do scrollLeft, o arredondamento comeria o avanço. */
        pos.current += velocidade;

        if (metade > 0) {
          if (pos.current >= metade) pos.current -= metade;
          else if (pos.current < 0) pos.current += metade;
        }

        el.scrollLeft = pos.current;
      }

      raf = requestAnimationFrame(passo);
    };

    raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
  }, [velocidade]);

  /* -------------------------- arrastar com o mouse -------------------------- */
  const aoPressionar = useCallback((e) => {
    if (e.pointerType !== "mouse") return; /* no celular vale a rolagem do dedo */
    const el = ref.current;
    arrastando.current = true;
    andou.current = 0;
    inicioX.current = e.clientX;
    inicioScroll.current = el.scrollLeft;
    el.setPointerCapture?.(e.pointerId);
  }, []);

  const aoMover = useCallback((e) => {
    if (!arrastando.current) return;
    const el = ref.current;
    const distancia = e.clientX - inicioX.current;
    andou.current = Math.abs(distancia);
    el.scrollLeft = inicioScroll.current - distancia;
  }, []);

  const aoSoltar = useCallback((e) => {
    if (!arrastando.current) return;
    arrastando.current = false;
    ref.current?.releasePointerCapture?.(e.pointerId);
  }, []);

  /* arrastou? então não era clique — não abre o projeto sem querer */
  const aoClicar = useCallback((e) => {
    if (andou.current > 6) {
      e.preventDefault();
      e.stopPropagation();
      andou.current = 0;
    }
  }, []);

  const pausar = useCallback(() => (pausado.current = true), []);
  const seguir = useCallback(() => (pausado.current = false), []);

  /* --------------------------- setas de navegação --------------------------- */
  const empurrar = useCallback((direcao) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector(":scope > * > *");
    const salto = card ? card.getBoundingClientRect().width + 18 : 320;
    el.scrollBy({ left: salto * direcao, behavior: "smooth" });
  }, []);

  return {
    ref,
    empurrar,
    handlers: {
      onPointerDown: aoPressionar,
      onPointerMove: aoMover,
      onPointerUp: aoSoltar,
      onPointerCancel: aoSoltar,
      onPointerLeave: aoSoltar,
      onClickCapture: aoClicar,
      onMouseEnter: pausar,
      onMouseLeave: seguir,
      onTouchStart: pausar,
      onTouchEnd: seguir,
    },
  };
}