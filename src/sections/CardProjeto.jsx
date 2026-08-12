import Media from "../components/ui/Media";
import Seta from "../components/ui/Seta";
import "./CardProjeto.css";

/* Card clicável. O clique abre a PÁGINA COMPLETA do projeto (não uma imagem). */
export default function CardProjeto({ projeto, onAbrir }) {
  return (
    <button className="proj" onClick={() => onAbrir(projeto.id)}>
      <div className="proj-media">
        <Media src={projeto.capa} alt={projeto.titulo} hint="CAPA · 1000×1250" ratio="4 / 5" />
        <span className="proj-stripe" aria-hidden="true" />
      </div>

      <div className="proj-info">
        <span className="proj-tag mono">{projeto.tag}</span>
        <h3 className="proj-titulo">{projeto.titulo}</h3>
        <p className="proj-sub">{projeto.sub}</p>
        <span className="proj-cta mono">
          VER PROJETO <Seta size={12} />
        </span>
      </div>
    </button>
  );
}
