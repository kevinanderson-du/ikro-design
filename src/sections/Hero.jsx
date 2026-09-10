import { CONFIG } from "../data/config";
import { useMaquinaEscrever } from "../hooks/useMaquinaEscrever";
import Seta from "../components/ui/Seta";
import "./Hero.css";

/* Palavras que se alternam embaixo do IK·RO */
const PALAVRAS = ["DESIGN", "STUDIO"];

/* ==========================================================================
   BANNER PRINCIPAL — arte em camadas
   1. imagem de fundo (sem a palavra DESIGN e sem a barrinha cinza)
   2. palavra sendo escrita e apagada
   3. barrinha cinza flutuando
   4. botão
   Cada camada é posicionada em % da imagem, então tudo acompanha o
   tamanho da tela. Os valores ficam no Hero.css.
   ========================================================================== */

export default function Hero({ ir }) {
  const { banner, bannerMobile, bannerBarra } = CONFIG.imagens;
  const palavra = useMaquinaEscrever(PALAVRAS);

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
            {bannerMobile && <source media="(max-width: 900px)" srcSet={bannerMobile} />}
            <img src={banner} alt={`${CONFIG.nome.join(" ")} — ${CONFIG.resumo}`} />
          </picture>
        ) : (
          <div className="hero-slot mono">
            BANNER · 2400×1040 (sem a palavra DESIGN e sem a barrinha)
            <span>e uma versão vertical para celular</span>
          </div>
        )}

        {/* ------------------------- palavra animada ------------------------- */}
        <span className="hero-palavra" aria-label={PALAVRAS.join(" / ")}>
          <span aria-hidden="true">{palavra}</span>
          <span className="hero-cursor" aria-hidden="true" />
          <span className="hero-registrado" aria-hidden="true">®</span>
        </span>

        {/* ------------------------ barrinha flutuando ----------------------- */}
        {bannerBarra && (
          <img className="hero-barra" src={bannerBarra} alt="" aria-hidden="true" />
        )}

        <button className="hero-botao" onClick={() => ir("portfolio")}>
          VER PORTFÓLIO <Seta size={13} />
        </button>
      </div>
    </section>
  );
}
