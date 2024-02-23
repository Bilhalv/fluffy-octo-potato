import { NPC } from "../constructors/NPC";

const TrabalhoDuro: NPC[] = [
  {
    nome: "Estátua Animada",
    categoria: "Construto",
    tamanho: "Médio",
    pv: 70,
    iniciativa: 2,
    percepcao: 4,
    defesa: 19,
    fortitude: 13,
    reflexos: 2,
    vontade: 7,
    resistencias: "Nenhuma",
    deslocamento: 6,
    ataques: [
      {
        nome: "Pancada",
        acerto: 12,
        dano: [
          {
            dados: 2,
            lados: 6,
            bonus: 11,
          },
        ],
        crit: "20x2",
      },
    ],
    nd: 2,
    pericias: [],
    tesouro: "Nenhum",
    atributos: [
      {
        nome: "Força",
        valor: 4,
      },
      {
        nome: "Destreza",
        valor: -1,
      },
      {
        nome: "Constituição",
        valor: 4,
      },
      {
        nome: "Inteligência",
        valor: -10,
      },
      {
        nome: "Sabedoria",
        valor: 0,
      },
      {
        nome: "Carisma",
        valor: -4,
      },
    ],
    img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272732186039215.png",
    poderes: [
      {
        nome: "Golpe Atordoante",
        desc: "Uma criatura que sofra dano da pancada da estátua animada fica atordoada (Fort CD 17 evita). Uma criatura só pode ser atordoada por essa habilidade uma vez por cena",
        acao: "Livre",
      },
    ],
  },
  {
    nome: "Stagh",
    categoria: "Espírito",
    tamanho: "Pequeno",
    tipo: "elemental",
    pv: 35,
    iniciativa: 6,
    percepcao: 4,
    defesa: 22,
    fortitude: 7,
    reflexos: 12,
    vontade: 4,
    resistencias:
      "Imunidade a acertos críticos e atordoamento, cansaço, frio, metabolismo e paralisia, vulnerabilidade a fogo",
    deslocamento: 9,
    ataques: [
      {
        nome: "Duas Garras",
        acerto: 16,
        dano: [
          {
            dados: 1,
            lados: 6,
            bonus: 4,
          },
          {
            dados: 1,
            lados: 6,
            bonus: 0,
            tipo: "Frio",
          },
        ],
        crit: "20x2",
      },
    ],
    nd: 3,
    tesouro:
      "Tesouro 1 dose de éter elemental (frio) (CD 19 para extrair; você pode gastar uma ação padrão para aplicar esse éter em uma arma ou munição, que causará +1d4 pontos de dano de frio até o fim da cena; preço T$ 60).",
    atributos: [
      {
        nome: "Força",
        valor: 2,
      },
      {
        nome: "Destreza",
        valor: 3,
      },
      {
        nome: "Constituição",
        valor: 3,
      },
      {
        nome: "Inteligência",
        valor: -4,
      },
      {
        nome: "Sabedoria",
        valor: 1,
      },
      {
        nome: "Carisma",
        valor: -1,
      },
    ],
    img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272732186039215.png",
    pericias: [],
    poderes: [
      {
        nome: "Aura de Frio",
        desc: "No início de cada turno do stagh, todas as criaturas em alcance curto sofrem 1d6+3 pontos de dano de frio (Fort CD 18 reduz à metade).",
        acao: "Livre",
      },
    ],
  },
  {
    nome: "Turba Zumbi",
    categoria: "Morto-Vivo",
    tamanho: "Grande",
    tipo: "bando",
    pv: 100,
    iniciativa: 1,
    percepcao: 1,
    defesa: 11,
    fortitude: 5,
    reflexos: 1,
    vontade: 1,
    resistencias: "Nenhuma",
    deslocamento: 6,
    ataques: [
      {
        nome: "Mordida",
        acerto: 17,
        dano: [
          {
            dados: 2,
            lados: 6,
            bonus: 12,
          },
        ],
        crit: "20x2",
      },
    ],
    nd: 2,
    tesouro: "Nenhum",
    atributos: [
      {
        nome: "Força",
        valor: 3,
      },
      {
        nome: "Destreza",
        valor: -1,
      },
      {
        nome: "Constituição",
        valor: 3,
      },
      {
        nome: "Inteligência",
        valor: -10,
      },
      {
        nome: "Sabedoria",
        valor: -1,
      },
      {
        nome: "Carisma",
        valor: 0,
      },
    ],
    img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272732186039215.png",
    pericias: [],
    poderes: [
      {
        nome: "Bando",
        desc: "A turba é formada por um grupo de zumbis. Se um ataque da turba exceder a Defesa do inimigo por 10 ou mais, ele causa o dobro do dano. Se um ataque da turba errar, ele ainda assim causa metade do dano. A turba é imune a manobras de combate e efeitos que afetam apenas uma criatura e não causam dano, mas sofre 50% a mais de dano de efeitos de área, como Bola de Fogo. Um personagem com o poder Trespassar que acerte a turba pode usá-lo para fazer um ataque adicional contra ela (mas apenas uma vez por turno).",
        acao: "Livre",
      },
      {
        nome: "Fraqueza Zumbi",
        desc: "A turba zumbi sofre o dobro de dano de acertos críticos ou de ataques feitos contra seus cérebros (Defesa 21).",
        acao: "Livre",
      },
    ],
  },
];

