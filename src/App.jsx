import { useCallback, useEffect, useRef, useState } from "react";
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

  /* guarda a seção de destino até a tela nova estar montada */
  const ancoraPendente = useRef(null);

  /* espera a tela renderizar antes de rolar */
  const rolarPara = useCallback((ancora) => {
    window.setTimeout(() => {
      const alvo = ancora ? document.getElementById(ancora) : null;
      if (alvo) alvo.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0 });
    }, 80);
  }, []);

  /* botões voltar/avançar do navegador */
  useEffect(() => {
    const aoMudar = () => {
      const atual = lerHash();
      setAba(atual.aba);
      setProjeto(atual.projeto);
      rolarPara(ancoraPendente.current);
      ancoraPendente.current = null;
    };
    window.addEventListener("hashchange", aoMudar);
    return () => window.removeEventListener("hashchange", aoMudar);
  }, [rolarPara]);

  const ir = useCallback(
    (id, ancora = null) => {
      ancoraPendente.current = ancora;
      setProjeto(null);
      setAba(id);

      const novoHash = id === "inicio" ? "" : id;
      const hashAtual = window.location.hash.replace("#", "");

      if (hashAtual === novoHash) {
        rolarPara(ancora);           // já estamos nesta aba: só rola
        ancoraPendente.current = null;
      } else {
        window.location.hash = novoHash; // o hashchange acima faz a rolagem
      }
    },
    [rolarPara]
  );

  const abrirProjeto = useCallback((id) => {
    ancoraPendente.current = null;
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
                return <Portfolio ir={ir} abrirProjeto={abrirProjeto} />;
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
