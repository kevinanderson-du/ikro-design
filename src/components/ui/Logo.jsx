import { CONFIG } from "../../data/config";
import "./Logo.css";

export default function Logo({ onClick }) {
  return (
    <button className="logo" onClick={onClick} aria-label="Ir para o início">
      <span className="logo-txt">
        {CONFIG.marca.a}
        <span className="logo-dot">·</span>
        {CONFIG.marca.b}
      </span>
      <span className="logo-sub mono">{CONFIG.marca.sub}</span>
    </button>
  );
}