const TrupeZelin: NPC[] = [
  {
    nome: "Zelin Alexavich",
    categoria: "Humanoide",
    tamanho: "Médio",
    tipo: "humano",
    pv: 70,
    defesa: 19,
    iniciativa: 10,
    percepcao: 8,
    fortitude: 11,
    reflexos: 8,
    vontade: 5,
    resistencias: "Nenhuma",
    deslocamento: 9,
    ataques: [
      {
        nome: "Espada bastarda",
        acerto: 13,
        dano: [
          {
            dados: 1,
            lados: 10,
            bonus: 6,
          },
        ],
        crit: "19x2",
      },
      {
        nome: "Espada curta",
        acerto: 12,
        dano: [
          {
            dados: 1,
            lados: 6,
            bonus: 4,
          },
        ],
        crit: "19x2",
      },
    ],
    nd: 2,
    pericias: [
      {
        nome: "Atletismo",
        bonus: 7,
      },
    ],
    tesouro:
      "Couro batido reforçado, espada bastarda certeira, espada curta. Tesouro Dobro.",
    img: "https://i.imgur.com/hbebsWR.png",
    atributos: [
      {
        nome: "Força",
        valor: 4,
      },
      {
        nome: "Destreza",
        valor: 3,
      },
      {
        nome: "Constituição",
        valor: 3,
      },
      {
        nome: "Inteligência",
        valor: 1,
      },
      {
        nome: "Sabedoria",
        valor: 2,
      },
      {
        nome: "Carisma",
        valor: 1,
      },
    ],
  },
  {
    nome: "Milla Hofforva",
    categoria: "Humanoide",
    tamanho: "Médio",
    tipo: "humano",
    pv: 30,
    pm: 19,
    defesa: 14,
    iniciativa: 4,
    percepcao: 2,
    fortitude: 0,
    reflexos: 5,
    vontade: 11,
    resistencias: "Nenhuma",
    deslocamento: 9,
    ataques: [],
    nd: 1,
    pericias: [
      {
        nome: "Conhecimento",
        bonus: 6,
      },
      {
        nome: "Misticismo",
        bonus: 8,
      },
    ],
    tesouro: "Dobro",
    img: "https://i.imgur.com/XhNWy0i.png",
    atributos: [
      {
        nome: "Força",
        valor: 0,
      },
      {
        nome: "Destreza",
        valor: 2,
      },
      {
        nome: "Constituição",
        valor: 2,
      },
      {
        nome: "Inteligência",
        valor: 4,
      },
      {
        nome: "Sabedoria",
        valor: 0,
      },
      {
        nome: "Carisma",
        valor: 1,
      },
    ],
    poderes: [
      {
        nome: "Arcano de batalha",
        desc: "Milla soma sua Inteligência nas rolagens de dano com magias e com seu raio arcano (já contabilizado).",
        acao: "Livre",
      },
      {
        nome: "Raio Arcano",
        desc: "Uma criatura em alcance curto sofre 2d6+4 pontos de dano de essência (Ref CD 16 reduz à metade.",
        acao: "Padrão",
      },
      {
        nome: "Magias",
        desc: "Milla lança magias como uma maga de 5o nível (CD 16). 1o — Armadura Arcana, Seta Infalível; 2o — Bola de Fogo, Dissipar Magia.",
        acao: "Livre",
      },
    ],
    magias: [
      {
        nome: "Armadura Arcana",
        circulo: 1,
        classificacao: "Arcana",
        escola: "Abjuração",
        acao: "Padrão",
        alcance: "Pessoal",
        duracao: "Cena",
        alvo_area: "Você",
        desc: "Esta magia cria uma película protetora invisível, mas tangível, fornecendo +5 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras.",
        aprimoramentos: [
          {
            desc: "Muda a execução para reação. Em vez do normal, quando sofre um ataque, você cria um escudo mágico que fornece +5 na Defesa contra esse ataque (cumulativo com o bônus do efeito básico desta magia e de armaduras).",
            custo: 1,
          },
          {
            desc: "Aumenta o bônus na Defesa em +1.",
            custo: 2,
          },
          {
            desc: "Muda a duração para um dia.",
            custo: 2,
          },
        ],
      },
      {
        nome: "Seta Infalível de Talude",
        circulo: 1,
        classificacao: "Arcana",
        escola: "Evocação",
        acao: "Padrão",
        alcance: "Médio",
        duracao: "Instantânea",
        alvo_area: "Criaturas escolhidas",
        desc: "Favorita entre arcanistas iniciantes, esta magia lança duas setas de energia que causam 1d4+1 pontos de dano de essência cada. Você pode lançar as setas em alvos diferentes ou concentrá-las num mesmo alvo. Caso você possua um bônus no dano de magias, como pelo poder Arcano de Batalha, ele é aplicado em apenas uma seta (o bônus vale para a magia, não cada alvo).",
        aprimoramentos: [
          {
            desc: "Muda as setas para lanças de energia que surgem e caem do céu. Cada lança causa 1d8+1 pontos de dano de essência. Requer 2º círculo.",
            custo: 2,
          },
          {
            desc: "Muda o número de setas/lanças para três.",
            custo: 2,
          },
          {
            desc: "Muda o número de setas/lanças para cinco. Requer 2º círculo.",
            custo: 4,
          },
          {
            desc: "Muda o número de setas/lanças para dez. Requer 4º círculo.",
            custo: 9,
          },
        ],
      },
      {
        nome: "Bola de Fogo",
        circulo: 2,
        classificacao: "Arcana",
        escola: "Evocação",
        acao: "Padrão",
        alcance: "Médio",
        duracao: "Instantânea",
        alvo_area: "Esfera com 6m de raio",
        resistencia: "Reflexos",
        desc: "Esta famosa magia de ataque cria uma poderosa explosão, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na área. Reflexos reduz à metade.",
        aprimoramentos: [
          {
            desc: "Aumenta o dano em +2d6.",
            custo: 2,
          },
          {
            desc: "Muda a área para efeito de esfera flamejante com tamanho Médio e a duração para cena. Em vez do normal, cria uma esfera flamejante com 1,5m de diâmetro que causa 3d6 pontos de dano a qualquer criatura no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. Ela é imune a dano, mas pode ser apagada com água. Uma criatura só pode sofrer dano da esfera uma vez por rodada.",
            custo: 2,
          },
          {
            desc: "Muda a duração para um dia ou até ser descarregada. Em vez do normal, você cria uma pequena pedra flamejante, que pode detonar como uma reação, descarregando a magia. A pedra pode ser usada como uma arma de arremesso com alcance curto. Uma vez detonada, causa o dano da magia numa área de esfera com 6m de raio.",
            custo: 3,
          },
        ],
      },
      {
        nome: "Dissipar Magia",
        circulo: 2,
        classificacao: "Universal",
        escola: "Abjuração",
        acao: "Padrão",
        alcance: "Médio",
        duracao: "Instantânea",
        alvo_area: "1 criatura ou 1 objeto mágico ou esfera com 3m de raio",
        desc: "Você dissipa outras magias que estejam ativas, como se sua duração tivesse acabado. Note que efeitos de magias instantâneas não podem ser dissipados (não se pode dissipar uma Bola de Fogo ou Relâmpago depois que já causaram dano...). Se lançar essa magia em uma criatura ou área, faça um teste de Misticismo; você dissipa as magias com CD igual ou menor que o resultado do teste. Se lançada contra um item mágico, o transforma em um item mundano por 1d6 rodadas (Vontade anula).",
        aprimoramentos: [
          {
            desc: "Muda a área para esfera com 9m de raio. Em vez do normal, cria um efeito de disjunção. Todas as magias na área são automaticamente dissipadas e todos os itens mágicos na área, exceto aqueles que você estiver carregando, viram itens mundanos por uma cena (com direito a um teste de Vontade para evitar esse efeito). Requer 5º círculo.",
            custo: 12,
          },
        ],
      },
    ],
  },
  {
    nome: "Ruschel Vodorov",
    categoria: "Humanoide",
    tamanho: "Médio",
    tipo: "humano",
    pv: 35,
    iniciativa: 11,
    percepcao: 7,
    defesa: 19,
    fortitude: 5,
    reflexos: 9,
    vontade: 2,
    resistencias: "Nenhuma",
    deslocamento: 9,
    ataques: [
      {
        nome: "Espada longa",
        acerto: 7,
        dano: [
          {
            dados: 1,
            lados: 8,
            bonus: 4,
          },
        ],
        crit: "19x2",
      },
      {
        nome: "Besta pesada",
        acerto: 9,
        dano: [
          {
            dados: 1,
            lados: 12,
            bonus: 6,
          },
        ],
        crit: "18x2",
      },
    ],
    nd: 1,
    pericias: [],
    tesouro:
      "Besta pesada precisa, couraça, espada longa, virotes x20. Tesouro Dobro.",
    atributos: [
      {
        nome: "Força",
        valor: 2,
      },
      {
        nome: "Destreza",
        valor: 4,
      },
      {
        nome: "Constituição",
        valor: 2,
      },
      {
        nome: "Inteligência",
        valor: 0,
      },
      {
        nome: "Sabedoria",
        valor: 2,
      },
      {
        nome: "Carisma",
        valor: -1,
      },
    ],
    img: "https://i.imgur.com/q222XAg.png",
    poderes: [
      {
        nome: "Mira Pura",
        desc: "Quando usa a ação mirar, Ruschel recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno.",
        acao: "Livre",
      },
      {
        nome: "Recarga Rápida",
        desc: "Ruschel recarrega sua besta pesada.",
        acao: "Movimento",
      },
    ],
  },
  {
    nome: "Igor Raitter",
    categoria: "Humanoide",
    tamanho: "Médio",
    tipo: "humano",
    pv: 40,
    pm: 19,
    iniciativa: 3,
    percepcao: 7,
    defesa: 21,
    fortitude: 7,
    reflexos: 2,
    vontade: 13,
    deslocamento: 6,
    ataques: [
      {
        nome: "Martelo de guerra",
        acerto: 10,
        dano: [
          {
            dados: 1,
            lados: 8,
            bonus: 6,
          },
        ],
        crit: "20x3",
      },
    ],
    nd: 1,
    tesouro:
      "Escudo leve reforçado, martelo de guerra, meia armadura reforçada, símbolo sagrado. Tesouro Dobro.",
    atributos: [
      {
        nome: "Força",
        valor: 2,
      },
      {
        nome: "Destreza",
        valor: 0,
      },
      {
        nome: "Constituição",
        valor: 3,
      },
      {
        nome: "Inteligência",
        valor: 1,
      },
      {
        nome: "Sabedoria",
        valor: 4,
      },
      {
        nome: "Carisma",
        valor: 2,
      },
    ],
    img: "https://i.imgur.com/2UNiJ6w.png",
    resistencias: "Nenhuma",
    pericias: [],
    poderes: [
      {
        nome: "Magias",
        desc: "Igor lança magias como um clérigo de 5º nível (CD 18). 1º — Arma Espiritual, Curar Ferimentos, Escudo da Fé; 2º — Oração, Soco de Arsenal.",
        acao: "Livre",
      },
    ],
    magias: [
      {
        nome: "Arma Espiritual",
        circulo: 1,
        classificacao: "Divina",
        escola: "Convocação",
        acao: "Padrão",
        alcance: "Pessoal",
        duracao: "Cena",
        alvo_area: "Você",
        desc: "Você invoca a arma preferida de sua divindade (caso sua divindade possua uma), que surge flutuando a seu lado. Uma vez por rodada, quando você sofre um ataque corpo a corpo, pode usar uma reação para que a arma cause automaticamente 2d6 pontos de dano do tipo da arma — por exemplo, uma espada longa causa dano de corte — no oponente que fez o ataque. Esta magia se dissipa se você morrer.",
        aprimoramentos: [
          {
            desc: "Além do normal, a arma o protege. Você recebe +1 na Defesa.",
            custo: 1,
          },
          {
            desc: "Aumenta o bônus na Defesa em +1.",
            custo: 2,
          },
          {
            desc: "Muda a duração para sustentada. Além do normal, uma vez por rodada, você pode gastar uma ação livre para fazer a arma acertar automaticamente um alvo adjacente. Se a arma atacar, não poderá contra-atacar até seu próximo turno. Requer 2º círculo.",
            custo: 2,
          },
          {
            desc: "Muda o tipo do dano para essência. Requer 2º círculo.",
            custo: 2,
          },
          {
            desc: "Aumenta o dano causado pela arma em +1d6 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
            custo: 2,
          },
          {
            desc: "Invoca duas armas, permitindo que você contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3º círculo.",
            custo: 5,
          },
        ],
      },
      {
        nome: "Curar Ferimentos",
        circulo: 1,
        classificacao: "Divina",
        escola: "Evocação",
        acao: "Padrão",
        alcance: "Toque",
        duracao: "Instantânea",
        alvo_area: "1 criatura",
        desc: "Você canaliza luz que recupera 2d8+2 pontos de vida na criatura tocada.",
        aprimoramentos: [
          {
            desc: "Aumenta a cura em +1d8+1.",
            custo: 1,
          },
          {
            desc: "Também remove uma condição de fadiga do alvo.",
            custo: 2,
          },
          {
            desc: "Muda o alcance para curto.",
            custo: 2,
          },
          {
            desc: "Muda o alcance para curto e o alvo para criaturas escolhidas.",
            custo: 5,
          },
        ],
      },
      {
        nome: "Escudo da Fé",
        circulo: 1,
        classificacao: "Divina",
        escola: "Abjuração",
        acao: "Reação",
        alcance: "Curto",
        duracao: "1 turno",
        alvo_area: "1 criatura",
        desc: "Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa.",
        aprimoramentos: [
          {
            desc: "Muda a execução para ação padrão, o alcance para toque e a duração para cena.",
            custo: 1,
          },
          {
            desc: "Também fornece ao alvo camuflagem leve contra ataques à distância.",
            custo: 1,
          },
          {
            desc: "Aumenta o bônus na Defesa em +1.",
            custo: 2,
          },
          {
            desc: "Muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se o alvo sair de alcance curto de você, a magia é dissipada. Requer 2º círculo.",
            custo: 2,
          },
          {
            desc: "Muda a duração para um dia. Requer 2º círculo.",
            custo: 3,
          },
        ],
      },
      {
        nome: "Oração",
        circulo: 2,
        classificacao: "Divina",
        escola: "Encantamento",
        acao: "Padrão",
        alcance: "Curto",
        duracao: "Sustentada",
        alvo_area: "Todas as criaturas (veja texto)",
        desc: "Você e os seus aliados no alcance recebem +2 em testes de perícia e rolagens de dano, e todos os seus inimigos no alcance sofrem –2 em testes de perícia e rolagens de dano. Esse efeito é cumulativo com outras magias. Componente material: T$ 20 por PM gasto em incensos ou outras oferendas.",
        aprimoramentos: [
          {
            desc: "Aumenta os bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
            custo: 2,
          },
          {
            desc: "Aumenta as penalidades em –1 (penalidade máxima limitada pelo círculo máximo de magia que você pode lançar).",
            custo: 2,
          },
          {
            desc: "Muda o alcance para médio. Requer 3º círculo.",
            custo: 7,
          },
          {
            desc: "Muda a duração para cena. Requer 4º círculo",
            custo: 12,
          },
        ],
      },
      {
        nome: "Soco de Arsenal",
        circulo: 2,
        classificacao: "Divina",
        escola: "Convocação",
        acao: "Padrão",
        alcance: "Médio",
        duracao: "Instantânea",
        alvo_area: "1 criatura",
        resistencia: "Fortitude",
        desc: "Você fecha o punho e gesticula como se estivesse golpeando o alvo, causando dano de impacto igual a 4d6 + sua Força. A vítima é empurrada 3m na direção oposta à sua. Passar no teste de resistência reduz o dano à metade e evita o empurrão. Fortitude parcial.",
        aprimoramentos: [
          {
            desc: "Muda o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes. Seu alcance natural aumenta em 3m; uma criatura Média pode atacar adversários a até 4,5m, por exemplo.",
            custo: 1,
          },
          {
            desc: "Aumenta o dano em +1d6.",
            custo: 2,
          },
          {
            desc: "Aumenta o empurrão em +3m.",
            custo: 4,
          },
          {
            desc: "Muda o tipo do dano para essência",
            custo: 5,
          },
        ],
      },
    ],
  },
];

