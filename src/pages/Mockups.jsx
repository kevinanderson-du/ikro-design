import { useMemo, useState } from "react";
import { MOCKUPS, listarMockups } from "../data/mockups";
import Icone from "../components/ui/Icone";
import FiltroMockups from "../sections/FiltroMockups";
import CardMockup from "../sections/CardMockup";
import CTA from "../sections/CTA";
import "./Mockups.css";

/* Selos do topo — texto livre, edite à vontade */
const VANTAGENS = [
  { icone: "cubo", titulo: "MOCKUPS PSD", texto: "Arquivos em camadas, prontos para editar" },
  { icone: "download", titulo: "DOWNLOAD IMEDIATO", texto: "Acesso assim que o pagamento cai" },
  { icone: "escudo", titulo: "COMPRA SEGURA", texto: "Pagamento 100% criptografado" },
];

/* ETAPA 4 — MOCKUPS (marketplace) */
export default function Mockups({ ir, abrirMockup }) {
  const [categoria, setCategoria] = useState("TODOS");
  const [ordem, setOrdem] = useState("recentes");

  const lista = useMemo(() => listarMockups(categoria, ordem), [categoria, ordem]);

  return (
    <>
      <section className="mkp-topo">
        <div className="mkp-glow" aria-hidden="true" />

        <div className="wrap mkp-topo-in">
          <div className="mkp-marcador mono">
            <span className="mkp-marcador-num">04</span> / MOCKUPS
          </div>

          <h1 className="mkp-titulo">
            MOCKUPS
            <br />
            <span className="mkp-titulo-roxo">PREMIUM</span>
          </h1>

          <p className="mkp-desc">
            Mockups profissionais de uniformes esportivos desenvolvidos para elevar a apresentação
            dos seus projetos a outro nível.
          </p>

          <div className="mkp-vantagens">
            {VANTAGENS.map((v) => (
              <div className="mkp-vantagem" key={v.titulo}>
                <span className="mkp-vantagem-ico">
                  <Icone tipo={v.icone} size={20} />
                </span>
                <span>
                  <strong className="mono">{v.titulo}</strong>
                  <span className="mkp-vantagem-txt">{v.texto}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mkp-resumo mono">
            <span>
              <b>+{MOCKUPS.length}</b> PACKS DISPONÍVEIS
            </span>
            <span>
              <b>100%</b> EDITÁVEIS
            </span>
            <span>
              <b>7 DIAS</b> DE GARANTIA
            </span>
          </div>
        </div>
      </section>

      <section className="mkp-catalogo">
        <div className="wrap">
          <FiltroMockups
            categoria={categoria}
            setCategoria={setCategoria}
            ordem={ordem}
            setOrdem={setOrdem}
            total={lista.length}
          />

          {lista.length > 0 ? (
            <div className="mkp-grid">
              {lista.map((m) => (
                <CardMockup key={m.id} mockup={m} onAbrir={abrirMockup} />
              ))}
            </div>
          ) : (
            <p className="mkp-vazio mono">NENHUM MOCKUP NESTA CATEGORIA AINDA.</p>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
