/* ==========================================================================
   MOCKUPS — marketplace
   Cadastrou um item aqui, ele aparece no catálogo da aba MOCKUPS.
   Com "destaque: true", aparece também na vitrine da home.
   Categoria nova cria o botão do filtro sozinha.
   ========================================================================== */

export const MOCKUPS = [
  {
    id: "adidas-jersey",
    nome: "ADIDAS JERSEY MOCKUP PACK",
    categoria: "CAMISAS",
    capa: "", // 1000x1000
    precoPessoal: 59.9,
    precoComercial: 119.9,
    lancamento: "2026-05", // usado na ordenação
    destaque: true,

    resumo:
      "Mockup profissional de camisa desenvolvido para apresentar seus projetos com realismo e qualidade premium.",

    caracteristicas: ["ARQUIVOS PSD", "+7 ÂNGULOS", "SMART OBJECTS"],

    inclui: [
      "Arquivos PSD organizados em camadas",
      "Smart Objects inteligentes",
      "7 ângulos de visualização",
      "6 variações de cores",
      "Alta resolução (6000×4000px)",
      "Guia de uso em PDF",
    ],

    specs: {
      arquivos: "PSD",
      resolucao: "6000×4000px",
      cor: "RGB",
      tamanho: "2,3 GB",
      programa: "Photoshop CC 2020 ou superior",
    },
  },
  {
    id: "nike-jersey",
    nome: "NIKE JERSEY MOCKUP PACK",
    categoria: "CAMISAS",
    capa: "",
    precoPessoal: 59.9,
    precoComercial: 119.9,
    lancamento: "2026-04",
    destaque: true,
    resumo: "Camisa em modelagem Nike, pronta para receber sua arte com acabamento realista.",
    caracteristicas: ["ARQUIVOS PSD", "+6 ÂNGULOS", "SMART OBJECTS"],
    inclui: [
      "Arquivos PSD organizados em camadas",
      "Smart Objects inteligentes",
      "6 ângulos de visualização",
      "Alta resolução (6000×4000px)",
    ],
    specs: {
      arquivos: "PSD",
      resolucao: "6000×4000px",
      cor: "RGB",
      tamanho: "2,1 GB",
      programa: "Photoshop CC 2020 ou superior",
    },
  },
  {
    id: "training-top",
    nome: "TRAINING TOP MOCKUP PACK",
    categoria: "TREINO",
    capa: "",
    precoPessoal: 59.9,
    precoComercial: 119.9,
    lancamento: "2026-03",
    destaque: false,
    resumo: "Blusa de treino manga longa para apresentar coleções completas de linha de treino.",
    caracteristicas: ["ARQUIVOS PSD", "+5 ÂNGULOS", "SMART OBJECTS"],
    inclui: [
      "Arquivos PSD organizados em camadas",
      "Smart Objects inteligentes",
      "5 ângulos de visualização",
      "Alta resolução (6000×4000px)",
    ],
    specs: {
      arquivos: "PSD",
      resolucao: "6000×4000px",
      cor: "RGB",
      tamanho: "1,8 GB",
      programa: "Photoshop CC 2020 ou superior",
    },
  },
  {
    id: "template-builder",
    nome: "TEMPLATE BUILDER PREMIUM",
    categoria: "TEMPLATES",
    capa: "",
    precoPessoal: 49.9,
    precoComercial: 99.9,
    lancamento: "2026-02",
    destaque: true,
    resumo: "Sistema de templates para montar uniformes completos direto no Photoshop.",
    caracteristicas: ["ARQUIVOS PSD", "TEMPLATES EDITÁVEIS", "GUIA DE USO"],
    inclui: [
      "Templates base editáveis",
      "Biblioteca de padrões e texturas",
      "Guia de uso em PDF",
      "Atualizações gratuitas",
    ],
    specs: {
      arquivos: "PSD",
      resolucao: "5000×5000px",
      cor: "RGB",
      tamanho: "1,4 GB",
      programa: "Photoshop CC 2020 ou superior",
    },
  },
  {
    id: "basketball-jersey",
    nome: "BASKETBALL JERSEY MOCKUP PACK",
    categoria: "BASQUETE",
    capa: "",
    precoPessoal: 59.9,
    precoComercial: 119.9,
    lancamento: "2026-01",
    destaque: false,
    resumo: "Regata de basquete com caimento realista para apresentações de coleção.",
    caracteristicas: ["ARQUIVOS PSD", "+5 ÂNGULOS", "SMART OBJECTS"],
    inclui: [
      "Arquivos PSD organizados em camadas",
      "Smart Objects inteligentes",
      "5 ângulos de visualização",
      "Alta resolução (6000×4000px)",
    ],
    specs: {
      arquivos: "PSD",
      resolucao: "6000×4000px",
      cor: "RGB",
      tamanho: "1,9 GB",
      programa: "Photoshop CC 2020 ou superior",
    },
  },
  {
    id: "polo-shirt",
    nome: "POLO SHIRT MOCKUP PACK",
    categoria: "ACESSÓRIOS",
    capa: "",
    precoPessoal: 49.9,
    precoComercial: 99.9,
    lancamento: "2025-12",
    destaque: false,
    resumo: "Camisa polo para linhas de viagem, comissão técnica e produtos institucionais.",
    caracteristicas: ["ARQUIVOS PSD", "+4 ÂNGULOS", "SMART OBJECTS"],
    inclui: [
      "Arquivos PSD organizados em camadas",
      "Smart Objects inteligentes",
      "4 ângulos de visualização",
      "Alta resolução (5000×4000px)",
    ],
    specs: {
      arquivos: "PSD",
      resolucao: "5000×4000px",
      cor: "RGB",
      tamanho: "1,2 GB",
      programa: "Photoshop CC 2020 ou superior",
    },
  },
];

/* ------------------------------- utilidades ------------------------------- */

export const CATEGORIAS_MOCKUPS = ["TODOS", ...new Set(MOCKUPS.map((m) => m.categoria))];

export const ORDENACOES_MOCKUPS = [
  { id: "recentes", label: "MAIS RECENTES" },
  { id: "menor", label: "MENOR PREÇO" },
  { id: "maior", label: "MAIOR PREÇO" },
];

export const mockupsDestaque = () => MOCKUPS.filter((m) => m.destaque);
export const acharMockup = (id) => MOCKUPS.find((m) => m.id === id) || null;

export function listarMockups(categoria = "TODOS", ordem = "recentes") {
  const filtrados =
    categoria === "TODOS" ? [...MOCKUPS] : MOCKUPS.filter((m) => m.categoria === categoria);

  return filtrados.sort((a, b) => {
    if (ordem === "menor") return a.precoPessoal - b.precoPessoal;
    if (ordem === "maior") return b.precoPessoal - a.precoPessoal;
    return String(b.lancamento).localeCompare(String(a.lancamento));
  });
}

/* 59.9 → "R$ 59,90" */
export function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}