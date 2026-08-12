import { CLIENTES } from "../data/clientes";
import Eyebrow from "../components/ui/Eyebrow";
import "../styles/marquee.css";
import "./EsteiraClientes.css";

export default function EsteiraClientes() {
  const lista = [...CLIENTES, ...CLIENTES]; // duplicado para o loop infinito

  return (
    <section className="faixa-clientes">
      <div className="wrap">
        <Eyebrow>CLIENTES &amp; COLABORAÇÕES</Eyebrow>
      </div>

      <div className="marquee" aria-label="Clientes e colaborações">
        <div className="marquee-track track-logos">
          {lista.map((c, i) => (
            <div className="cliente" key={`${c.nome}-${i}`}>
              {c.logo ? <img src={c.logo} alt={c.nome} /> : <span className="cliente-nome">{c.nome}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
