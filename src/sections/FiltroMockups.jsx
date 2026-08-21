import { CATEGORIAS_MOCKUPS, ORDENACOES_MOCKUPS } from "../data/mockups";
import "./FiltroPortfolio.css"; /* mesma aparência do filtro do portfólio */

export default function FiltroMockups({ categoria, setCategoria, ordem, setOrdem, total }) {
  return (
    <div className="filtro">
      <div className="filtro-esq">
        <span className="filtro-lbl mono">
          <span className="filtro-dot" aria-hidden="true" />
          FILTRAR POR
        </span>

        <div className="filtro-botoes" role="group" aria-label="Filtrar por categoria">
          {CATEGORIAS_MOCKUPS.map((c) => (
            <button
              key={c}
              className={`filtro-btn mono ${categoria === c ? "is-ativo" : ""}`}
              onClick={() => setCategoria(c)}
              aria-pressed={categoria === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="filtro-dir">
        <span className="filtro-total mono">
          {total} {total === 1 ? "MOCKUP" : "MOCKUPS"}
        </span>

        <div className="filtro-select">
          <select
            className="mono"
            value={ordem}
            onChange={(e) => setOrdem(e.target.value)}
            aria-label="Ordenar mockups"
          >
            {ORDENACOES_MOCKUPS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
