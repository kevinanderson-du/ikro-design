import { formatarPreco } from "../data/mockups";
import Media from "../components/ui/Media";
import Seta from "../components/ui/Seta";
import "./CardMockup.css";

/* Card de produto: nome e preço sempre visíveis.
   O hover só acende a borda roxa — sem véu por cima da imagem. */
export default function CardMockup({ mockup, onAbrir }) {
  return (
    <button className="mk-card" onClick={() => onAbrir(mockup.id)}>
      <div className="mk-thumb">
        <Media src={mockup.capa} alt={mockup.nome} hint="MOCKUP · 1000×1000" ratio="1 / 1" />
        <span className="mk-etiqueta mono">{mockup.categoria}</span>
      </div>

      <div className="mk-info">
        <h3 className="mk-nome">{mockup.nome}</h3>

        <div className="mk-rodape">
          <span className="mk-preco">{formatarPreco(mockup.precoPessoal)}</span>
          <span className="mk-seta" aria-hidden="true">
            <Seta size={12} />
          </span>
        </div>
      </div>
    </button>
  );
}
