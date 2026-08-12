import Hero from "../sections/Hero";
import EsteiraClientes from "../sections/EsteiraClientes";
import ProjetosDestaque from "../sections/ProjetosDestaque";
import SobreTeaser from "../sections/SobreTeaser";
import Especialidades from "../sections/Especialidades";
import MockupsTeaser from "../sections/MockupsTeaser";
import CTA from "../sections/CTA";

/* ETAPA 1 — HOME
   Cada bloco abaixo é uma seção independente em src/sections.
   Para reordenar a home, basta trocar a ordem aqui. */
export default function Home({ ir, abrirProjeto }) {
  return (
    <>
      <Hero ir={ir} />
      <EsteiraClientes />
      <ProjetosDestaque ir={ir} abrirProjeto={abrirProjeto} />
      <SobreTeaser ir={ir} />
      <Especialidades />
      <MockupsTeaser ir={ir} />
      <CTA />
    </>
  );
}
