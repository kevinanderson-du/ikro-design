import "./Media.css";

/* ==========================================================================
   Slot de imagem.
   - Com "src": mostra a foto.
   - Sem "src": mostra um marcador tracejado com o tamanho recomendado,
     para o layout nunca quebrar enquanto as artes não chegam.
   ========================================================================== */

export default function Media({
  src,
  alt = "",
  hint = "IMAGEM",
  ratio = "4 / 5",
  cover = true,
}) {
  if (src) {
    return (
      <img
        className="media-img"
        src={src}
        alt={alt}
        loading="lazy"
        style={{ aspectRatio: ratio, objectFit: cover ? "cover" : "contain" }}
      />
    );
  }

  return (
    <div className="media-slot" style={{ aspectRatio: ratio }}>
      <div className="media-slot-in">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M3 16l5-5 4 4 3-3 6 6" />
          <circle cx="8.5" cy="9" r="1.4" />
        </svg>
        <span className="mono">{hint}</span>
      </div>
    </div>
  );
}
