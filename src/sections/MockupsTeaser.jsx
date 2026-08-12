import { MOCKUPS } from "../data/mockups";
import Eyebrow from "../components/ui/Eyebrow";
import Media from "../components/ui/Media";
import Seta from "../components/ui/Seta";
import "./MockupsTeaser.css";

/* Seção simples, sem esteira: 3 cards + botão para a aba MOCKUPS */
export default function MockupsTeaser({ ir }) {
  return (
    <section className="sec sec-mockups">
      <div className="wrap mock-grid">
        <div className="mock-txt">
          <Eyebrow>IK·RO MOCKUPS</Eyebrow>
          <h2 className="h2">
            MOCKUPS PREMIUM
            <br />
            PARA DESIGNERS
            <br />
            EXIGENTES.
          </h2>
          <p className="p">
            Arquivos profissionais de uniformes esportivos, prontos para apresentar seus projetos em
            outro nível.
          </p>
          <button className="btn btn-outline" onClick={() => ir("mockups")}>
            VER MOCKUPS <Seta />
          </button>
        </div>

        <div className="mock-cards">
          {MOCKUPS.map((m) => (
            <button className="mock" key={m.id} onClick={() => ir("mockups")}>
              <Media src={m.capa} alt={m.nome} hint="MOCKUP · 800×800" ratio="1 / 1" />
              <div className="mock-info">
                <h3 className="mock-nome">{m.nome}</h3>
                <span className="mock-pack mono">{m.pack}</span>
                <span className="mock-preco">{m.preco}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
