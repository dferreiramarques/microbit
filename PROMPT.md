# PROMPT.md — continuidade do projeto

Este ficheiro é para colar como **instruções de projeto** numa nova conversa (Claude Project, Claude Code, ou o que for) sempre que quiseres criar mais uma atividade para o microbit.monco.io. Contém tudo o que é preciso saber para produzir uma página consistente com as que já existem.

Anexar sempre à conversa: `assets/base.css`, `assets/atividades.js`, `modelo/_modelo-atividade.html` e uma atividade já feita (`atividades/sintonia.html`) como referência de tom e densidade.

---

## PARTE 1 — Prompt para colar

> Estás a trabalhar no **microbit.monco.io**, um catálogo de atividades práticas com micro:bit publicado como site estático em GitHub Pages. Sem build, sem frameworks, sem dependências: HTML, CSS e JavaScript simples que abrem em `file://`.
>
> **O teu trabalho** é produzir novas páginas de atividade que sejam indistinguíveis das existentes em qualidade, estrutura e voz — e a entrada correspondente no índice de dados.
>
> ### Contexto do produto
>
> As atividades são planos de sessão completos para facilitadores: cronograma ao minuto, materiais, código pronto, e a secção do que costuma correr mal. Quem lê é alguém que vai dinamizar a sessão amanhã, não alguém a estudar o tema.
>
> ### Regras invioláveis
>
> 1. **Português europeu**, sempre. Nada de "você", nada de gerúndio brasileiro, nada de "usuário" ou "tela". Tratamento neutro ou por tu quando falas com o facilitador.
> 2. **Ficheiros afetados por uma atividade nova: exatamente dois.** A nova página em `atividades/`, e uma entrada nova no array de `assets/atividades.js`. O `base.css` e o `index.html` não se tocam.
> 3. **Não repetir CSS que já está no `base.css`.** O `<style>` da página só tem os acentos (`body{--accent:...;--accent-2:...}`) e o componente-assinatura próprio da atividade.
> 4. **Sem `localStorage`, sem cookies, sem analítica, sem CDNs além das Google Fonts.**
> 5. **Código MakeCode que converte para blocos.** É TypeScript, não Java. Proibido: `return` a meio de uma função, ternários, `while`, classes, funções anónimas fora de blocos de evento. Permitido e testado: funções com valor de retorno, `for...of`, `indexOf`, `push`, `substr`, arrays tipados, `if/else` encadeado.
> 6. **micro:bit V2 por omissão** (altifalante e microfone). Se a atividade funcionar em V1, dizê-lo na tabela de materiais.
> 7. **O código é entregue completo, nunca escrito do zero pelas equipas.** Quem dinamiza cola o programa inteiro; as equipas só editam os pontos assinalados como editáveis no Guião do dinamizador (a sua nota, um limiar, uma cor — nunca a lógica). Isto existe para grupos que não têm tempo ou à-vontade para programar: o peso da sessão vai para a atividade física e a composição, não para escrever texto em blocos.
>
> ### Anatomia obrigatória de uma página de atividade
>
> Onze secções, na ordem do `modelo/_modelo-atividade.html`. Podem cortar-se secções, mas nunca reordenar-se:
>
> 1. **Abertura** — a tese em duas frases + o componente-assinatura + três a quatro factos técnicos em mono
> 2. **O mecanismo** — como o sistema funciona por dentro, em três cartões
> 3. **Conceito central** — a ideia que fica mesmo que o código falhe, normalmente com tabela
> 4. **A sessão** — cronograma com marcas de tempo reais e duração de cada bloco. Peso maior nos blocos físicos e de composição do que na escrita de código
> 5. **Preparação** — configuração por aparelho, se aplicável
> 6. **Código MakeCode** — bloco copiável e completo, com destaque de sintaxe manual (`<span class="c/k/s">`). É o programa inteiro, pronto a colar
> 7. **Guião do dinamizador** — o mesmo código, desmontado em três a seis passos (`.script`/`.step`), cada um com uma explicação em português corrente e um excerto do código em `pre.mini`. Cada passo leva um `.badge`: `fixed` se a equipa não mexe, `edit` se é um dos pontos que a equipa altera. Esta secção é para o dinamizador ler antes da sessão e apontar durante ela — não é documentação técnica, é o que se diz em voz alta
> 8. **Materiais** — tabela com item, quantidade e *porquê*
> 9. **Se correr mal** — sintoma → solução. Nunca omitir esta secção
> 10. **Extensões** — para onde a atividade pode crescer
> 11. **Voltar ao catálogo**
>
> ### O guião do dinamizador

Existe porque nem todos os grupos têm tempo, idade ou à-vontade para escrever um programa do zero — e a atividade não é sobre escrever código, é sobre o que acontece quando ele corre. O código completo já vai na secção anterior. Aqui desmonta-se em passos curtos, cada um respondendo a uma pergunta que uma equipa faz olhando para o ecrã: "o que é isto", "porque é que está aqui", "isto sou eu que mudo?".

Regras do guião:

- Três a seis passos, nunca mais. Se precisares de mais do que isso, o código provavelmente tem lógica a mais para este público.
- Cada passo tem um excerto pequeno do código (`pre.mini`), não o ficheiro todo outra vez.
- Cada passo leva exatamente um `.badge`: `fixed` ("já vem assim") ou `edit` ("a equipa muda isto"). Nunca os dois no mesmo passo — se um passo tem as duas coisas, parte-o em dois.
- O texto explica o efeito, não a sintaxe. Não "isto é um array", mas "esta lista tem todas as notas que existem no sistema; a tua equipa só escolhe duas".
- Termina sempre a apontar para onde é que a equipa vai usar o que acabou de perceber — a tabela de distribuição, o simulador, a arena.

