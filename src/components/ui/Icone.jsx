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
      case "local":
      return (
        <svg {...props}>
          <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "data":
      return (
        <svg {...props}>
          <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
          <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
        </svg>
      );
    case "globo":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.1 0 17-2.5-2.9-2.5-14.6 0-17z" />
        </svg>
      );
    case "email":
      return (
        <svg {...props}>
          <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
          <path d="M3.6 6.5L12 13l8.4-6.5" />
        </svg>
      );
    case "download":
      return (
        <svg {...props}>
          <path d="M12 4v11M7.5 11l4.5 4.5L16.5 11M4.5 19.5h15" />
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
