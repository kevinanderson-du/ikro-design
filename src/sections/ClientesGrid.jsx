import { CLIENTES } from "../data/clientes";
import Eyebrow from "../components/ui/Eyebrow";
import Seta from "../components/ui/Seta";
import "./ClientesGrid.css";

/* Grade de clientes da aba SOBRE.
   O botão "VER TODOS CLIENTES" volta para a home e para na esteira de logos. */
export default function ClientesGrid({ ir, quantidade = 12 }) {
  const lista = CLIENTES.slice(0, quantidade);

  return (
    <div className="bloco cli-bloco">
      <Eyebrow>CLIENTES &amp; COLABORAÇÕES</Eyebrow>

      <div className="cli-grid">
        {lista.map((c) => (
          <div className="cli-item" key={c.nome}>
            {c.logo ? <img src={c.logo} alt={c.nome} /> : <span className="cli-nome">{c.nome}</span>}
          </div>
        ))}
      </div>

      <button className="btn btn-outline" onClick={() => ir("inicio", "clientes")}>
        VER TODOS CLIENTES <Seta />
      </button>
    </div>
  );
}