export const MercenariosDaZhura: NPC[] = [
  {
    nome: "Anão Capanga",
    categoria: "Humanoide",
    tamanho: "Médio",
    tipo: "Anão",
    pv: 13,
    defesa: 17,
    iniciativa: 1,
    percepcao: 5,
    fortitude: 7,
    reflexos: 3,
    vontade: 0,
    resistencias: "Nenhuma",
    deslocamento: 6,
    ataques: [
      {
        nome: "Machado de batalha",
        acerto: 10,
        dano: [
          {
            dados: 1,
            lados: 8,
            bonus: 6,
          },
        ],
        crit: "20x3",
      },
    ],
    nd: 1 / 2,
    pericias: [],
    tesouro: "Nenhum.",
    img: "https://i.ibb.co/YXnZLPh/An-o-Capanga.png",
    atributos: [
      {
        nome: "Força",
        valor: 2,
      },
      {
        nome: "Destreza",
        valor: -1,
      },
      {
        nome: "Constituição",
        valor: 3,
      },
      {
        nome: "Inteligência",
        valor: 0,
      },
      {
        nome: "Sabedoria",
        valor: 1,
      },
      {
        nome: "Carisma",
        valor: -1,
      },
    ],
  },
  {
    nome: "Anão Veterano",
    categoria: "Humanoide",
    tamanho: "Médio",
    tipo: "Anão",
    pv: 33,
    defesa: 20,
    iniciativa: 2,
    percepcao: 8,
    fortitude: 13,
    reflexos: 2,
    vontade: 7,
    resistencias: "Nenhuma",
    deslocamento: 6,
    ataques: [
      {
        nome: "Machado Anão",
        acerto: 12,
        dano: [
          {
            dados: 1,
            lados: 10,
            bonus: 10,
          },
        ],
        crit: "20x3",
      },
      {
        nome: "Besta Pesada",
        acerto: 11,
        dano: [
          {
            dados: 1,
            lados: 12,
            bonus: 0,
          },
        ],
        crit: "19x2",
      },
    ],
    nd: 2,
    pericias: [],
    tesouro:
      "Besta pesada, escudo pesado, machado anão, meia armadura, virotes x10.",
    img: "https://i.ibb.co/KmJ86Nw/An-o-Veterano.png",
    atributos: [
      {
        nome: "Força",
        valor: 3,
      },
      {
        nome: "Destreza",
        valor: -1,
      },
      {
        nome: "Constituição",
        valor: 4,
      },
      {
        nome: "Inteligência",
        valor: 0,
      },
      {
        nome: "Sabedoria",
        valor: 2,
      },
      {
        nome: "Carisma",
        valor: -1,
      },
    ],
  },
];

