import { CONFIG } from "../data/config";
import { NUMEROS } from "../data/especialidades";
import { useInView } from "../hooks/useInView";
import Eyebrow from "../components/ui/Eyebrow";
import Media from "../components/ui/Media";
import Contador from "../components/ui/Contador";
import Seta from "../components/ui/Seta";
import "./SobreTeaser.css";

export default function SobreTeaser({ ir }) {
  const [ref, visivel] = useInView({ threshold: 0.3 });

  return (
    <section className="sec sec-sobre" ref={ref}>
      <div className="wrap sobre-grid">
        <div className="sobre-foto">
          <Media src={CONFIG.imagens.sobre} alt="Ícaro Augusto" hint="FOTO PESSOAL · 900×1100" ratio="4 / 5" />

          {/* === INÍCIO DO BOX LIQUID GLASS === */}
          <div className="box-seguidores">
            <div className="box-textos">
              <span className="box-num">+{CONFIG.seguidores}</span>
              <span className="box-lbl-destaque">SEGUIDORES</span>
              <span className="box-lbl">NAS REDES SOCIAIS</span>
            </div>
            
            {/* Ícones das redes sociais */}
            <div className="box-icones">
              <img src="/public/imagens/insta.svg" alt="Instagram" className="icone-social" />
              <img src="/public/imagens/youtube.svg" alt="YouTube" className="icone-social-youtube" />
              <img src="/public/imagens/tiktok.svg" alt="TikTok" className="icone-social" />
              <img src="/public/imagens/x.svg" alt="X" className="icone-social-x" />
            </div>
          </div>
          {/* === FIM DO BOX LIQUID GLASS === */}
          
        </div>

        <div className="sobre-txt">
          <Eyebrow>SOBRE MIM</Eyebrow>
          <h2 className="h2">
            DESIGN QUE
            <br />
            CONECTA MARCAS,
            <br />
            CLUBES E PESSOAS.
          </h2>
          <p className="p">
            Sou designer gráfico especializado em design esportivo, com foco em identidade visual,
            uniformes e projetos que unem estratégia, estética e cultura.
          </p>
          <p className="p">
            Há mais de 5 anos transformo ideias em projetos visuais de impacto para marcas e clubes
            dentro e fora do Brasil.
          </p>
          <button className="btn btn-outline" onClick={() => ir("sobre")}>
            CONHECER MAIS <Seta />
          </button>
        </div>

        <div className="sobre-numeros">
          {NUMEROS.map((n, i) => (
            <div className="num" key={n.label}>
              <span className="num-valor">
                <Contador
                  valor={n.valor}
                  prefixo={n.prefixo}
                  sufixo={n.sufixo}
                  ativo={visivel}
                  duracao={1200 + i * 250}
                />
              </span>
              <span className="num-lbl mono">{n.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}