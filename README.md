# ⚡ VANDAL LAB — Gerador de Graffiti, Pixo & Letter Science

> Projeto acadêmico de Design, Interatividade Web e Arte Urbana construído com **HTML5**, **CSS3 (Vanilla)** e **JavaScript Puro**, inspirado na metodologia de _Letter Science_ do site [joshgrafx.com](https://joshgrafx.com).

---

## 🎨 O que o projeto faz?

O **VANDAL LAB** permite que qualquer pessoa digite seu nome, apelido ou vulgo de rua e gere instantaneamente tags estilizadas de graffiti e pixação, além de receber uma **análise científica estrutural das letras**:

1. **Renderização Gráfica em Tempo Real (Canvas 2D Engine)**:
   - **⚡ Muro SP**: Autêntica pixação das ruas de São Paulo ([dafont.com/pt/muro-sp.font](https://www.dafont.com/pt/muro-sp.font)).
   - **💥 Vandal Blow**: Wildstyle agressivo com cortes e arestas cortantes ([dafont.com/pt/vandal-blow-graffiti.font](https://www.dafont.com/pt/vandal-blow-graffiti.font)).
   - **🔥 Next Ups**: Caligrafia rápida estilo canetão de feltro com dinamismo e fluxo ([dafont.com/pt/next-ups.font](https://www.dafont.com/pt/next-ups.font)).
   - **💧 Splatink**: Efeito de tinta espirrada com gotas e manchas urbanas ([dafont.com/pt/splatink-2.font](https://www.dafont.com/pt/splatink-2.font)).
   - **💣 Throw Up Font**: Estilo tradicional de letras bolha/balão de bombing nova-iorquino ([dafont.com/pt/throw-up-font.font](https://www.dafont.com/pt/throw-up-font.font)).
   - **👑 Don Graffiti**: Peça clássica de hip-hop com preenchimento e extrusão 3D ([dafont.com/pt/don-graffiti.font](https://www.dafont.com/pt/don-graffiti.font)).

2. **Adereços & Customização Urbana**:
   - Elementos clássicos: 👑 Coroa, 😇 Auréola, ➜ Seta de fluxo, " " Aspas de ênfase, ━ Underline dinâmico e '26 Marcador de ano.
   - Presets de cores de latas de spray (Chrome Silver, Neon Mint, Cyber Fuchsia, Acid Green, Hazard Yellow, etc.) e seletores hexadecimais livres.
   - Muros texturizados: **Tijolo Escuro**, **Concreto Urbano**, **Metrô Subterrâneo** e **Fundo Limpo/Transparente** (para gerar stickers).

3. **Interatividade "Grafitar no Muro"**:
   - Clique e arraste o mouse sobre o muro para espirrar tinta spray livremente com partículas realistas de aerossol e sintetizador de som procedural via **Web Audio API** (sem arquivos externos de áudio!).

4. **Ciência da Letra (Letter Science) — Inspirado no Joshgrafx**:
   - **Score da Tag (0 a 100)** e Tiering (Tier S, Tier A+, Tier B, Tier C).
   - **Diagnóstico Técnico**: Fluidez de Traço (_Flow_), Velocidade de Execução (_Street Speed_), Distribuição de Peso (_Weight Balance_) e Controle de Espaço Vazio (_Negative Space_).
   - **Análise Letra por Letra**: Detalhamento morfológico de cada caractere (letras âncoras, assimetrias, buracos de espaço negativo e dicas de compensação gráfica).

5. **Exportação**:
   - Botão **"Sticker PNG"**: Exporta apenas a tag com transparência total.
   - Botão **"Baixar Muro HD"**: Exporta a cena completa em alta resolução.

---

## 📁 Estrutura de Arquivos

```text
gitpages/
├── index.html        # Estrutura semântica, layout responsivo e acessibilidade
├── css/
│   └── style.css     # Design system dark underground, @font-face e cores neon
├── js/
│   └── script.js     # Motor Canvas 2D, algoritmo Letter Science, sintetizador e eventos
├── fonts/            # Fontes de graffiti do DaFont (Most Wasted, Dripping Drops, etc.)
└── README.md         # Documentação e guia de apresentação
```

---

## 🚀 Como Executar

Por ser um projeto puramente **Front-end (Vanilla)**, não requer Node.js nem instalação de dependências:

1. **Opção 1 (Direto no Navegador)**:
   - Dê um duplo clique no arquivo `index.html`.

2. **Opção 2 (Com servidor local)**:
   - Abra o terminal na pasta e execute:
     ```bash
     python -m http.server 8080
     ```
   - Acesse no navegador: `http://localhost:8080`

---

## 🎓 Destaques Técnicos para Apresentação na Aula

- **Zero Dependências**: Não utiliza bibliotecas externas pesadas; todo o desenho e a matemática foram construídos do zero em Canvas 2D.
- **Web Audio API**: Geração de som senoidal e ruído branco em tempo real simulando o som da esfera da lata de spray (_marble clack_) e o spray saindo pela válvula.
- **Algoritmo de Análise Morfológica**: Avaliação estrutural com base em dados de tipografia urbana internacional e nacional (pixo paulista).