export const StrokaECapangas: NPC[] = [
  {
    nome: "Stroka",
    categoria: "Humanoide",
    tamanho: "Médio",
    tipo: "Anã",
    pv: 105,
    defesa: 21,
    iniciativa: 9,
    percepcao: 4,
    fortitude: 16,
    reflexos: 10,
    vontade: 4,
    resistencias: "Nenhuma",
    deslocamento: 6,
    poderes: [
      {
        nome: "Bloqueio com escudo",
        desc: "Uma vez por rodada, quando sofre dano, Stroka recebe redução de dano 5 contra este dano.",
        acao: "Reação",
      },
      {
        nome: "Contra-golpe",
        desc: "Uma vez por rodada, Stroka pode fazer um ataque de escudo contra um inimigo que errou um ataque corpo a corpo contra ela.",
        acao: "Reação",
      },
    ],
    ataques: [
      {
        nome: "Martelo de guerra",
        acerto: 14,
        dano: [
          {
            dados: 1,
            lados: 8,
            bonus: 6,
          },
        ],
        crit: "20x3",
      },
      {
        nome: "Escudo pesado",
        acerto: 14,
        dano: [
          {
            dados: 1,
            lados: 6,
            bonus: 4,
          },
        ],
        crit: "20x2",
      },
    ],
    nd: 3,
    pericias: [],
    tesouro: "Escudo pesado reforçado, martelo de guerra cruel, meia armadura.",
    img: "https://i.ibb.co/f1YBfr8/Stroka.png",
    atributos: [
      {
        nome: "Força",
        valor: 3,
      },
      {
        nome: "Destreza",
        valor: 0,
      },
      {
        nome: "Constituição",
        valor: 4,
      },
      {
        nome: "Inteligência",
        valor: 1,
      },
      {
        nome: "Sabedoria",
        valor: 2,
      },
      {
        nome: "Carisma",
        valor: 0,
      },
    ],
  },
  ...Array(3).fill(MercenariosDaZhura[0]),
];

