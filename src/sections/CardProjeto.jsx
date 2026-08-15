import Media from "../components/ui/Media";
import Seta from "../components/ui/Seta";
import "./CardProjeto.css";

/* Card clicável horizontal com texto sobreposto */
export default function CardProjeto({ projeto, onAbrir }) {
  return (
    <button className="proj" onClick={() => onAbrir(projeto.id)}>
      <div className="proj-media">
        {/* Alterado para 16 / 9 para dar o formato deitado (widescreen) */}
        <Media src={projeto.capa} alt={projeto.titulo} hint="CAPA" ratio="16 / 9" />
      </div>

      {/* Essa div agora vai flutuar por cima da imagem */}
      <div className="proj-info">
        <div className="proj-textos">
          <span className="proj-tag mono">{projeto.tag}</span>
          <h3 className="proj-titulo">{projeto.titulo}</h3>
          <p className="proj-sub">{projeto.sub}</p>
        </div>
        
        {/* O botão/ícone no canto inferior direito */}
        <span className="proj-cta mono">
          <Seta size={16} />
        </span>
      </div>
    </button>
  );
}