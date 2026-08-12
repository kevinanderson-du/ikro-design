/* Ícones das especialidades. Para criar um novo, adicione um case aqui
   e use o nome dele em src/data/especialidades.js */
export default function Icone({ tipo, size = 26 }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (tipo) {
    case "camisa":
      return (
        <svg {...props}>
          <path d="M8 3l4 2 4-2 5 3-2 4-2-1v12H7V9L5 10 3 6z" />
        </svg>
      );
    case "escudo":
      return (
        <svg {...props}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "cubo":
      return (
        <svg {...props}>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
          <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M4 20l1-4L16 5l3 3L8 19z" />
          <path d="M14 7l3 3" />
        </svg>
      );
  }
}
