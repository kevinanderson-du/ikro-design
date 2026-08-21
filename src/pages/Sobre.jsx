import SobreHero from "../sections/SobreHero";
import ClientesGrid from "../sections/ClientesGrid";

import CTA from "../sections/CTA";
import "./Sobre.css";

/* ETAPA 2 — SOBRE
   Topo (retrato + ficha técnica) · clientes · habilidades · chamada final. */
export default function Sobre({ ir }) {
  return (
    <>
      <SobreHero />

      <section className="sobre-blocos">
        <div className="wrap sobre-blocos-grid">
          <ClientesGrid ir={ir} />
          
        </div>
      </section>

      
    </>
  );
}
