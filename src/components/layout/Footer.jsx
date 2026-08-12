import { CONFIG } from "../../data/config";
import { ABAS } from "../../data/navegacao";
import { linkWhatsapp, linkEmail } from "../../utils/links";
import Logo from "../ui/Logo";
import "./Footer.css";

export default function Footer({ ir }) {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <Logo onClick={() => ir("inicio")} />

        <nav className="footer-nav" aria-label="Navegação do rodapé">
          {ABAS.map((a) => (
            <button key={a.id} className="footer-link mono" onClick={() => ir(a.id)}>
              {a.label}
            </button>
          ))}
        </nav>

        <div className="footer-social mono">
          <a href={CONFIG.instagram} target="_blank" rel="noreferrer">INSTAGRAM</a>
          <a href={linkWhatsapp()} target="_blank" rel="noreferrer">WHATSAPP</a>
          <a href={linkEmail()}>E-MAIL</a>
        </div>
      </div>

      <div className="wrap footer-bottom mono">
        <span className="espaço">© {new Date().getFullYear()} IK·RO DESIGN. TODOS OS DIREITOS RESERVADOS.</span>
        <span className="espaço">{CONFIG.local}</span>
      </div>
    </footer>
  );
}
