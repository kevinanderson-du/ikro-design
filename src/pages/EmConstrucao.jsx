import { ABAS } from "../data/navegacao";
import { linkWhatsapp } from "../utils/links";
import Seta from "../components/ui/Seta";
import "./EmConstrucao.css";

/* Tela temporária das abas que ainda serão construídas.
   Quando cada aba ficar pronta, é só trocar o componente no App.jsx. */
export default function EmConstrucao({ aba, titulo, rotulo, ir }) {
  const i = ABAS.findIndex((a) => a.id === aba);
  const nome = titulo || ABAS[i]?.label || "";
  const marcador = rotulo || `0${i + 1} / ${ABAS[i]?.label || ""}`;

  return (
    <section className="sec sec-stub">
      <div className="wrap">
        <div className="stub-eyebrow mono">{marcador}</div>
        <h2 className="h2 stub-h2">{nome}</h2>
        <p className="p stub-p">
          Esta tela é a próxima etapa do projeto. A navegação já está funcionando: tudo acontece na
          mesma guia, sem recarregar a página.
        </p>

        <div className="stub-btns">
          <button className="btn btn-outline" onClick={() => ir("inicio")}>
            VOLTAR PARA A HOME <Seta />
          </button>
          <a className="btn btn-ghost" href={linkWhatsapp()} target="_blank" rel="noreferrer">
            FALAR NO WHATSAPP <Seta />
          </a>
        </div>
      </div>
    </section>
  );
}
