import Personagem from "../constructors/Personagem";
import { findMagia } from "../functions/findMagia";

export const Personagens: Personagem[] = [
  {
    player: "Debs",
    persona: "Agatha",
    classe: "Ladina",
    raca: "Humana",
    atributos: [
      {
        nome: "Força",
        valor: 0,
      },
      {
        nome: "Destreza",
        valor: 3,
      },
      {
        nome: "Constituição",
        valor: 1,
      },
      {
        nome: "Inteligência",
        valor: 3,
      },
      {
        nome: "Sabedoria",
        valor: 5,
      },
      {
        nome: "Carisma",
        valor: 2,
      },
    ],
    defesa: 17,
    pv: 17,
    pm: 8,
    movimento: 9,
    nivel: 2,
    poderes: [
      {
        nome: "Ataque Furtivo",
        desc: "Você sabe atingir os pontos vitais de inimigos distraídos. Uma vez por rodada, quando atinge uma criatura desprevenida com um ataque corpo a corpo ou em alcance curto, ou uma criatura que esteja flanqueando, você causa 1d6 pontos de dano extra. A cada dois níveis, esse dano extra aumenta em +1d6. Uma criatura imune a acertos críticos também é imune a ataques furtivos.",
        acao: "Livre",
      },
      {
        nome: "Evasão",
        desc: "A partir do 2o nível, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, você não sofre dano algum se passar. Você ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; você não pode usá-la se estiver de armadura pesada ou na condição imóvel.",
        acao: "Livre",
      },
      {
        nome: "Especialista",
        desc: "Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários (mínimo 1). Ao fazer um teste de uma dessas perícias, você pode gastar 1 PM para dobrar seu bônus de treinamento. Você não pode usar esta habilidade em testes de ataque.",
        acao: "Livre",
      },
      {
        nome: "Sombra",
        desc: "Você recebe +2 em Furtividade, não sofre penalidade em testes de Furtividade por se mover no seu deslocamento normal e reduz a penalidade por atacar e fazer outras ações chamativas para –10.",
        acao: "Livre",
      },
      {
        nome: "Sortudo",
        desc: "Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).",
        acao: "Livre",
        pm: 3,
      },
      {
        nome: "Atraente",
        desc: "Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você.",
        acao: "Livre",
      },
    ],
    img: "https://i.ibb.co/rfZHCpj/Debs.png",
  },
  {
    player: "Bulan",
    persona: "Per",
    classe: "Ladina",
    raca: "Sulfure",
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
        valor: 1,
      },
      {
        nome: "Inteligência",
        valor: 2,
      },
      {
        nome: "Sabedoria",
        valor: 1,
      },
      {
        nome: "Carisma",
        valor: 2,
      },
    ],
    defesa: 16,
    pv: 17,
    pm: 8,
    movimento: 9,
    nivel: 2,
    poderes: [
      {
        nome: "Ataque Furtivo",
        desc: "Você sabe atingir os pontos vitais de inimigos distraídos. Uma vez por rodada, quando atinge uma criatura desprevenida com um ataque corpo a corpo ou em alcance curto, ou uma criatura que esteja flanqueando, você causa 1d6 pontos de dano extra. A cada dois níveis, esse dano extra aumenta em +1d6. Uma criatura imune a acertos críticos também é imune a ataques furtivos.",
        acao: "Livre",
      },
      {
        nome: "Especialista",
        desc: "Escolha um número de perícias treinadas igual a sua Inteligência, exceto bônus temporários (mínimo 1). Ao fazer um teste de uma dessas perícias, você pode gastar 1 PM para dobrar seu bônus de treinamento. Você não pode usar esta habilidade em testes de ataque.",
        acao: "Livre",
      },
      {
        nome: "Herança Divina",
        desc: "Você é uma criatura do tipo espírito e recebe visão no escuro.",
        acao: "Livre",
      },
      {
        nome: "Sombras Profanas",
        desc: "Você recebe +2 em Enganação e Furtividade. Além disso, pode lançar Escuridão (como uma magia divina; atributo-chave Inteligência). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
        acao: "Livre",
      },
      {
        nome: "Gororoba",
        desc: "Você não sofre a penalidade de –5 para fabricar um prato especial adiconal.",
        acao: "Livre",
      },
      {
        nome: "Saque Rápido",
        desc: "Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar armas de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre).",
        acao: "Livre",
      },
    ],
    img: "https://i.ibb.co/C9fwJc9/Bulan.png",
    magias: [findMagia("Escuridão")],
  },
  {
    player: "Diggo",
    persona: "Tatum",
    classe: "Clérigo",
    raca: "Aggelus",
    atributos: [
      {
        nome: "Força",
        valor: 0,
      },
      {
        nome: "Destreza",
        valor: 0,
      },
      {
        nome: "Constituição",
        valor: 2,
      },
      {
        nome: "Inteligência",
        valor: 1,
      },
      {
        nome: "Sabedoria",
        valor: 5,
      },
      {
        nome: "Carisma",
        valor: 0,
      },
    ],
    defesa: 16,
    pv: 24,
    pm: 15,
    movimento: 9,
    nivel: 2,
    poderes: [
      {
        nome: "Canalizar Energia Positiva",
        desc: "Você pode gastar uma ação padrão e 1PM para liberar um aonda de energia positiva que afeta todas as criaturas em alcance curto. energia positiva cura 1d6 pontos de dano em criaturas vivas a sua escolha e causa 1d6 pontos de dano de luz em mortos-vivos. Uma criatura que sofra dano tem direito a um teste de Vontade (CD 11) para reduzi-lo à metade. Para cada 2PM extras que pode gastar, a cura ou dano aumenta em +1d6 PV.",
        acao: "Padrão",
      },
      {
        nome: "Herança Divina",
        desc: "Você é uma criatura do tipo espírito e recebe visão no escuro.",
        acao: "Livre",
      },
      {
        nome: "Luz Sagrada",
        desc: "Você recebe +2 em Diplomacia e Intuição.",
        acao: "Livre",
      },
    ],
    img: "https://i.ibb.co/jfYVJtg/Diggo.png",
    magias: [
      findMagia("Curar Ferimentos"),
      findMagia("Luz"),
      findMagia("Bênção"),
      findMagia("Comando"),
      findMagia("Consagrar"),
    ],
  },
  {
    player: "Vicente",
    persona: "Akin",
    classe: "Arcanista",
    raca: "Qareen",
    atributos: [
      {
        nome: "Força",
        valor: -1,
      },
      {
        nome: "Destreza",
        valor: 1,
      },
      {
        nome: "Constituição",
        valor: 0,
      },
      {
        nome: "Inteligência",
        valor: 4,
      },
      {
        nome: "Sabedoria",
        valor: 1,
      },
      {
        nome: "Carisma",
        valor: 6,
      },
    ],
    defesa: 14,
    pv: 10,
    pm: 18,
    movimento: 9,
    nivel: 2,
    poderes: [
      {
        nome: "Desejos",
        desc: "Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia diminui em –1 PM. Fazer um desejo ao qareen é uma ação livre.",
        acao: "Livre",
      },
      {
        nome: "Resistência Elemental",
        desc: "Conforme sua ascendência, você recebe redução 10 a um tipo de dano. Do Fogo (do fogo).",
        acao: "Livre",
      },
      {
        nome: "Feérica Básica",
        desc: "Você se torna treinado em Enganação e aprende uma magia de 1º círculo de encantamento ou ilusão, arcana ou divina, a sua escolha.",
        acao: "Livre",
      },
      {
        nome: "Alpinista Social",
        desc: "Você pode substituir testes de Diplomacia por testes de Enganação.",
        acao: "Livre",
      },
      {
        nome: "Aparência Inofensiva",
        desc: "A primeira criatura inteligente (Int –3 ou maior) que atacar você em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Este poder só funciona uma vez por cena; independentemente de a criatura falhar ou não no teste, poderá atacá-lo nas rodadas seguintes.",
        acao: "Livre",
      },
      {
        nome: "Golpista Divino",
        desc: "Você recebe +2 em Enganação, Jogatina e Ladinagem.",
        acao: "Livre",
      },
      {
        nome: "Magia Ilimitada",
        desc: "Você soma seu atributo-chave no limite de PM que pode gastar numa magia. Por exemplo, um arcanista de 5º nível com Int 4 e este poder pode gastar até 9 PM em cada magia.",
        acao: "Livre",
      },
    ],
    img: "https://i.ibb.co/jZHG2xx/Vic.png",
    magias: [
      findMagia("Explosão de Chamas"),
      findMagia("Seta Infalível de Talude"),
      findMagia("Toque Chocante"),
      findMagia("Disfarce Ilusório"),
      findMagia("Transmutar Objetos"),
    ],
  },
  {
    player: "Tutu",
    persona: "Boris",
    classe: "Inventor",
    raca: "Lefou",
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
        valor: 4,
      },
      {
        nome: "Sabedoria",
        valor: -1,
      },
      {
        nome: "Carisma",
        valor: -2,
      },
    ],
    defesa: 16,
    pv: 21,
    pm: 8,
    movimento: 9,
    nivel: 2,
    poderes: [
      {
        nome: "Cria da Tormenta",
        desc: "Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta.",
        acao: "Livre",
      },
      {
        nome: "Deformidade",
        desc: "Todo lefou possui defeitos físicos que, embora desagradáveis, conferem certas vantagens. Você recebe +2 em duas perícias a sua escolha. Cada um desses bônus conta como um poder da Tormenta (exceto para perda de Carisma). Você pode trocar um desses bônus por um poder da Tormenta a sua escolha (ele também não conta para perda de Carisma).",
        acao: "Livre",
      },
      {
        nome: "Engenhosidade",
        desc: "Quando faz um teste de perícia, você pode gastar 2 PM para somar a sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque.",
        acao: "Livre",
        pm: 2,
      },
      {
        nome: "Carapaça",
        desc: "Sua pele é recoberta por placas quitinosas. Você recebe +1 na Defesa. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
        acao: "Livre",
      },
      {
        nome: "Cuspir Enxame",
        desc: "Você pode gastar uma ação completa e 2 PM para criar um enxame de insetos rubros em um ponto a sua escolha em alcance curto e com duração sustentada. O enxame tem tamanho Médio e pode passar pelo espaço de outras criaturas. Uma vez por rodada, você pode gastar uma ação de movimento para mover o enxame 9m. No final do seu turno, o enxame causa 2d6 pontos de dano de ácido a qualquer criatura no espaço que ele estiver ocupando. Para cada dois outros poderes da Tormenta que possui, você pode gastar +1 PM quando usa este poder para aumentar o dano do enxame em +1d6.",
        acao: "Completa",
        pm: 2,
      },
      {
        nome: "Esse Cheiro...",
        desc: "Você recebe +2 em Fortitude e detecta automaticamente a presença (mas não a localização ou natureza) de itens alquímicos em alcance curto.",
        acao: "Livre",
      },
      {
        nome: "Zumbificar",
        desc: "Você pode gastar uma ação completa e 3 PM para reanimar o cadáver de uma criatura Pequena ou Média adjacente por um dia. O cadáver funciona como um parceiro iniciante de um tipo a sua escolha entre combatente, fortão ou guardião. Além disso, quando sofre dano, você pode sacrificar esse parceiro; se fizer isso, você sofre apenas metade do dano, mas o cadáver é destruído.",
        acao: "Completa",
        pm: 3,
      },
    ],
    img: "",
    magias: [findMagia("Armadura Arcana")],
  },
  {
    player: "Moni",
    persona: "Layla",
    classe: "Arcanista",
    raca: "Elfa",
    atributos: [
      {
        nome: "Força",
        valor: 1,
      },
      {
        nome: "Destreza",
        valor: 2,
      },
      {
        nome: "Constituição",
        valor: 1,
      },
      {
        nome: "Inteligência",
        valor: 3,
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
    defesa: 12,
    pv: 12,
    pm: 15,
    movimento: 12,
    nivel: 2,
    poderes: [
      {
        nome: "Sentidos Élficos",
        desc: "Você recebe visão na penumbra e +2 em Misticismo e Percepção.",
        acao: "Livre",
      },
      {
        nome: "Raio Arcano",
        desc: "Você pode gastar uma ação padrão para causar 1d8 pontos de dano de essência num alvo em alcance curto. Esse dano aumenta em +1d8 para cada círculo de magia acima do 1º que você puder lançar. O alvo pode fazer um teste de Reflexos (CD atributo-chave) para reduzir o dano à metade. O raio arcano conta como uma magia para efeitos de habilidades e itens que beneficiem suas magias.",
        acao: "Padrão",
      },
    ],
    img: "https://i.ibb.co/42Kdr9T/Moni.png",
    magias: [
      findMagia("Adaga Mental"),
      findMagia("Criar Ilusão"),
      findMagia("Toque Chocante"),
      findMagia("Curar Ferimentos"),
      findMagia("Compreensão"),
    ],
  },
].sort((a, b) => a.player.localeCompare(b.player));
