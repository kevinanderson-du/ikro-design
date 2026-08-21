/* Projetos do portfólio.
   O "id" é usado na URL interna do projeto (aba PORTFÓLIO > projeto).
   "destaque: true" faz o projeto aparecer na esteira da home. */

export const PROJETOS = [
  {
    id: "atletico-mineiro",
    tag: "FUTEBOL",
    titulo: "crusero",
    sub: "Uniforme 2026",
    cliente: "Clube Atlético Mineiro",
    ano: "2026",
    servicos: ["Design de Uniforme", "Direção Criativa", "Pesquisa"],
    capa: "/imagens/teste-kaio-jorge.jpg",
    galeria: [], // imagens da página interna do projeto
    destaque: true,
  },
  {
    id: "vasco-da-gama",
    tag: "FUTEBOL",
    titulo: "VASCO DA GAMA",
    sub: "Design de uniforme",
    cliente: "CR Vasco da Gama",
    ano: "2025",
    servicos: ["Design de Uniforme"],
    capa: "",
    galeria: [],
    destaque: true,
  },
  {
    id: "fortaleza-ec",
    tag: "FUTEBOL",
    titulo: "FORTALEZA EC",
    sub: "Uniforme 2024",
    cliente: "Fortaleza EC",
    ano: "2024",
    servicos: ["Design de Uniforme"],
    capa: "",
    galeria: [],
    destaque: true,
  },
  {
    id: "logitech-g",
    tag: "BRANDING",
    titulo: "LOGITECH G",
    sub: "Identidade visual",
    cliente: "Logitech G",
    ano: "2024",
    servicos: ["Identidade Visual", "Direção Criativa"],
    capa: "",
    galeria: [],
    destaque: true,
  },
  {
    id: "ceara-sc",
    tag: "FUTEBOL",
    titulo: "CEARÁ SC",
    sub: "Uniforme 2024",
    cliente: "Ceará SC",
    ano: "2024",
    servicos: ["Design de Uniforme"],
    capa: "",
    galeria: [],
    destaque: true,
  },
  {
    id: "comite-olimpico",
    tag: "BRANDING",
    titulo: "COMITÊ OLÍMPICO",
    sub: "Identidade visual",
    cliente: "Comitê Olímpico do Brasil",
    ano: "2024",
    servicos: ["Identidade Visual"],
    capa: "",
    galeria: [],
    destaque: true,
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