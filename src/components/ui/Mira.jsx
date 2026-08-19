/* Detalhe gráfico de mira/crosshair — marcador roxo usado nos cantos da aba SOBRE */
export default function Mira({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 0v6M12 18v6M0 12h6M18 12h6" />
    </svg>
  );
}
