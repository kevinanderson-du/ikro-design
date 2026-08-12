import { ESPECIALIDADES } from "../data/especialidades";
import Eyebrow from "../components/ui/Eyebrow";
import Icone from "../components/ui/Icone";
import "./Especialidades.css";

export default function Especialidades() {
  return (
    <section className="sec sec-esp">
      <div className="wrap">
        <Eyebrow>O QUE EU FAÇO</Eyebrow>
        <h2 className="h2 esp-h2">ESPECIALIDADES</h2>

        <div className="esp-grid">
          {ESPECIALIDADES.map((e) => (
            <div className="esp" key={e.titulo}>
              <div className="esp-ico">
                <Icone tipo={e.icone} />
              </div>
              <h3 className="esp-titulo">{e.titulo}</h3>
              <p className="esp-txt">{e.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
