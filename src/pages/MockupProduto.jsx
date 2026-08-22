import { useState } from "react";
import { acharMockup, listarMockups, formatarPreco } from "../data/mockups";
import { linkWhatsapp } from "../utils/links";
import Media from "../components/ui/Media";
import Icone from "../components/ui/Icone";
import Seta from "../components/ui/Seta";
import CardMockup from "../sections/CardMockup";
import EmConstrucao from "./EmConstrucao";
import "./MockupProduto.css";

const GARANTIAS = [
  { icone: "download", titulo: "DOWNLOAD IMEDIATO", texto: "Após a confirmação do pagamento" },
  { icone: "escudo", titulo: "GARANTIA DE 7 DIAS", texto: "Não gostou? Devolvemos o valor" },
  { icone: "email", titulo: "SUPORTE DIRETO", texto: "Fale comigo para tirar dúvidas" },
];

export default function MockupProduto({ id, ir, abrirMockup }) {
  const mockup = acharMockup(id);
  

  if (!mockup) {
    return <EmConstrucao aba="mockups" ir={ir} titulo="MOCKUP NÃO ENCONTRADO" rotulo="MOCKUPS" />;
  }

    const preco = mockup.preco;

    const mensagem = `Olá, Ícaro! Quero comprar o ${mockup.nome} (${formatarPreco(preco)}).`;

  const outros = listarMockups().filter((m) => m.id !== mockup.id).slice(0, 3);

  return (
    <>
      <section className="prod">
        <div className="wrap">
          <div className="prod-caminho mono">
            <button onClick={() => ir("mockups")}>← VOLTAR PARA MOCKUPS</button>
            <span>/ {mockup.nome}</span>
          </div>

          <div className="prod-grid">
            {/* ------------------------------ imagem ------------------------------ */}
            <div className="prod-imagem">
              <Media src={mockup.capa} alt={mockup.nome} hint="MOCKUP · 1200×1200" ratio="1 / 1" />
            </div>

            {/* ------------------------------ compra ------------------------------ */}
            <div className="prod-compra">
              <span className="prod-cat mono">{mockup.categoria}</span>
              <h1 className="prod-nome">{mockup.nome}</h1>
              <p className="prod-resumo">{mockup.resumo}</p>

              

              <div className="prod-preco">
                <span className="mono">À VISTA</span>
                <strong>{formatarPreco(preco)}</strong>
              </div>

              <div className="prod-botoes">
                <a className="btn btn-solid btn-redondo" href={linkWhatsapp(mensagem)} target="_blank" rel="noreferrer">
                  COMPRAR AGORA <Seta />
                </a>
                
              </div>

              <ul className="prod-garantias">
                {GARANTIAS.map((g) => (
                  <li key={g.titulo}>
                    <span className="prod-garantia-ico">
                      <Icone tipo={g.icone} size={18} />
                    </span>
                    <span>
                      <strong className="mono">{g.titulo}</strong>
                      <span>{g.texto}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --------------------------- o que vem junto --------------------------- */}
          <div className="prod-detalhes">
            <div className="prod-bloco">
              <h2 className="prod-h2 mono">O QUE ESTÁ INCLUÍDO</h2>
              <ul className="prod-inclui">
                {mockup.inclui.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="prod-bloco">
              <h2 className="prod-h2 mono">ESPECIFICAÇÕES</h2>
              <dl className="prod-specs mono">
                <div>
                  <dt>ARQUIVOS</dt>
                  <dd>{mockup.specs.arquivos}</dd>
                </div>
                <div>
                  <dt>RESOLUÇÃO</dt>
                  <dd>{mockup.specs.resolucao}</dd>
                </div>
                <div>
                  <dt>MODO DE COR</dt>
                  <dd>{mockup.specs.cor}</dd>
                </div>
                <div>
                  <dt>TAMANHO</dt>
                  <dd>{mockup.specs.tamanho}</dd>
                </div>
                <div>
                  <dt>COMPATIBILIDADE</dt>
                  <dd>{mockup.specs.programa}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ outros packs ----------------------------- */}
      {outros.length > 0 && (
        <section className="prod-outros">
          <div className="wrap">
            <div className="sec-head">
              <span className="prod-h2 mono">OUTROS MOCKUPS</span>
              <button className="link-mais mono" onClick={() => ir("mockups")}>
                VER TODOS <Seta size={12} />
              </button>
            </div>

            <div className="prod-outros-grid">
              {outros.map((m) => (
                <CardMockup key={m.id} mockup={m} onAbrir={abrirMockup} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