export type Group = {
  nome: string;
  npcs: NPC[];
};

type Aventura = {
  label: string;
  npcs: NPC[];
  groups: Group[];
};

export const Aventuras: Aventura[] = [
  {
    label: "Forja de Heróis",
    npcs: [...TrabalhoDuro, ...TrupeZelin],
    groups: [
      {
        nome: "Trupe do Zelin",
        npcs: [...TrupeZelin],
      },
    ],
  },
  {
    label: "O Segredo das Minas",
    npcs: [...MercenariosDaZhura, StrokaECapangas[0]],
    groups: [
      {
        nome: "Stroka e Capangas",
        npcs: StrokaECapangas,
      },
    ],
  },
];

/*
"https://i.ibb.co/JdNXHW1/Abomina-o-Rubi.png"
"https://i.ibb.co/KmJ86Nw/An-o-Veterano.png"
"https://i.ibb.co/x234vW6/C-pia-de-Gorlogg.png"
"https://i.ibb.co/PT284TX/C-pia-de-Gorlogg.png"
"https://i.ibb.co/Z2TMS4M/Guardi-o-de-A-o.png"
"https://i.ibb.co/16dX6Ls/Guardi-o-de-Rubi.png"
"https://i.ibb.co/TBxPt9F/Humano-Matador.png"
"https://i.ibb.co/0jGKsvL/Humano-Mercen-rio.png"
"https://i.ibb.co/B6kgsq8/Jaren.png"
"https://i.ibb.co/LdMv819/K.png"
"https://i.ibb.co/8rc6rRv/Lobo.png"
"https://i.ibb.co/PCzSLnZ/Lonien.png"
"https://i.ibb.co/BTt9yKz/Mago-Mercen-rio.png"
"https://i.ibb.co/ZKSQgPM/Minerador.png"
"https://i.ibb.co/6Zxrm0H/Mineradora.png"
"https://i.ibb.co/VH8SXvb/Thr-n.png"
"https://i.ibb.co/86c63jX/Token-guardiao-rubi.png"
"https://i.ibb.co/d6VHYRg/Troll-Rubi.png"
"https://i.ibb.co/jZMqKVt/Zurah.png"
*/
