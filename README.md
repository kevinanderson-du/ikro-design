# IK·RO DESIGN — Site institucional, portfólio e marketplace

Site de **Ícaro Augusto**, designer especializado em design esportivo, identidade visual e uniformes.
Feito em **React + Vite**, sem dependências extras.

---

## Como rodar

```bash
npm install
npm run dev      # abre em http://localhost:5173
```

Para gerar a versão de produção:

```bash
npm run build    # gera a pasta dist/
npm run preview  # testa a build localmente
```

## Como publicar na Vercel

1. Suba a pasta para um repositório no GitHub.
2. Na Vercel: **Add New > Project** e escolha o repositório.
3. Framework: **Vite** · Build: `npm run build` · Output: `dist`.

---

## Estrutura

```
src/
├── main.jsx                  ponto de entrada (importa os estilos globais)
├── App.jsx                   navegação entre as 5 abas (mesma guia, sem recarregar)
│
├── data/                     ← O QUE VOCÊ MAIS VAI EDITAR
│   ├── config.js             contatos, nome, redes, imagens principais
│   ├── navegacao.js          as abas do menu
│   ├── clientes.js           logos da esteira
│   ├── projetos.js           projetos do portfólio
│   ├── mockups.js            produtos do marketplace
│   └── especialidades.js     especialidades + números animados
│
├── pages/                    uma tela por aba
│   ├── Home.jsx              ✅ pronta (etapa 1)
│   ├── Sobre.jsx             ⏳ etapa 2
│   ├── Portfolio.jsx         ⏳ etapa 3
│   ├── Projeto.jsx           ⏳ página interna de cada projeto
│   ├── Mockups.jsx           ⏳ etapa 4
│   ├── Contato.jsx           ⏳ etapa 5
│   └── EmConstrucao.jsx      tela provisória das abas acima
│
├── sections/                 blocos da home (JSX + CSS lado a lado)
│   ├── Hero
│   ├── EsteiraClientes
│   ├── ProjetosDestaque + CardProjeto
│   ├── SobreTeaser
│   ├── Especialidades
│   ├── MockupsTeaser
│   └── CTA
│
├── components/
│   ├── layout/               Header, Footer
│   └── ui/                   Logo, Eyebrow, Media, Contador, Seta, Icone
│
├── hooks/                    useInView (animação no scroll), useScrolled (header)
├── utils/links.js            monta os links de WhatsApp e e-mail
├── styles/
│   ├── tokens.css            🎨 cores, fontes e medidas — mude aqui
│   ├── base.css              reset, tipografia, utilitários
│   ├── buttons.css           .btn-outline / .btn-solid / .btn-ghost
│   └── marquee.css           as esteiras que andam sozinhas
└── assets/imagens/           coloque as fotos aqui (veja o LEIA-ME.txt)
```

---

## Tarefas mais comuns

**Trocar uma cor:** `src/styles/tokens.css`. O roxo do site inteiro é a variável `--roxo`.

**Trocar o WhatsApp / Instagram / e-mail:** `src/data/config.js`.

**Colocar as fotos:** leia `src/assets/imagens/LEIA-ME.txt`. Enquanto a imagem não existir,
aparece um marcador tracejado com o tamanho recomendado — o layout não quebra.

**Adicionar um projeto:** acrescente um item em `src/data/projetos.js`.
Com `destaque: true`, ele entra na esteira da home automaticamente.

**Velocidade das esteiras:** `src/styles/marquee.css` (`.track-logos` e `.track-cards`).
Quanto maior o tempo em segundos, mais devagar. Passar o mouse pausa.

---

## Navegação

Nada abre em nova guia. A aba atual também vai para o endereço
(`#sobre`, `#portfolio/atletico-mineiro`), então recarregar a página ou compartilhar
o link de uma tela específica funciona, e os botões voltar/avançar do navegador também.

Quando cada aba nova ficar pronta, é só substituir o conteúdo do arquivo
correspondente em `src/pages/` — o resto do site continua igual.

---

## Acessibilidade e performance

- Responsivo: desktop, tablet e celular.
- Foco visível no teclado em todos os botões e links.
- `prefers-reduced-motion` respeitado: quem desliga animações no sistema vê o site parado.
- Imagens com `loading="lazy"`.
