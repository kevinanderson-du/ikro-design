/* ==========================================================================
   CONFIGURAÇÕES GERAIS DO SITE
   Tudo que muda com frequência (contatos, nome, imagens) fica aqui.
   ========================================================================== */

/* Para usar uma imagem da pasta src/assets/imagens, importe assim:

   import fotoHero from "../assets/imagens/hero-camisa.png";
   ...
   imagens: { hero: fotoHero }

   Se preferir, jogue a imagem em /public e use apenas "/hero-camisa.png".
*/

export const CONFIG = {
  marca: { a: "IK", b: "RO", sub: "DESIGN" },

  nome: ["ÍCARO", "AUGUSTO"],
  cargo: "GRAPHIC DESIGNER",
  resumo: "Especialista em design esportivo, identidade visual e uniformes.",

  instagram: "https://www.instagram.com/ikrodesign",
  instagramHandle: "@ikrodesign",
  seguidores: "75K",

  whatsapp: "5537988549065", // apenas números, com DDI
  whatsappMsg: "Olá, Ícaro! Vi seu site e quero falar sobre um projeto.",

  email: "contato@ikrodesign.com",
  local: "Ipatinga, MG — Brasil",

  imagens: {
    hero: "",  // PNG sem fundo, ~1200x1400
    sobre: "", // retrato vertical, ~900x1100
  },
};
