import { useCallback, useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Portfolio from "./pages/Portfolio";
import Projeto from "./pages/Projeto";
import Mockups from "./pages/Mockups";
import Contato from "./pages/Contato";

/* ==========================================================================
   NAVEGAÇÃO
   O site troca de tela por estado — nada abre em nova guia e a página
   nunca recarrega. A aba atual também vai para o endereço (#sobre,
   #portfolio/atletico-mineiro), então dá para recarregar ou compartilhar
   o link direto de uma tela.
   ========================================================================== */

function lerHash() {
  const bruto = window.location.hash.replace("#", "");
  if (!bruto) return { aba: "inicio", projeto: null };

  const [aba, projeto] = bruto.split("/");
  return { aba: aba || "inicio", projeto: projeto || null };
}

export default function App() {
  const inicial = lerHash();
  const [aba, setAba] = useState(inicial.aba);
  const [projeto, setProjeto] = useState(inicial.projeto);

  /* botões voltar/avançar do navegador */
  useEffect(() => {
    const aoMudar = () => {
      const { aba, projeto } = lerHash();
      setAba(aba);
      setProjeto(projeto);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", aoMudar);
    return () => window.removeEventListener("hashchange", aoMudar);
  }, []);

  const ir = useCallback((id) => {
    setProjeto(null);
    setAba(id);
    window.location.hash = id === "inicio" ? "" : id;
    window.scrollTo({ top: 0 });
  }, []);

  const abrirProjeto = useCallback((id) => {
    setProjeto(id);
    setAba("portfolio");
    window.location.hash = `portfolio/${id}`;
    window.scrollTo({ top: 0 });
  }, []);

  const renderizarTela = () => {
    if (aba === "portfolio" && projeto) return <Projeto id={projeto} ir={ir} />;

    switch (aba) {
      case "sobre":
        return <Sobre ir={ir} />;
      case "portfolio":
        return <Portfolio ir={ir} />;
      case "mockups":
        return <Mockups ir={ir} />;
      case "contato":
        return <Contato ir={ir} />;
      default:
        return <Home ir={ir} abrirProjeto={abrirProjeto} />;
    }
  };

  return (
    <>
      <Header aba={aba} ir={ir} />
      <main>{renderizarTela()}</main>
      <Footer ir={ir} />
    </>
  );
}
