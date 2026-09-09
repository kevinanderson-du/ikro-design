import { CONFIG } from "../data/config";
import Seta from "../components/ui/Seta";
import "./Hero.css";

/* ==========================================================================
   BANNER PRINCIPAL
   A arte é uma imagem só (feita pelo designer). O único elemento de código
   por cima é o botão — posição ajustável no Hero.css, em porcentagem,
   para acompanhar a imagem em qualquer largura de tela.
   ========================================================================== */

export default function Hero({ ir }) {
  const { banner, bannerMobile } = CONFIG.imagens;

  return (
    <section className="hero">
      {/* o texto do banner está dentro da imagem, então o título de verdade
          fica aqui, invisível na tela mas legível pelo Google e leitores. */}
      <h1 className="hero-titulo-oculto">
        {CONFIG.nome.join(" ")} — {CONFIG.resumo}
      </h1>

      <div className="hero-arte">
        {banner ? (
          <picture>
            {bannerMobile && <source media="(max-width: 700px)" srcSet={bannerMobile} />}
            <img src={banner} alt={`${CONFIG.nome.join(" ")} — ${CONFIG.resumo}`} />
          </picture>
        ) : (
          <div className="hero-slot mono">
            BANNER · 2400×1040 (desktop)
            <span>e uma versão vertical para celular</span>
          </div>
        )}

        <button className="hero-botao" onClick={() => ir("portfolio")}>
          VER PORTFÓLIO <Seta size={13} />
        </button>
      </div>
    </section>
  );
}
