import { useState } from "react";
import { ABAS } from "../../data/navegacao";
import { useScrolled } from "../../hooks/useScrolled";
import { linkWhatsapp } from "../../utils/links";
import Logo from "../ui/Logo";
import Seta from "../ui/Seta";
import "./Header.css";

export default function Header({ aba, ir }) {
  const solido = useScrolled(24);
  const [menuAberto, setMenuAberto] = useState(false);

  const navegar = (id) => {
    setMenuAberto(false);
    ir(id);
  };

  return (
    <header className={`header ${solido ? "is-solid" : ""}`}>
      <div className="wrap header-in">
        <Logo onClick={() => navegar("inicio")} />

        <nav className="nav-desk" aria-label="Navegação principal">
          {ABAS.map((a) => (
            <button
              key={a.id}
              className={`nav-link ${aba === a.id ? "is-active" : ""}`}
              onClick={() => navegar(a.id)}
              aria-current={aba === a.id ? "page" : undefined}
            >
              {a.label}
            </button>
          ))}
        </nav>

        <div className="header-right">
          <a className="btn btn-outline btn-sm" href={linkWhatsapp()} target="_blank" rel="noreferrer">
            ORÇAMENTO <Seta size={12} />
          </a>

          <button
            className="burger"
            onClick={() => setMenuAberto((v) => !v)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
          >
            <span style={{ transform: menuAberto ? "translateY(4px) rotate(45deg)" : "none" }} />
            <span style={{ opacity: menuAberto ? 0 : 1 }} />
            <span style={{ transform: menuAberto ? "translateY(-4px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>

      <div className={`nav-mob ${menuAberto ? "is-open" : ""}`}>
        {ABAS.map((a, i) => (
          <button
            key={a.id}
            className={`nav-mob-link ${aba === a.id ? "is-active" : ""}`}
            onClick={() => navegar(a.id)}
          >
            <span className="mono nav-mob-num">0{i + 1}</span>
            {a.label}
          </button>
        ))}

        <a className="btn btn-solid" href={linkWhatsapp()} target="_blank" rel="noreferrer">
          SOLICITAR ORÇAMENTO <Seta size={12} />
        </a>
      </div>
    </header>
  );
}
