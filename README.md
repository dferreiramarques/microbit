# microbit.monco.io

Catálogo de atividades práticas com micro:bit. Site estático, sem build, sem dependências. Abre-se em `file://` ou serve-se em GitHub Pages tal como está.

---

## Estrutura

```
.
├── CNAME                        domínio personalizado
├── index.html                   catálogo (capa do portfólio)
├── assets/
│   ├── base.css                 sistema de design partilhado
│   └── atividades.js            ÍNDICE DE DADOS — o ficheiro a editar
├── atividades/
│   └── sintonia.html            atividade 001
├── modelo/
│   └── _modelo-atividade.html   esqueleto para novas atividades
├── PROMPT.md                    prompt de continuidade para IA
└── README.md
```

Regra de ouro: **`base.css` nunca é editado por causa de uma atividade.** Se uma atividade precisa de um estilo, esse estilo vive no `<style>` da própria página. Se três atividades precisarem do mesmo, aí sim sobe para o `base.css`.

Toda a atividade tem, obrigatoriamente, uma secção **Guião do dinamizador** a seguir ao código — o mesmo programa desmontado em três a seis passos curtos, para quem vai dar a sessão ler antes e apontar durante. O código é sempre entregue completo; as equipas só editam os pontos assinalados como `edit`. Ver `PROMPT.md` para as regras exatas.

---

## Adicionar uma atividade em 3 passos

**1 · Copiar o modelo**

```bash
cp modelo/_modelo-atividade.html atividades/nome-da-atividade.html
```

O modelo tem dez secções numeradas em comentários. Preenche as que fizerem sentido e apaga as outras — nenhuma é obrigatória a não ser a abertura, a sessão e o código.

**2 · Registar no índice**

Abrir `assets/atividades.js` e copiar o bloco `EXEMPLO` do fim para o topo do array. A ordem do array é a ordem no catálogo.

**3 · Verificar**

Abrir o `index.html` no browser. A atividade aparece na lista, os filtros por tema atualizam-se sozinhos, o contador de publicadas também. Nada mais a fazer.

Para publicar um rascunho já visível mas ainda não navegável, pôr `estado: "rascunho"` — aparece esbatido, com a etiqueta *em preparação* e sem ligação.

---

## Campos do índice

| Campo | Tipo | Para que serve |
|---|---|---|
| `serie` | texto `"001"` | Número de série, mostrado na lista |
| `slug` | texto | Nome curto sem acentos nem espaços |
| `ficheiro` | caminho | Relativo à raiz, ex. `atividades/sintonia.html` |
| `titulo` | texto | Uma ou duas palavras |
| `subtitulo` | texto | Linha curta em maiúsculas pequenas, na cor da atividade |
| `resumo` | texto | 2–3 frases. Começa pelo que acontece na sala |
| `duracao` | texto | `"2h30"` |
| `grupo` | texto | `"10–20 participantes"` |
| `idade` | texto | `"10+"` |
| `aparelhos` | texto | `"10 × micro:bit V2"` |
| `cor` | hex | Acento principal — barra lateral e subtítulo no catálogo |
| `cor2` | hex | Acento secundário |
| `tags` | lista | Alimentam os filtros automaticamente. Minúsculas |
| `aprende` | lista | Conceitos-chave (reservado para uso futuro no catálogo) |
| `estado` | `"publicada"` / `"rascunho"` | Controla visibilidade e ligação |
| `atualizada` | `"2026-08"` | Referência interna |

---

## Sistema de design

**Cores** — definidas em `:root` no `base.css`.

| Token | Valor | Uso |
|---|---|---|
| `--paper` | `#EAEAE4` | Fundo |
| `--paper-2` | `#E1E1D9` | Fundo de componentes |
| `--ink` | `#17171A` | Texto, molduras, barras |
| `--muted` | `#7C7C74` | Texto secundário |
| `--rule` | `#C9C9C0` | Linhas finas |
| `--accent` | por atividade | Acento principal |
| `--accent-2` | por atividade | Acento secundário |
| `--lock` | `#F2C230` | Estado de sucesso / momento em que algo encaixa |

Cada página de atividade define os seus acentos numa linha:

```css
body{--accent:#E8442A;--accent-2:#1B39C4}
```

**Tipografia** — Bricolage Grotesque para títulos (`--disp`), Instrument Sans para texto (`--body`), DM Mono para números, tempos, frequências e etiquetas (`--mono`). Tudo o que é medida ou dado técnico vai a mono; é isso que dá o ar de caderno de laboratório.

**Regra estrutural** — cada secção é separada por uma linha preta de 2px a toda a largura. A primeira secção leva `class="first"` para não ter linha por cima.

**Componentes prontos** em `base.css`: `.eyebrow`, `.lede`, `.cols`/`.card`, `table`, `.tl` (cronograma), `.codebar`/`pre`, `.script`/`.step`/`.badge` (guião do dinamizador), `ul.clean`, `.tag`, `.btn`, `.topbar`, `footer`.

---

## Publicar no GitHub Pages

1. Repositório público, ficheiros na raiz do ramo principal.
2. Settings → Pages → Source: *Deploy from a branch*, ramo `main`, pasta `/`.
3. `CNAME` já contém `microbit.monco.io`.
4. No DNS do domínio `monco.io`, criar um registo **CNAME** com o nome `microbit` a apontar para `<utilizador>.github.io.`
5. Voltar a Settings → Pages e ativar *Enforce HTTPS* assim que o certificado for emitido (pode demorar até 24h).

---

## Notas técnicas de conteúdo

- Todo o código de exemplo é **TypeScript do MakeCode**, escrito só com construções que convertem para blocos: sem `return` a meio de funções, sem operadores ternários, sem `while`, sem classes, sem funções anónimas fora dos blocos de evento.
- As atividades assumem **micro:bit V2** por causa do altifalante e do microfone integrados. Quando uma atividade funcionar em V1, dizê-lo explicitamente na tabela de materiais.
- Os simuladores usam **Web Audio API** criada só ao primeiro clique, para respeitar as políticas de autoplay dos browsers.
- Sem `localStorage`, sem cookies, sem analítica. As páginas não guardam nada.
