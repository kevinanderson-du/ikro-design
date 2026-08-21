import { useMemo, useState } from "react";
import { listarProjetos } from "../data/projetos";
import { NUMEROS } from "../data/especialidades";
import { useInView } from "../hooks/useInView";
import Contador from "../components/ui/Contador";
import Seta from "../components/ui/Seta";
import FiltroPortfolio from "../sections/FiltroPortfolio";
import CardCatalogo from "../sections/CardCatalogo";
import CTA from "../sections/CTA";
import "./Portfolio.css";

/* ETAPA 3 — PORTFÓLIO
   Catálogo estático. Os projetos vêm de src/data/projetos.js — a mesma lista
   que abastece a esteira da home, então cadastrar uma vez publica nos dois. */
export default function Portfolio({ ir, abrirProjeto }) {
  const [categoria, setCategoria] = useState("TODOS");
  const [ordem, setOrdem] = useState("recentes");
  const [ref, visivel] = useInView({ threshold: 0.2 });

  const projetos = useMemo(() => listarProjetos(categoria, ordem), [categoria, ordem]);

  /* os três números da direita (o de 100% fica só na home) */
  const numeros = NUMEROS.filter((n) => n.sufixo !== "%");

  return (
    <>
      <section className="port-topo" ref={ref}>
        <div className="port-glow" aria-hidden="true" />

        <div className="wrap port-topo-in">
          <div className="port-marca">
            <div className="port-marcador mono">
              <span className="port-marcador-num">03</span> / PORTFÓLIO
            </div>
            <h1 className="port-titulo">PORTFÓLIO</h1>
          </div>

          <div className="port-texto">
            <p className="port-desc">
              
            </p>
            <button className="port-link mono" onClick={() => ir("contato")}>
              TEM UM PROJETO?
              <span>
                VAMOS CRIAR ALGO INCRÍVEL JUNTOS. <Seta size={12} />
              </span>
            </button>
          </div>

          <div className="port-numeros">
            {numeros.map((n, i) => (
              <div className="port-num" key={n.label}>
                <span className="port-num-valor">
                  <Contador
                    valor={n.valor}
                    prefixo={n.prefixo}
                    sufixo={n.sufixo}
                    ativo={visivel}
                    duracao={1100 + i * 200}
                  />
                </span>
                <span className="port-num-lbl mono">{n.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="port-catalogo">
        <div className="wrap">
          <FiltroPortfolio
            categoria={categoria}
            setCategoria={setCategoria}
            ordem={ordem}
            setOrdem={setOrdem}
            total={projetos.length}
          />

          {projetos.length > 0 ? (
            <div className="port-grid">
              {projetos.map((p) => (
                <CardCatalogo key={p.id} projeto={p} onAbrir={abrirProjeto} />
              ))}
            </div>
          ) : (
            <p className="port-vazio mono">
              NENHUM PROJETO NESTA CATEGORIA AINDA.
            </p>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
