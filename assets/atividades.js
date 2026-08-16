/* ==========================================================================
   microbit.monco.io — índice de atividades
   --------------------------------------------------------------------------
   ESTE É O ÚNICO FICHEIRO A EDITAR PARA ADICIONAR UMA ATIVIDADE AO CATÁLOGO.

   Copia o bloco EXEMPLO no fim, preenche, e coloca-o no topo do array.
   A ordem do array é a ordem no catálogo. O número (nº de série) é gerado
   automaticamente a partir do campo "serie".
   ========================================================================== */

const ATIVIDADES = [

  {
    serie:      "007",
    slug:       "codigo-morse",
    ficheiro:   "atividades/codigo-morse.html",
    titulo:     "Código Morse",
    subtitulo:  "Uma mensagem à distância",
    resumo:     "Um micro:bit emissor, outro recetor. A frase mora no ritmo de quem carrega nos botões, e só chega inteira se o par de longe souber ouvir as pausas certas.",
    duracao:    "1h20",
    grupo:      "Grupos de 4, pares de 2",
    idade:      "8+",
    aparelhos:  "2 × micro:bit V2 por grupo",
    cor:        "#C4291B",
    cor2:       "#1B1B3A",
    tags:       ["rádio", "som", "codificação", "movimento", "iniciação"],
    aprende:    ["Codificação e decodificação", "Ritmo como informação", "Papéis diferentes, um protocolo"],
    estado:     "publicada",
    atualizada: "2026-08"
  }

  ,{
    serie:      "002",
    slug:       "semaforo-humano",
    ficheiro:   "atividades/semaforo-humano.html",
    titulo:     "Semáforo humano",
    subtitulo:  "Retransmitir um sinal",
    resumo:     "Sem sensores, só rádio. Um sinal passa de aparelho em aparelho numa fila, e o grupo mede quanto tempo demora a chegar ao fim.",
    duracao:    "55min",
    grupo:      "8–14 participantes",
    idade:      "8+",
    aparelhos:  "8–14 × micro:bit V2",
    cor:        "#2AC46B",
    cor2:       "#C4291B",
    tags:       ["rádio", "sistemas distribuídos", "movimento", "iniciação"],
    aprende:    ["Retransmissão em cadeia", "Atraso acumulado", "Sistemas sem coordenador central"],
    estado:     "publicada",
    atualizada: "2026-08"
  }

  ,{
    serie:      "003",
    slug:       "gradiente",
    ficheiro:   "atividades/gradiente.html",
    titulo:     "Gradiente",
    subtitulo:  "Uma fila sem falar",
    resumo:     "Cada micro:bit mede a luz e mostra um número. Sem dizer uma palavra, o grupo forma uma fila do mais escuro ao mais claro.",
    duracao:    "1h10",
    grupo:      "8–14 participantes",
    idade:      "8+",
    aparelhos:  "8–14 × micro:bit V2",
    cor:        "#E8A72A",
    cor2:       "#1B39C4",
    tags:       ["luz", "sensores", "calibração", "movimento", "iniciação"],
    aprende:    ["Leitura de sensores", "Limiar como escolha", "Calibração"],
    estado:     "publicada",
    atualizada: "2026-08"
  }

  ,{
    serie:      "004",
    slug:       "passo",
    ficheiro:   "atividades/passo.html",
    titulo:     "Passo",
    subtitulo:  "O limiar do teu corpo",
    resumo:     "O acelerómetro conta passos e saltos. Cada equipa descobre que o mesmo limiar não serve para dois corpos diferentes.",
    duracao:    "1h10",
    grupo:      "8–16 participantes",
    idade:      "8+",
    aparelhos:  "1 × micro:bit V2 por pessoa",
    cor:        "#2AAE4B",
    cor2:       "#C41B6E",
    tags:       ["acelerómetro", "sensores", "movimento", "iniciação"],
    aprende:    ["Acelerómetro", "Falsos positivos e negativos", "Limiares"],
    estado:     "publicada",
    atualizada: "2026-08"
  }

  ,{
    serie:      "005",
    slug:       "bussola",
    ficheiro:   "atividades/bussola.html",
    titulo:     "Bússola",
    subtitulo:  "Todos a apontar ao mesmo sítio",
    resumo:     "Sem rádio. Cada micro:bit lê o seu rumo e diz se está alinhado. O grupo gira até formar uma roseta de bússolas.",
    duracao:    "1h15",
    grupo:      "6–10 participantes",
    idade:      "8+",
    aparelhos:  "6–10 × micro:bit V2",
    cor:        "#E8B92A",
    cor2:       "#145C7A",
    tags:       ["magnetómetro", "sensores", "movimento", "iniciação"],
    aprende:    ["Magnetómetro", "Ângulos e wraparound", "Tolerância"],
    estado:     "publicada",
    atualizada: "2026-08"
  }

  ,{
    serie:      "006",
    slug:       "volume",
    ficheiro:   "atividades/volume.html",
    titulo:     "Volume",
    subtitulo:  "O jogo do silêncio",
    resumo:     "O microfone decide o que conta como grito ou sussurro. O grupo tenta cumprir uma tarefa sem deixar nenhum ecrã ficar zangado.",
    duracao:    "1h05",
    grupo:      "8–14 participantes",
    idade:      "8+",
    aparelhos:  "8–14 × micro:bit V2",
    cor:        "#1BC49E",
    cor2:       "#C41B3A",
    tags:       ["som", "sensores", "movimento", "iniciação"],
    aprende:    ["Microfone", "Ruído de fundo", "Limiares relativos"],
    estado:     "publicada",
    atualizada: "2026-08"
  }

  ,{
    serie:      "001",
    slug:       "sintonia",
    ficheiro:   "atividades/sintonia.html",
    titulo:     "Sintonia",
    subtitulo:  "Acordes em rede",
    resumo:     "Dez micro:bits, cada um com duas notas. O acorde não vive dentro de nenhum deles — aparece no espaço entre três pessoas que se aproximam ao mesmo tempo.",
    duracao:    "2h30",
    grupo:      "10–20 participantes",
    idade:      "10+",
    aparelhos:  "10 × micro:bit V2",
    cor:        "#E8442A",
    cor2:       "#1B39C4",
    tags:       ["som", "rádio", "sistemas distribuídos", "movimento"],
    aprende:    ["Frequência e altura", "Acorde como razão", "Rádio e RSSI", "Decisão local, efeito global"],
    estado:     "publicada",
    atualizada: "2026-08"
  }

  /* ---------- EXEMPLO — copiar, descomentar, preencher ----------
  ,{
    serie:      "002",
    slug:       "nome-curto-sem-acentos",
    ficheiro:   "atividades/nome-curto-sem-acentos.html",
    titulo:     "Título curto",
    subtitulo:  "Uma linha que diz o que é",
    resumo:     "Duas ou três frases. Começa pelo que acontece na sala, não pela tecnologia.",
    duracao:    "1h30",
    grupo:      "8–16 participantes",
    idade:      "8+",
    aparelhos:  "8 × micro:bit V2",
    cor:        "#1B39C4",          // acento principal
    cor2:       "#E8442A",          // acento secundário
    tags:       ["sensores", "dados"],
    aprende:    ["Conceito 1", "Conceito 2", "Conceito 3"],
    estado:     "rascunho",         // "publicada" | "rascunho"
    atualizada: "2026-09"
  }
  ---------------------------------------------------------------- */

];

/* Não editar abaixo desta linha. */
if (typeof module !== "undefined") { module.exports = ATIVIDADES; }
