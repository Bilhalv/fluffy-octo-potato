import { AçaoRegra, CondicaoRegra, ManobraRegra } from "../constructors/Regra";

export const AcoesRegras: AçaoRegra[] = [];

export const ManobrasRegras: ManobraRegra[] = [];

export const CondicoesRegras: CondicaoRegra[] = [
  {
    titulo: "Abalado",
    descricao:
      "O personagem sofre –2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado.",
    tipo: "Mental",
  },
  {
    titulo: "Agarrado",
    descricao:
      "O personagem fica desprevenido e imóvel, sofre –2 em testes de ataque e só pode atacar com armas leves. Ataques à distância contra um alvo envolvido em uma manobra agarrar têm 50% de chance de acertar o alvo errado.",
    tipo: "Movimento",
  },
  {
    titulo: "Alquebrado",
    descricao:
      "O custo em pontos de mana das habilidades do personagem aumenta em +1.",
    tipo: "Mental",
  },
  {
    titulo: "Apavorado",
    descricao:
      "O personagem sofre –5 em testes de perícia e não pode se aproximar voluntariamente da fonte do medo.",
    tipo: "Medo",
  },
  {
    titulo: "Atordoado",
    descricao: "O personagem fica desprevenido e não pode fazer ações.",
    tipo: "Mental",
  },
  {
    titulo: "Caído",
    descricao:
      "O personagem sofre –5 na Defesa contra ataques corpo a corpo e recebe +5 na Defesa contra ataques à distância (cumulativos com outras condições). Além disso, sofre –5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m.",
  },
  {
    titulo: "Cego",
    descricao:
      "O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre –5 em testes de perícias baseadas em Força ou Destreza. Todos os alvos de seus ataques recebem camuflagem total. Você é considerado cego enquanto estiver em uma área de escuridão total, a menos que algo lhe permita perceber no escuro.",
    tipo: "Sentidos",
  },
  {
    titulo: "Confuso",
    descricao:
      "O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos: 1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8; 2-3) Não pode fazer ações, e fica balbuciando incoerentemente; 4-5) Usa a arma que estiver empunhando para atacar a criatura mais próxima, ou a si mesmo se estiver sozinho (nesse caso, apenas role o dano); 6) A condição termina e pode agir normalmente.",
    tipo: "Mental",
  },
  {
    titulo: "Debilitado",
    descricao:
      "O personagem sofre –5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.",
  },
    {
        titulo: "Desprevenido",
        descricao:
        "O personagem sofre –5 na Defesa e em Reflexos. Você fica desprevenido contra inimigos que não possa perceber.",
    },
    {
        titulo: "Doente",
        descricao: "Sob efeito de uma doença.",
        tipo: "Metabolismo",
    },
    {
        titulo: "Em Chamas",
        descricao:
        "O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.",
    },
    {
        titulo: "Enfeitiçado",
        descricao:
        "O personagem se torna prestativo em relação à fonte da condição. Ele não fica sob controle da fonte, mas percebe suas palavras e ações da maneira mais favorável possível. A fonte da condição recebe +10 em testes de Diplomacia com o personagem.",
        tipo: "Mental",
    },
    {
        titulo: "Enjoado",
        descricao:
        "O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada. Ele pode gastar uma ação padrão para fazer uma investida, mas pode avançar no máximo seu deslocamento (e não o dobro).",
        tipo: "Metabolismo",
    },
    {
        titulo: "Enredado",
        descricao:
        "O personagem fica lento, vulnerável e sofre –2 em testes de ataque.",
        tipo: "Movimento",
    },
    {
        titulo: "Envenenado",
        descricao:
        "O efeito desta condição varia de acordo com o veneno. Pode ser perda de vida recorrente ou outra condição (como fraco ou enjoado). Perda de vida recorrente por venenos é cumulativa.",
        tipo: "Veneno",
    },
    {
        titulo: "Esmorecido",
        descricao:
        "O personagem sofre –5 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos.",
        tipo: "Mental",
    },
    {
        titulo: "Exausto",
        descricao:
        "O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente.",
        tipo: "Cansaço",
    },
    {
        titulo: "Fascinado",
        descricao:
        "Com a atenção presa em alguma coisa. O personagem sofre –5 em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou. Esta condição é anulada por ações hostis contra o personagem ou se o que o fascinou não estiver mais visível. Balançar uma criatura fascinada para tirá-la desse estado gasta uma ação padrão.",
        tipo: "Mental",
    },
    {
        titulo: "Fatigado",
        descricao:
        "O personagem sofre –2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fatigado novamente, em vez disso fica exausto.",
        tipo: "Cansaço",
    },
    {
        titulo: "Fraco",
        descricao:
        "O personagem sofre –2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fraco novamente, em vez disso fica debilitado.",
    },
    {
        titulo: "Frustrado",
        descricao:
        "O personagem sofre –2 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos. Se ficar frustrado novamente, em vez disso fica esmorecido.",
        tipo: "Mental",
    },
    {
        titulo: "Imóvel",
        descricao:
        "Todas as formas de deslocamento do personagem são reduzidas a 0m.",
        tipo: "Movimento",
    },
    {
        titulo: "Inconsciente",
        descricao:
        "O personagem fica indefeso e não pode fazer ações, incluindo reações (mas ainda pode fazer testes que sejam naturalmente feitos quando se está inconsciente, como testes de Constituição para estabilizar sangramento). Balançar uma criatura para acordá-la gasta uma ação padrão.",
    },
    {
        titulo: "Indefeso",
        descricao:
        "O personagem fica desprevenido, mas sofre –10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia.",
    },
    {
        titulo: "Lento",
        descricao:
        "Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e ele não pode correr ou fazer investidas.",
        tipo: "Movimento",
    },
    {
        titulo: "Ofuscado",
        descricao: "O personagem sofre –2 em testes de ataque e de Percepção.",
        tipo: "Sentidos",
    },
    {
        titulo: "Paralisado",
        descricao:
        "Fica imóvel e indefeso e só pode realizar ações puramente mentais.",
        tipo: "Movimento",
    },
    {
        titulo: "Pasmo",
        descricao: "Não pode fazer ações.",
        tipo: "Mental",
    },
    {
        titulo: "Petrificado",
        descricao:
        "O personagem fica inconsciente e recebe redução de dano 8.",
        tipo: "Metamorfose",
    },
    {
        titulo: "Sangrando",
        descricao:
        "No início de seu turno, o personagem deve fazer um teste de Constituição (CD 15). Se falhar, perde 1d6 pontos de vida e continua sangrando. Se passar, remove essa condição.",
        tipo: "Metabolismo",
    },
    {
        titulo: "Sobrecarregado",
        descricao:
        "O personagem sofre penalidade de armadura –5 e seu deslocamento é reduzido em –3m.",
        tipo: "Movimento",
    },
    {
        titulo: "Surdo",
        descricao:
        "O personagem não pode fazer testes de Percepção para ouvir e sofre –5 em testes de Iniciativa. Além disso, é considerado em condição ruim para lançar magias.",
        tipo: "Sentidos",
    },
    {
        titulo: "Surpreendido",
        descricao:
        "O personagem fica desprevenido e não pode fazer ações.",
    },
    {
        titulo: "Vulnerável",
        descricao: "O personagem sofre –2 na Defesa.",
    },
];

