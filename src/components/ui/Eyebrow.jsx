import "./Eyebrow.css";

/* Rótulo pequeno com bolinha roxa que abre cada seção */
export default function Eyebrow({ children, className }) {
    return (
        <div className={`eyebrow mono ${className || ""}`}>
            <span className="eyebrow-dot" aria-hidden="true" />
            {children}
        </div>
    );
}
