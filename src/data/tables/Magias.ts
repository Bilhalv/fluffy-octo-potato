import { magia } from "../functions/findMagia";

export const Magias: magia[] = [
  {
    nome: "Escuridão",
    desc: "O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem leve por escuridão leve. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Escuridão anula Luz.",
    circulo: 1,
    classificacao: "Universal",
    escola: "Necromancia",
    acao: "Padrão",
    alcance: "Curto",
    duracao: "Cena",
    alvo_area: "1 objeto",
    resistencia: "Vontade",
    aprimoramentos: [
      {
        desc: "Aumenta a área em +1,5m de raio.",
        custo: 1,
      },
      {
        desc: "Muda o efeito para fornecer camuflagem total por escuridão total. As sombras bloqueiam a visão na área e através dela.",
        custo: 2,
      },
      {
        desc: "Muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por 1 rodada. Requer 2o círculo.",
        custo: 2,
      },
      {
        desc: "Muda a duração para um dia.",
        custo: 3,
      },
      {
        desc: "Muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem leve. Requer 2o círculo.",
        custo: 5,
      },
    ],
  },
  {
    nome: "Luz",
    desc: "O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Luz anula Escuridão.",
    circulo: 1,
    classificacao: "Universal",
    escola: "Evocação",
    acao: "Padrão",
    alcance: "Curto",
    duracao: "Cena",
    alvo_area: "1 objeto",
    resistencia: "Vontade",
    aprimoramentos: [
      {
        desc: "Aumenta a área iluminada em +3m de raio.",
        custo: 1,
      },
      {
        desc: "Muda a duração para um dia.",
        custo: 2,
      },
      {
        desc: "Muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Não pode ser usado em conjunto com outros aprimoramentos. Requer 2o círculo.",
        custo: 2,
      },
      {
        desc: "(Apenas Arcanos) muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas",
        custo: 0,
      },
      {
        desc: "(Apenas Arcanos) muda o alcance para longo e o efeito para cria 4 pequenos globos de luz. Você pode posicionar os globos onde quiser dentro do alcance. Você pode enviar um à frente, outra para trás, outra para cima e manter um perto de você, por exemplo. Uma vez por rodada, você pode mover os globos com uma ação livre. Cada um ilumina como uma tocha, mas não produz calor. Se um globo ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2o círculo.",
        custo: 2,
      },
      {
        desc: "(Apenas Divinos) a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostos à luz solar real. Seus aliados na área estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2o círculo.",
        custo: 2,
      },
      {
        desc: "(Apenas Divinos) muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo é envolto por um halo de luz, recebendo +10 em testes de Diplomacia e redução de trevas 10. Requer 2o círculo.",
        custo: 5,
      },
    ],
  },
  {
    nome: "Bênção",
    desc: "Abençoa seus aliados, que recebem +1 em testes de ataque e rolagens de dano. Bênção anula Perdição.",
    circulo: 1,
    classificacao: "Universal",
    escola: "Encantamento",
    acao: "Padrão",
    alcance: "Curto",
    duracao: "Cena",
    alvo_area: "Aliados",
    aprimoramentos: [
      {
        desc: "Muda o alvo para 1 cadáver e a duração para 1 semana. O cadáver não se decompõe nem pode ser transformado em morto-vivo.",
        custo: 1,
      },
      {
        desc: "Aumenta os bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
        custo: 2,
      },
    ],
  },
  {
    nome: "Consagrar",
    desc: "Você enche a área com energia positiva. Pontos de vida curados por efeitos de luz são maximizados dentro da área. Isso também afeta dano causado em mortos-vivos por esses efeitos. Por exemplo, Curar Ferimentos cura automaticamente 18 PV. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Consagrar anula Profanar.",
    circulo: 1,
    classificacao: "Universal",
    escola: "Evocação",
    acao: "Padrão",
    alcance: "Longo",
    duracao: "1 dia",
    alvo_area: "esfera com 9m de raio",
    aprimoramentos: [
      {
        desc: "Além do normal, mortos-vivos na área sofrem –2 em testes e Defesa.",
        custo: 1,
      },
      {
        desc: "Aumenta as penalidades para mortos-vivos em –1.",
        custo: 2,
      },
      {
        desc: "Muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.",
        custo: 9,
      },
    ],
  },
  {
    nome: "Explosão de Chamas",
    desc: "Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano às criaturas na área.",
    circulo: 1,
    classificacao: "Arcana",
    escola: "Evocação",
    acao: "Padrão",
    alcance: "pessoal",
    duracao: "instantânea",
    alvo_area: "cone com 6m de comprimento",
    resistencia: "Reflexos",
    aprimoramentos: [
      {
        desc: "Muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela, tocha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência.",
        custo: 0,
      },
      {
        desc: "Aumenta o dano em +1d6.",
        custo: 1,
      },
      {
        desc: "Muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela, tocha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência.",
        custo: 1,
      },
      {
        desc: "Muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica em chamas (veja Condições, na página 394).",
        custo: 1,
      },
    ],
  },
  {
    nome: "Comando",
    desc: "Você dá uma ordem irresistível, que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer ao comando em seu próprio turno da melhor maneira possível. Escolha um dos efeitos: Fuja, Largue, Pare, Senta, Venha.",
    circulo: 1,
    classificacao: "Divina",
    escola: "Encantamento",
    acao: "Padrão",
    alcance: "Curto",
    duracao: "1 rodada",
    alvo_area: "1 humanoide",
    resistencia: "Vontade",
    aprimoramentos: [
      {
        desc: "Muda o alvo para 1 criatura.",
        custo: 1,
      },
      {
        desc: "Aumenta a quantidade de alvos em +1.",
        custo: 2,
      },
    ],
  },
  {
    nome: "Compreensão",
    desc: "Essa magia lhe confere compreensão sobrenatural. Você pode tocar um texto e entender as palavras mesmo que não conheça o idioma. Se tocar numa criatura inteligente, pode se comunicar com ela mesmo que não tenham um idioma em comum. Se tocar uma criatura não inteligente, como um animal, pode perceber seus sentimentos. Você também pode gastar uma ação de movimento para ouvir os pensamentos de uma criatura tocada (você “ouve” o que o alvo está pensando), mas um alvo involuntário tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito.",
    circulo: 1,
    classificacao: "Universal",
    escola: "Adivinhação",
    acao: "Padrão",
    alcance: "Toque",
    duracao: "Cena",
    alvo_area: "1 criatura ou texto",
    resistencia: "Vontade",
    aprimoramentos: [
      {
        desc: "Muda o alcance para curto.",
        custo: 1,
      },
      {
        desc: "Muda o alcance para curto e o alvo para criaturas escolhidas. Você pode entender todas as criaturas afetadas, mas só pode ouvir os pensamentos de uma por vez.",
        custo: 2,
      },
      {
        desc: "Muda o alvo para 1 criatura. Em vez do normal, pode vasculhar os pensamentos do alvo para extrair informações. O alvo tem direito a um teste de Vontade para anular este efeito. O mestre decide se a criatura sabe ou não a informação que você procura. Requer 2º círculo.",
        custo: 2,
      },
      {
        desc: "Muda o alcance para pessoal e o alvo para você. Em vez do normal, você pode falar, entender e escrever qualquer idioma. Requer 3º círculo.",
        custo: 5,
      },
    ],
  },
  {
    nome: "Seta Infalível de Talude",
    desc: "Favorita entre arcanistas iniciantes, esta magia lança duas setas de energia que causam 1d4+1 pontos de dano de essência cada. Você pode lançar as setas em alvos diferentes ou concentrá-las num mesmo alvo. Caso você possua um bônus no dano de magias, como pelo poder Arcano de Batalha, ele é aplicado em apenas uma seta (o bônus vale para a magia, não cada alvo).",
    circulo: 1,
    classificacao: "Arcana",
    escola: "Evocação",
    acao: "Padrão",
    alcance: "médio",
    duracao: "instantânea",
    alvo_area: "criaturas escolhidas",
    aprimoramentos: [
      {
        desc: "muda as setas para lanças de energia que surgem e caem do céu. Cada lança causa 1d8+1 pontos de dano de essência. Requer 2o círculo.",
        custo: 2,
      },
      {
        desc: "muda o número de setas/lanças para três.",
        custo: 2,
      },
      {
        desc: "muda o número de setas/lanças para cinco. Requer 2o círculo.",
        custo: 4,
      },
      {
        desc: "muda o número de setas/lanças para dez. Requer 4o círculo.",
        custo: 9,
      },
    ],
  },
  {
    nome: "Toque Chocante",
    desc: "Arcos elétricos envolvem sua mão, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a critério do mestre), sofre uma penalidade de –5 no teste de resistência.",
    circulo: 1,
    classificacao: "Arcana",
    escola: "Evocação",
    acao: "Padrão",
    alcance: "toque",
    duracao: "instantânea",
    alvo_area: "1 criatura",
    resistencia: "Fortitude",
    aprimoramentos: [
      {
        desc: "aumenta o dano em +1d8+1.",
        custo: 1,
      },
      {
        desc: "muda a resistências para nenhum. Como parte da execução da magia, você faz um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia.",
        custo: 2,
      },
      {
        desc: "muda o alcance para pessoal e o alvo para área: esfera com 6m de raio. Você dispara raios pelas pontas dos dedos que afetam todas as criaturas na área.",
        custo: 2,
      },
    ],
  },
  {
    nome: "Disfarce Ilusório",
    desc: "Você muda a aparência do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo recebe +10 em testes de Enganação para disfarce. O alvo não recebe novas habilidades (você pode ficar parecido com outra raça, mas não ganhará as habilidades dela), nem modifica o equipamento (uma espada longa disfarçada de bordão continua funcionando e causando dano como uma espada).",
    circulo: 1,
    classificacao: "Arcana",
    escola: "Ilusão",
    acao: "Padrão",
    alcance: "pessoal",
    duracao: "cena",
    alvo_area: "você",
    resistencia: "Vontade",
    aprimoramentos: [
      {
        desc: "Muda o alcance para toque, o alvo para 1 criatura e a duração para 1 semana. Em vez do normal, você faz uma pequena alteração na aparência do alvo, como deixar o nariz vermelho ou fazer brotar um gerânio no alto da cabeça. A mudança é inofensiva, mas persistente — se a flor for arrancada, por exemplo, outra nascerá no local.",
        custo: 0,
      },
      {
        desc: "Muda o alcance para curto e o alvo para 1 objeto. Você pode, por exemplo, transformar pedaços de ferro em moedas de ouro. Você recebe +10 em testes de Enganação para falsificação.",
        custo: 1,
      },
      {
        desc: "Muda o alcance para curto e o alvo para 1 criatura. Uma criatura involuntária pode anular o efeito com um teste de Vontade.",
        custo: 2,
      },
      {
        desc: "A ilusão inclui odores e sensações. Isso muda o bônus em testes de Enganação para disfarce para +20.",
        custo: 2,
      },
      {
        desc: "Muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma aparência diferente. Criaturas involuntárias podem anular o efeito com um teste de Vontade. Requer 2o círculo.",
        custo: 3,
      },
    ],
  },
  {
    nome: "Transmutar Objetos",
    desc: "A magia transforma matéria bruta para moldar um novo objeto. Você pode usar matéria-prima mundana para criar um objeto de tamanho Pequeno ou menor e preço máximo de T$ 25, como um balde ou uma espada. O objeto reverte à matéria-prima no final da cena, ou se for tocado por um objeto feito de chumbo. Esta magia não pode ser usada para criar objetos consumíveis, como alimentos ou itens alquímicos, nem objetos com mecanismos complexos, como bestas ou armas de fogo. Transmutar Objetos anula Despedaçar.",
    circulo: 1,
    classificacao: "Arcana",
    escola: "Transmutação",
    acao: "Padrão",
    alcance: "toque",
    duracao: "cena",
    alvo_area: "matéria-prima, como madeira, rochas, ossos",
    aprimoramentos: [
      {
        desc: "muda o alvo para 1 objeto mundano Mínusculo (ou material em quantidade equivalente) e a duração para instantânea. Em vez do normal, você pode alterar as propriedades físicas do alvo, como colorir, limpar ou sujar itens pequenos (incluindo peças de roupa), aquecer, esfriar e/ou temperar (mas não produzir) ou curar 1 PV do objeto, consertando pequenas falhas como colar um frasco de cerâmica quebrado, unir os elos de uma corrente ou costurar uma roupa rasgada. Um objeto só pode ser afetado por este truque uma vez por dia.",
        custo: 0,
      },
      {
        desc: "muda o alcance para toque, o alvo para 1 construto e a duração para instantânea. Em vez do normal, cura 2d8 PV do alvo. Você pode gastar 2 PM adicionais para aumentar a cura em +1d8.",
        custo: 1,
      },
      {
        desc: "aumenta o limite de tamanho do objeto em uma categoria.",
        custo: 2,
      },
      {
        desc: "aumenta o preço máximo do objeto criado em um fator de x10 (+3 PM por T$ 250 de preço, +6 PM por T$ 2.500 de preço e assim por diante).",
        custo: 3,
      },
      {
        desc: "muda o alvo para 1 objeto mundano e a duração para instantânea. Em vez do normal, você cura todos os PV do alvo, restaurando o objeto totalmente. Este aprimoramento está sujeito aos limites de tamanho e preço do objeto conforme a magia original e não funciona se o objeto tiver sido completamente destruído (queimado até virar cinzas ou desintegrado, por exemplo). Requer 3o círculo.",
        custo: 5,
      },
      {
        desc: "como o aprimoramento anterior, mas passa a afetar itens mágicos.",
        custo: 9,
      },
    ],
  },
  {
    nome: "Armadura Arcana",
    desc: "Esta magia cria uma película protetora invisível, mas tangível, fornecendo +5 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras.",
    circulo: 1,
    classificacao: "Arcana",
    escola: "Abjuração",
    acao: "Padrão",
    alcance: "Pessoal",
    duracao: "Cena",
    alvo_area: "Você",
    aprimoramentos: [
      {
        desc: "Muda a execução para reação. Em vez do normal, você cria um escudo mágico que fornece +5 na Defesa contra o próximo ataque que sofrer (cumulativo com o bônus fornecido pelo efeito básico desta magia e armaduras).",
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
    nome: "Adaga Mental",
    desc: "Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano psíquico e fica atordoado por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e evita a condição. Uma criatura só pode ficar atordoada por esta magia uma vez por cena.",
    circulo: 1,
    classificacao: "Arcana",
    escola: "Encantamento",
    acao: "Padrão",
    alcance: "Curto",
    duracao: "Instantânea",
    alvo_area: "1 criatura",
    resistencia: "Vontade",
    aprimoramentos: [
      {
        desc: "Você lança a magia sem gesticular ou pronunciar palavras (o que permite lançar esta magia de armadura) e a adaga se torna invisível. Se o alvo falhar no teste de resistência, não percebe que você lançou uma magia contra ele.",
        custo: 1,
      },
      {
        desc: "Muda a duração para um dia. Além do normal, você “finca” a adaga na mente do alvo. Enquanto a magia durar, você sabe a direção e localização do alvo, desde que ele esteja no mesmo mundo.",
        custo: 2,
      },
      {
        desc: "Aumenta o dano em +1d6.",
        custo: 2,
      },
    ],
  },
  {
    nome: "Criar Ilusão",
    desc: "Esta magia cria uma ilusão visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Criaturas e objetos atravessam uma ilusão sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia é dissipada se você sair do alcance.",
    circulo: 1,
    classificacao: "Arcana",
    escola: "Ilusão",
    acao: "Padrão",
    alcance: "médio",
    duracao: "cena",
    alvo_area: "até 4 cubos de 1,5m",
    resistencia: "Vontade",
    aprimoramentos: [
      {
        desc: "Muda a duração para sustentada. A cada rodada você pode gastar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar.",
        custo: 0,
      },
      {
        desc: "Muda a duração para sustentada. A cada rodada você pode gastar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar.",
        custo: 1,
      },
      {
        desc: "Aumenta o efeito da ilusão em +1 cubo de 1,5m.",
        custo: 1,
      },
      {
        desc: "Muda o alvo para objeto mundano Médio. Além do normal, o alvo tem as mesmas características de um construto.",
        custo: 1,
      },
      {
        desc: "Também pode criar ilusões de imagem e sons combinados.",
        custo: 2,
      },
      {
        desc: "Muda o alcance para longo e o efeito para esfera com 30m de raio. Em vez do normal, você cria um som muito alto, equivalente a uma multidão. Criaturas na área lançam magias como se estivessem em uma condição ruim e a CD de testes de Percepção para ouvir aumenta em +10. Requer 2º círculo.",
        custo: 2,
      },
      {
        desc: "Também pode criar sensações táteis, como texturas; criaturas que não saibam que é uma ilusão não conseguem atravessá-la sem passar em um teste de Vontade (objetos ainda a atravessam). A ilusão é incapaz de causar ou sofrer dano. Requer 2º círculo.",
        custo: 2,
      },
      {
        desc: "Muda a duração para sustentada. Além do normal, você pode gastar uma ação livre para modificar livremente a ilusão (mas não pode acrescentar novos aprimoramentos após lançá-la). Requer 3º círculo.",
        custo: 5,
      },
    ],
  },
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
];
