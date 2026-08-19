import { CONFIG } from "../data/config";
import { PERFIL, idadeAtual, dataFormatada } from "../data/sobre";
import { linkEmail } from "../utils/links";
import Media from "../components/ui/Media";
import Icone from "../components/ui/Icone";
import Mira from "../components/ui/Mira";
import "./SobreHero.css";

/* Ficha técnica do lado do retrato */
function Ficha({ tipo, titulo, texto, href }) {
  const conteudo = (
    <>
      <span className="ficha-ico">
        <Icone tipo={tipo} size={19} />
      </span>
      <span className="ficha-txt mono">
        <span className="ficha-titulo">{titulo}</span>
        {texto && <span className="ficha-sub">{texto}</span>}
      </span>
    </>
  );

  return href ? (
    <a className="ficha ficha-link" href={href}>
      {conteudo}
    </a>
  ) : (
    <div className="ficha">{conteudo}</div>
  );
}

export default function SobreHero() {
  return (
    <section className="sobre-hero">
      <div className="sobre-hero-glow" aria-hidden="true" />

      <div className="wrap sobre-hero-in">
        {/* ---------------------------- coluna texto ---------------------------- */}
        <div className="sh-texto">
          <div className="sh-marcador mono">
            <span className="sh-marcador-num">02</span> / SOBRE
          </div>

          <h1 className="sh-titulo">{PERFIL.titulo}</h1>

          <p className="sh-subtitulo">{PERFIL.subtitulo}</p>

          <div className="sh-paragrafos">
            {PERFIL.paragrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {CONFIG.curriculo && (
            <a className="btn btn-outline" href={CONFIG.curriculo} download>
              DOWNLOAD CURRÍCULO <Icone tipo="download" size={14} />
            </a>
          )}
        </div>

        {/* ---------------------------- ficha técnica --------------------------- */}
        <div className="sh-ficha">
          <h2 className="sh-nome">{CONFIG.nome.join(" ")}</h2>

          <div className="sh-cargos mono">
            {PERFIL.cargos.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>

          <div className="sh-lista">
            <Ficha tipo="local" titulo={CONFIG.local} />
            <Ficha tipo="data" titulo={`${idadeAtual()} ANOS`} texto={dataFormatada()} />
            <Ficha tipo="globo" titulo={PERFIL.disponibilidade} />
            <Ficha tipo="email" titulo={CONFIG.email} href={linkEmail("Contato pelo site — Sobre")} />
          </div>
        </div>

        {/* ------------------------------- retrato ------------------------------ */}
        <div className="sh-foto">
          <span className="sh-mira sh-mira-topo" aria-hidden="true">
            <Mira />
          </span>

          {/* traços roxos que atravessam o retrato */}
          <svg className="sh-tracos" viewBox="0 0 300 400" fill="none" aria-hidden="true">
            <path d="M92 152 L172 118" />
            <path d="M104 168 L162 142" />
            <path d="M196 262 L292 232" />
            <path d="M196 262 L268 288" />
          </svg>

          <Media
            src={CONFIG.imagens.retrato || CONFIG.imagens.sobre}
            alt={CONFIG.nome.join(" ")}
            hint="RETRATO SEM FUNDO · PNG · 1000×1200"
            ratio="1 / 1.2"
            cover={false}
          />

          <div className="sh-lateral mono" aria-hidden="true">
            {PERFIL.lateral.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
