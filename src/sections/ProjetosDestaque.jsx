import { projetosDestaque } from "../data/projetos";
import { useEsteira } from "../hooks/useEsteira";
import Eyebrow from "../components/ui/Eyebrow";
import Seta from "../components/ui/Seta";
import CardProjeto from "./CardProjeto";
import "./ProjetosDestaque.css";

export default function ProjetosDestaque({ ir, abrirProjeto }) {
  const destaques = projetosDestaque();
  const lista = [...destaques, ...destaques]; /* duplicado: alimenta o giro infinito */
  const { ref, empurrar, handlers } = useEsteira({ velocidade: 0.45 });

  return (
    <section className="sec sec-projetos">
      <div className="wrap sec-head">
        <Eyebrow>PROJETOS EM DESTAQUE</Eyebrow>

        <div className="est-controles">
          
          

          <button className="link-mais mono" onClick={() => ir("portfolio")}>
            VER TODOS <Seta size={12} />
          </button>
        </div>
      </div>

      <div className="esteira" ref={ref} {...handlers}>
        <div className="esteira-trilha">
          {lista.map((p, i) => (
            <CardProjeto key={`${p.id}-${i}`} projeto={p} onAbrir={abrirProjeto} />
          ))}
        </div>
      </div>

      <p className="wrap dica mono">Arraste para o lado ou clique em um card para abrir o projeto</p>
    </section>
  );
}
