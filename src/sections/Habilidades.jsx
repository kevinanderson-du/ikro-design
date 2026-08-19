import { HABILIDADES } from "../data/sobre";
import { useInView } from "../hooks/useInView";
import Eyebrow from "../components/ui/Eyebrow";
import Contador from "../components/ui/Contador";
import "./Habilidades.css";

/* Barra que preenche e número que sobe quando a seção entra na tela.
   A largura sai de 0 e vai até o nível; o atraso escalonado dá o efeito em cascata. */
export default function Habilidades() {
  const [ref, visivel] = useInView({ threshold: 0.3 });

  return (
    <div className="bloco hab-bloco" ref={ref}>
      <Eyebrow>HABILIDADES</Eyebrow>

      <ul className="hab-lista">
        {HABILIDADES.map((h, i) => (
          <li className="hab" key={h.nome}>
            <span className="hab-nome">{h.nome}</span>

            <span className="hab-trilha">
              <span
                className="hab-barra"
                style={{
                  width: visivel ? `${h.nivel}%` : "0%",
                  transitionDelay: `${i * 110}ms`,
                }}
              />
            </span>

            <span className="hab-valor mono">
              <Contador valor={h.nivel} sufixo="%" ativo={visivel} duracao={1100 + i * 110} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
