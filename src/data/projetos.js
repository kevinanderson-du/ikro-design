/* Projetos do portfólio.
   O "id" é usado na URL interna do projeto (aba PORTFÓLIO > projeto).
   "destaque: true" faz o projeto aparecer na esteira da home. */

export const PROJETOS = [
  {
    id: "cb-volei",
    tag: "UNIFORME",
    titulo: "VÔLEI BRASIL",
    sub: "Uniforme 2025",
    cliente: "Seleção Brasileira de Vôlei",
    ano: "2025",
    servicos: ["Design de Uniforme", "Direção Criativa", "Pesquisa"],
    capa: "/imagens/cb_volei.png",
    galeria: [], 
    destaque: true,
    linkBehance: "https://www.behance.net/gallery/255376237/Volei-Brasil-Uniformes-2026"
  },
  {
    id: "reversao",
    tag: "UNIFORME",
    titulo: "CANAL REVERSÃO",
    sub: "Design de Uniforme",
    cliente: "Canal Reversão",
    ano: "2025",
    servicos: ["Design de Uniforme"],
    capa: "/imagens/REVERSAO.jpg",
    galeria: [],
    destaque: true,
    linkBehance: "https://www.behance.net/gallery/255769411/Uniformes-Canal-Reversao"
  },
  {
    id: "g3x",
    tag: "ESCUDO",
    titulo: "ESCUDO G3X FC",
    sub: "Kings League",
    cliente: "G3X FC",
    ano: "2024",
    servicos: ["Design de Logotipo"],
    capa: "/imagens/g3x.jpg",
    galeria: [],
    destaque: true,
    linkBehance: "https://www.behance.net/gallery/255768945/Escudo-G3X-FC-Kings-League"
  },
  {
    id: "logitech-g",
    tag: "UNIFORME",
    titulo: "LOGITECH G",
    sub: "BGS 2023",
    cliente: "Logitech G",
    ano: "2024",
    servicos: ["Identidade Visual", "Direção Criativa"],
    capa: "/imagens/logitech.png",
    galeria: [],
    destaque: true,
    linkBehance: "https://www.behance.net/gallery/184902621/Jersey-Logitech-BGS-EDITION"
  },
  {
    id: "ceara-sc",
    tag: "UNIFORME",
    titulo: "CEARÁ SC",
    sub: "Camisa III - 2020",
    cliente: "Ceará SC",
    ano: "2024",
    servicos: ["Design de Uniforme"],
    capa: "/imagens/ceara.png",
    galeria: [],
    destaque: true,
    linkBehance: "https://www.behance.net/gallery/148583827/Uniforme-III-Ceara-SC-2020"
  },
  {
    id: "comite-olimpico",
    tag: "BRANDING",
    titulo: "COMITÊ OLÍMPICO",
    sub: "Olímpiadas Paris 2024",
    cliente: "Comitê Olímpico do Brasil",
    ano: "2024",
    servicos: ["Identidade Visual"],
    capa: "/imagens/time_brasil.png",
    galeria: [],
    destaque: true,
    linkBehance: "https://www.behance.net/gallery/206699317/SM-OLIMPIADAS-PARIS-2024"
  },

  {
    id: "america-mg",
    tag: "UNIFORME",
    titulo: "AMÉRICA-MG",
    sub: "Camisa III - 2022",
    cliente: "América-mg",
    ano: "2022",
    servicos: ["Design de Uniforme"],
    capa: "/imagens/america.png",
    galeria: [],
    destaque: true,
    linkBehance: "https://www.behance.net/gallery/173994225/UNIFORME-III-Amrica-FC-2022"
  },
];

export const projetosDestaque = () => PROJETOS.filter((p) => p.destaque);
export const acharProjeto = (id) => PROJETOS.find((p) => p.id === id) || null;


/* ==========================================================================
   CATEGORIAS DO FILTRO
   Sai sozinho da lista acima: cadastrou um projeto com uma "tag" nova,
   o botão do filtro aparece automaticamente. Não precisa mexer aqui.
   ========================================================================== */
export const CATEGORIAS = ["TODOS", ...new Set(PROJETOS.map((p) => p.tag))];

export const ORDENACOES = [
  { id: "recentes", label: "MAIS RECENTES" },
  { id: "antigos", label: "MAIS ANTIGOS" },
  { id: "az", label: "A — Z" },
];

/* Filtra e ordena o catálogo do portfólio */
export function listarProjetos(categoria = "TODOS", ordem = "recentes") {
  const filtrados =
    categoria === "TODOS" ? [...PROJETOS] : PROJETOS.filter((p) => p.tag === categoria);

  return filtrados.sort((a, b) => {
    if (ordem === "az") return a.titulo.localeCompare(b.titulo, "pt-BR");
    const anoA = Number(a.ano) || 0;
    const anoB = Number(b.ano) || 0;
    return ordem === "antigos" ? anoA - anoB : anoB - anoA;
  });
}