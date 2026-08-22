import { useState } from "react";
import { CONFIG } from "../data/config";
import { linkWhatsapp, linkEmail } from "../utils/links";
import Icone from "../components/ui/Icone";
import Mira from "../components/ui/Mira";
import Seta from "../components/ui/Seta";
import "./Contato.css";

/* Opções do campo "tipo de projeto" — edite à vontade */
const TIPOS = [
  "Design de uniforme",
  "Identidade visual / branding",
  "Mockups & 3D",
  "Direção criativa",
  "Outro",
];

const VAZIO = {
  nome: "",
  email: "",
  empresa: "",
  tipo: "",
  prazo: "",
  orcamento: "",
  mensagem: "",
};

/* ETAPA 5 — CONTATO */
export default function Contato() {
  const [form, setForm] = useState(VAZIO);
  const [erro, setErro] = useState("");

  const mudar = (campo) => (e) => {
    setForm({ ...form, [campo]: e.target.value });
    if (erro) setErro("");
  };

  /* monta a mensagem e abre o WhatsApp com tudo preenchido */
  const enviar = () => {
    if (!form.nome.trim() || !form.mensagem.trim()) {
      setErro("Preencha pelo menos o nome e a descrição do projeto.");
      return;
    }

    const linhas = [
      `Olá, Ícaro! Meu nome é ${form.nome.trim()}.`,
      "",
      form.empresa && `Empresa/marca: ${form.empresa}`,
      form.tipo && `Tipo de projeto: ${form.tipo}`,
      form.prazo && `Prazo: ${form.prazo}`,
      form.orcamento && `Orçamento estimado: ${form.orcamento}`,
      form.email && `E-mail: ${form.email}`,
      "",
      "Sobre o projeto:",
      form.mensagem.trim(),
    ].filter((l) => l !== undefined && l !== false && l !== null);

    window.open(linkWhatsapp(linhas.join("\n")), "_blank", "noopener");
  };

  const CONTATOS = [
    { icone: "email", rotulo: "E-MAIL", valor: CONFIG.email, href: linkEmail("Contato pelo site") },
    { icone: "whatsapp", rotulo: "WHATSAPP", valor: "+55 31 98733-3829", href: linkWhatsapp() },
    { icone: "instagram", rotulo: "INSTAGRAM", valor: CONFIG.instagramHandle, href: CONFIG.instagram },
    { icone: "local", rotulo: "BASED IN", valor: CONFIG.local },
  ];

  return (
    <section className="ctt">
      <div className="ctt-glow" aria-hidden="true" />

      <div className="wrap ctt-in">
        {/* ------------------------------ chamada ------------------------------ */}
        <div className="ctt-chamada">
          <div className="ctt-marcador mono">
            <span className="ctt-marcador-num">05</span> / CONTATO
          </div>

          <h1 className="ctt-titulo">
            VAMOS CRIAR
            <br />
            ALGO INCRÍVEL
            <br />
            <span className="ctt-titulo-roxo">JUNTOS.</span>
          </h1>

          <span className="ctt-mira" aria-hidden="true">
            <Mira size={20} />
          </span>

          <ul className="ctt-palavras mono">
            {["FOCO", "ESTRATÉGIA", "CRIATIVIDADE", "DESIGN", "IMPACTO"].map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        {/* ----------------------------- formulário ---------------------------- */}
        <div className="ctt-form">
          <h2 className="ctt-h2 mono">
            <span className="ctt-dot" aria-hidden="true" />
            SOLICITE UM ORÇAMENTO
          </h2>
          <p className="ctt-ajuda">
            Preencha os campos abaixo. Ao enviar, abre o WhatsApp com tudo escrito — é só apertar
            enviar.
          </p>

          <div className="ctt-campos">
            <input className="ctt-campo" placeholder="NOME" value={form.nome} onChange={mudar("nome")} />
            <input className="ctt-campo" type="email" placeholder="E-MAIL" value={form.email} onChange={mudar("email")} />

            <input
              className="ctt-campo ctt-largo"
              placeholder="EMPRESA / MARCA"
              value={form.empresa}
              onChange={mudar("empresa")}
            />

            <div className="ctt-select">
              <select className="ctt-campo" value={form.tipo} onChange={mudar("tipo")}>
                <option value="">TIPO DE PROJETO</option>
                {TIPOS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>

            <input className="ctt-campo" placeholder="PRAZO" value={form.prazo} onChange={mudar("prazo")} />

            <input
              className="ctt-campo ctt-largo"
              placeholder="ORÇAMENTO ESTIMADO"
              value={form.orcamento}
              onChange={mudar("orcamento")}
            />

            <textarea
              className="ctt-campo ctt-largo ctt-area"
              rows={5}
              placeholder="CONTE MAIS SOBRE O PROJETO"
              value={form.mensagem}
              onChange={mudar("mensagem")}
            />
          </div>

          {erro && <p className="ctt-erro mono">{erro}</p>}

          <button className="btn btn-solid btn-redondo ctt-enviar" onClick={enviar}>
            ENVIAR PELO WHATSAPP <Seta />
          </button>
        </div>

        {/* ------------------------------ contatos ----------------------------- */}
        <div className="ctt-outros">
          <h2 className="ctt-h2 mono">
            <span className="ctt-dot" aria-hidden="true" />
            OUTRAS FORMAS DE CONTATO
          </h2>

          <ul className="ctt-lista">
            {CONTATOS.map((c) => {
              const conteudo = (
                <>
                  <span className="ctt-ico">
                    <Icone tipo={c.icone} size={19} />
                  </span>
                  <span className="ctt-txt">
                    <span className="ctt-rotulo mono">{c.rotulo}</span>
                    <span className="ctt-valor">{c.valor}</span>
                  </span>
                </>
              );

              return (
                <li key={c.rotulo}>
                  {c.href ? (
                    <a
                      className="ctt-linha ctt-clicavel"
                      href={c.href}
                      target={c.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noreferrer"
                    >
                      {conteudo}
                    </a>
                  ) : (
                    <div className="ctt-linha">{conteudo}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
