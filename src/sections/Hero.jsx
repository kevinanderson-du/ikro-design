import { CONFIG } from "../data/config";
import Eyebrow from "../components/ui/Eyebrow";
import Media from "../components/ui/Media";
import Seta from "../components/ui/Seta";
import "./Hero.css";

export default function Hero({ ir }) {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="wrap hero-in">
        <div className="hero-txt">
          <Eyebrow className="espaço">OLÁ, EU SOU</Eyebrow>

          <h1 className="hero-nome">
            <span className="reveal">{CONFIG.nome[0]}</span>
            <span className="reveal reveal-2">{CONFIG.nome[1]}</span>
          </h1>

          <p className="hero-cargo mono">{CONFIG.cargo}</p>
          <p className="hero-resumo">{CONFIG.resumo}</p>

          <button className="btn btn-outline" onClick={() => ir("portfolio")}>
            VER PORTFÓLIO <Seta />
          </button>
        </div>

        <div className="hero-img">
          <Media
            src={CONFIG.imagens.hero}
            alt="Uniforme desenvolvido por Ícaro Augusto"
            hint="FOTO DO BANNER · 1200×1400"
            ratio="1 / 1.15"
            cover={false}
          />
        </div>
      </div>

      <div className="hero-side mono" aria-hidden="true">
        DESIGN DE UNIFORMES · BRANDING · ESPORTE
      </div>

      <div className="hero-scroll mono" aria-hidden="true">
        SCROLL <span className="hero-scroll-line" />
      </div>
    </section>
  );
}
