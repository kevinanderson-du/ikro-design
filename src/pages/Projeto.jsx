import { acharProjeto } from "../data/projetos";
import EmConstrucao from "./EmConstrucao";

/* Página interna de um projeto do portfólio (a construir na etapa 3).
   Recebe o id vindo do clique num card da home. */
export default function Projeto({ id, ir }) {
  const projeto = acharProjeto(id);

  return (
    <EmConstrucao
      aba="portfolio"
      ir={ir}
      rotulo="PORTFÓLIO / PROJETO"
      titulo={projeto ? projeto.titulo : "PROJETO NÃO ENCONTRADO"}
    />
  );
}