type tipoCon = {
  tipo: string;
  descricao: string;
};
export const CondicoesTipos: tipoCon[] = [
  {
    tipo: "Arcano",
    descricao:
      "Gerado pelas energias místicas de Arton. Todos efeitos arcanos são mágicos.",
  },
  { tipo: "Atordoamento", descricao: "Afeta a capacidade de agir do alvo." },
  {
    tipo: "Cansaço",
    descricao:
      "Diminui as capacidades físicas do alvo. Construtos e mortos-vivos são imunes a efeitos de cansaço.",
  },
  { tipo: "Climático", descricao: "Gerado pelas forças da natureza." },
  { tipo: "Cura", descricao: "Cura pontos de vida do alvo." },
  {
    tipo: "Dano",
    descricao:
      "Reduz os PV do alvo. Efeitos deste tipo são subdivividos em tipos de dano (veja a página 230).",
  },
  {
    tipo: "Divino",
    descricao:
      "Gerado pela energia de um deus, direta ou indiretamente. Todos efeitos divinos são mágicos.",
  },
  {
    tipo: "Luz",
    descricao:
      "Efeitos relacionados a dano e cura de luz, iluminação e energia positiva (sinônimo de luz).",
  },
  {
    tipo: "Mágico",
    descricao:
      "Energizados por forças arcanas ou divinas, envolvem magias, efeitos gerados por itens mágicos ou marcados com o símbolo e. Podem ser subdivididos em escolas de magia (veja a página 172).",
  },
  {
    tipo: "Medo",
    descricao:
      "Medo capaz de prejudicar o alvo. Criaturas com Inteligência nula são imunes a medo.",
  },
  {
    tipo: "Mental",
    descricao:
      "Afeta a mente do alvo, diminuindo suas capacidades ou influenciando-a. Criaturas com Inteligência nula são imunes a efeitos mentais.",
  },
  {
    tipo: "Metabolismo",
    descricao:
      "Afeta a fisiologia do alvo. Incluem doenças, sangramento e fome. Construtos e mortos-vivos são imunes a efeitos de metabolismo.",
  },
  {
    tipo: "Metamorfose",
    descricao:
      "Altera a forma ou composição corporal do alvo. Inclui petrificação.",
  },
  {
    tipo: "Movimento",
    descricao: "Afeta ou remove a capacidade de se movimentar do alvo.",
  },
  {
    tipo: "Perda de Vida",
    descricao:
      "Reduz os PV do alvo. Ao contrário de dano, não é afetado por redução de dano.",
  },
  {
    tipo: "Sentidos",
    descricao:
      "Afeta os sentidos físicos do alvo, por exemplo, deixando-o cego ou surdo.",
  },
  {
    tipo: "Trevas",
    descricao:
      "Efeitos relacionados a necromancia, escuridão e energia negativa (sinônimo de trevas).",
  },
  {
    tipo: "Veneno",
    descricao:
      "Efeitos gerados por venenos. Construtos e mortos-vivos são imunes a venenos.",
  },
];