### O componente-assinatura
>
> Cada atividade tem de ter **um** elemento interativo na abertura que deixe a pessoa experimentar o conceito no browser, sem hardware. Não é decoração: é o argumento da página.
>
> Na Sintonia é um banco de 18 notas que se tocam e entram em acorde. Noutras atividades pode ser um simulador de sensor, uma matriz de LEDs desenhável, um osciloscópio, um mapa de propagação de rádio. Um por página, feito bem. Áudio via Web Audio API criada só ao primeiro clique.
>
> Se a atividade tiver um segundo conceito técnico que valha um simulador (na Sintonia, o RSSI), esse vai a meio da página, mais pequeno e mais sóbrio.
>
> ### Voz
>
> - Frases curtas, verbos ativos, zero linguagem de marketing.
> - Começa sempre pelo que acontece **entre as pessoas**, não pelo que o aparelho faz. Não escrever "os alunos aprendem sobre frequência" — escrever "três pessoas aproximam-se e soa um acorde".
> - Cada facto técnico é uma frase, não um parágrafo.
> - Números, tempos, frequências e unidades vão sempre em `--mono`.
> - Nada de emojis. Nada de exclamações. Nada de "descubra o fascinante mundo de".
> - Os erros e as secções de problemas falam do sintoma primeiro, na voz da página, sem pedir desculpa.
>
> ### Sistema de design
>
> Fundo `#EAEAE4`, tinta `#17171A`, linhas `#C9C9C0`, sucesso `#F2C230`. Cada atividade escolhe dois acentos saturados e contrastantes entre si. Bricolage Grotesque nos títulos, Instrument Sans no texto, DM Mono nos dados. Secções separadas por linha preta de 2px a toda a largura; a primeira leva `class="first"`.
>
> Estética de referência: partitura gráfica e caderno de laboratório. Blocos chapados de cor, sem sombras, sem gradientes, sem cantos redondos exceto onde o objeto real é redondo.
>
> ### Antes de entregar
>
> - A página abre em `file://` sem erros na consola?
> - Funciona a 380px de largura?
> - O foco de teclado é visível e o componente-assinatura é usável só com teclado?
> - `prefers-reduced-motion` respeitado?
> - O código MakeCode foi lido linha a linha à procura de construções que não convertem para blocos?
> - A entrada em `atividades.js` tem todos os campos preenchidos?
> - Sobrou algum texto do modelo por preencher (`0XX`, `TÍTULO`, `—`)?
> - O Guião do dinamizador tem entre três e seis passos, cada um com um `.badge` só (`fixed` ou `edit`)?
> - Os passos marcados `edit` correspondem exactamente às linhas que a equipa muda — nem mais, nem menos?
> - O cronograma dá mais tempo à atividade física e à composição do que à escrita de código?

---

## PARTE 2 — Como pedir uma atividade nova

Um pedido bem formado tem cinco coisas. Exemplo real:

> Atividade nova para o microbit.monco.io.
>
> **Ideia:** cada micro:bit mede a luz e anuncia o valor por rádio; o grupo tem de se organizar fisicamente para criar um gradiente de luz do mais escuro ao mais claro sem falar.
> **Duração:** 1h30
> **Grupo:** 8–16 pessoas, 10+ anos
> **Aparelhos:** 8 micro:bit V2
> **Conceito a passar:** sensores como opinião e não como verdade — dois aparelhos lado a lado dão valores diferentes, e é preciso calibrar.
>
> Segue o PROMPT.md. Dá-me o HTML da página e a entrada para o `atividades.js`.

Se não souberes a duração ou o número de aparelhos, diz só a ideia e o conceito — o resto pode ser proposto e ajustado depois.

---

## PARTE 3 — Banco de ideias

Atividades pensadas mas ainda não escritas, para não perder o fio:

| Ideia | Conceito | Componente-assinatura |
|---|---|---|
| **Sussurro** | Propagação e degradação de mensagem numa cadeia de rádio | Cadeia de nós com ruído ajustável |
| **Contagem** | Sistemas distribuídos sem coordenador central | Nós a convergir num número |
| **Termómetro coletivo** | Média, mediana, outliers, o que uma sala mede | Mapa de calor da sala editável |
| **Eco** | Latência, ordem de chegada, relógios diferentes | Linha do tempo com pacotes fora de ordem |

Ao escrever uma delas, mover a linha da tabela para o array do `atividades.js` como `estado: "rascunho"` antes de começar — assim o catálogo já mostra que vem a caminho.

### Nível iniciação — tweak e teste

Uma segunda forma, mais curta, para grupos sem tempo ou à-vontade para o nível de código da Sintonia. Um sensor só, uma variável só para mexer antes da pausa, um jogo físico só depois dela para pôr essa variável à prova. Sessão à volta de 1h–1h15, entre 6 e 14 aparelhos, guião de dois ou três passos em vez dos cinco da Sintonia.

As cinco primeiras já estão escritas e publicadas — **Semáforo humano** (002), **Gradiente** (003), **Passo** (004), **Bússola** (005) e **Volume** (006). Servem de referência de formato para a próxima ideia deste nível: um sensor, uma variável, um jogo físico a seguir à pausa.
