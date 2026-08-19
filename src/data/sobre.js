/* ==========================================================================
   DADOS DA ABA SOBRE
   ========================================================================== */

export const PERFIL = {
  cargos: ["GRAPHIC DESIGNER", "SPORTS DESIGNER"],

  titulo: "SOBRE MIM",
  subtitulo: "Designer gráfico especializado em design esportivo e identidade visual.",

  paragrafos: [
    "Atuo há mais de 5 anos transformando ideias em projetos visuais de impacto para marcas e clubes dentro e fora do Brasil.",
    "Meu foco é unir criatividade, estratégia e cultura esportiva para criar identidades fortes e memoráveis.",
  ],

  /* AAAA-MM-DD — a idade é calculada sozinha, nunca fica desatualizada */
  nascimento: "2003-04-10",

  disponibilidade: "Disponível para projetos",

  /* Palavras verticais na lateral da foto */
  lateral: ["FOCO", "CRIATIVIDADE", "CULTURA", "DESIGN"],
};

/* Barra de habilidades: o número é o % que a barra preenche.
   Para tirar ou trocar uma habilidade, edite só esta lista. */
export const HABILIDADES = [
  { nome: "DESIGN DE UNIFORMES", nivel: 95 },
  { nome: "IDENTIDADE VISUAL", nivel: 90 },
  { nome: "DIREÇÃO CRIATIVA", nivel: 90 },
  { nome: "MOCKUPS & 3D", nivel: 85 },
  { nome: "BRANDING", nivel: 85 },
  { nome: "DIAGRAMAÇÃO", nivel: 80 },
  { nome: "ILUSTRAÇÃO", nivel: 75 },
];

/* Calcula a idade a partir da data de nascimento */
export function idadeAtual(nascimento = PERFIL.nascimento) {
  const nasc = new Date(nascimento);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nasc.getFullYear();
  const passouAniversario =
    hoje.getMonth() > nasc.getMonth() ||
    (hoje.getMonth() === nasc.getMonth() && hoje.getDate() >= nasc.getDate());
  if (!passouAniversario) idade -= 1;
  return idade;
}

/* Formata 2003-04-06 → 06.04.2003 */
export function dataFormatada(nascimento = PERFIL.nascimento) {
  const [ano, mes, dia] = nascimento.split("-");
  return `${dia}.${mes}.${ano}`;
}
