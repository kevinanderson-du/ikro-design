import Media from "../components/ui/Media";
import Seta from "../components/ui/Seta";
import "./CardCatalogo.css";

/* Card do catálogo: só a imagem aparece.
   No hover (ou no foco pelo teclado) entra o véu escuro com as informações. */
export default function CardCatalogo({ projeto, onAbrir }) {
  return (
    <button
      className="cat-card"
      onClick={() => onAbrir(projeto.id)}
      aria-label={`Abrir projeto ${projeto.titulo}`}
    >
      <div className="cat-thumb">
        <Media src={projeto.capa} alt={projeto.titulo} hint="CAPA · 1000×1250" ratio="4 / 5" />
      </div>

      <div className="cat-veu">
        <span className="cat-tag mono">{projeto.tag}</span>
        <h3 className="cat-titulo">{projeto.titulo}</h3>
        <p className="cat-sub">{projeto.sub}</p>
        <span className="cat-cta mono">
          VER PROJETO <Seta size={12} />
        </span>
      </div>
    </button>
  );
}
