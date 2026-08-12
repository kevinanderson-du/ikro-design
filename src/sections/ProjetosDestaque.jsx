import { projetosDestaque } from "../data/projetos";
import Eyebrow from "../components/ui/Eyebrow";
import Seta from "../components/ui/Seta";
import CardProjeto from "./CardProjeto";
import "../styles/marquee.css";
import "./ProjetosDestaque.css";

export default function ProjetosDestaque({ ir, abrirProjeto }) {
  const destaques = projetosDestaque();
  const lista = [...destaques, ...destaques]; // duplicado para o loop infinito

  return (
    <section className="sec sec-projetos">
      <div className="wrap sec-head">
        <Eyebrow>PROJETOS EM DESTAQUE</Eyebrow>
        <button className="link-mais mono" onClick={() => ir("portfolio")}>
          VER TODOS <Seta size={12} />
        </button>
      </div>

      <div className="marquee">
        <div className="marquee-track track-cards">
          {lista.map((p, i) => (
            <CardProjeto key={`${p.id}-${i}`} projeto={p} onAbrir={abrirProjeto} />
          ))}
        </div>
      </div>

      <p className="wrap dica mono">Clique em um card para abrir o projeto completo</p>
    </section>
  );
}
