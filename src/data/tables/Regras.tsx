import { AçaoRegra, CondicaoRegra, ManobraRegra } from "../constructors/Regra";
import React from "react";

export const AcoesRegras: AçaoRegra[] = [
  {
    titulo: "Agredir",
    descricao: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp;Você faz um ataque com uma arma corpo a corpo ou à
          distância.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;Com uma arma corpo a corpo, você pode atacar
          qualquer inimigo dentro de seu alcance natural (1,5m para criaturas
          Pequenas e Médias ou um inimigo adjacente no mapa). Personagens
          maiores, ou usando certas armas, podem atacar mais longe. Você pode
          substituir um ataque corpo a corpo por uma manobra de combate (veja a
          seguir).
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;Com uma arma de ataque à distância, você pode atacar
          qualquer inimigo que consiga ver e que esteja no alcance da arma (ou
          até o dobro do alcance, sofrendo uma penalidade de –5).
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;<i>Atirando em Combate Corpo a Corpo. </i>
          Quando faz um ataque à distância contra uma criatura em combate corpo
          a corpo, você sofre –5 no teste de ataque. Uma criatura está em
          combate corpo a corpo se estiver dentro do alcance natural de qualquer
          inimigo (incluindo você).
        </p>
      </>
    ),
    acao: "Padrão",
  },
  {
    titulo: "Atropelar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você usa uma ação padrão durante um movimento para
        avançar pelo espaço ocupado por uma criatura (normalmente, você não pode
        fazer uma ação padrão durante um movimento; isto é uma exceção). A
        criatura pode lhe dar passagem ou resistir. Se der passagem, você avança
        pelo espaço dela; nenhum teste é necessário. Se resistir, faça um teste
        de manobra oposto; se você vencer, deixa a criatura caída e continua seu
        avanço. Se o alvo vencer, continua de pé e detém seu avanço. Atropelar é
        uma ação livre se tentada durante uma investida.
      </>
    ),
    acao: "Padrão",
  },
  {
    titulo: "Fintar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Faça um teste de Enganação oposto ao teste de Reflexos
        de uma criatura em alcance curto. Se você passar, ela fica desprevenida
        contra seu próximo ataque, mas apenas até o fim de seu próximo turno.
      </>
    ),
    acao: "Padrão",
  },
  {
    titulo: "Lançar uma Magia",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;A maioria das magias exige uma ação padrão para ser
        executada.
      </>
    ),
    acao: "Padrão",
  },
  {
    titulo: "Preparar",
    descricao: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp;Você prepara uma ação (padrão, de movimento ou
          livre) para realizar mais tarde, após seu turno, mas antes de seu
          turno na próxima rodada. Diga a ação que vai fazer e em quais
          circunstâncias (por exemplo, “disparar minha besta na primeira
          criatura que passar pela porta”). A qualquer momento antes de seu
          próximo turno, você pode fazer a ação preparada como uma reação a
          essas circunstâncias.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;Se, no seu próximo turno, você ainda não tiver
          realizado sua ação preparada, não pode mais realizá-la (embora possa
          preparar a mesma ação de novo).
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;Pelo resto do combate, sua Iniciativa fica
          imediatamente acima da qual você fez a ação preparada.
        </p>
      </>
    ),
    acao: "Padrão",
  },
  {
    titulo: "Usar uma Habilidade ou Item Mágico",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Algumas habilidades e itens mágicos, como poções,
        exigem uma ação padrão para serem usadas.
      </>
    ),
    acao: "Padrão",
  },
  {
    titulo: "Levantar-se",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você se levanta de uma posição caída. Isso não provoca
        ataques de oportunidade.
      </>
    ),
    acao: "Movimento",
  },
  {
    titulo: "Manipular Item",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Muitas vezes, manipular um item exige uma ação de
        movimento. Pegar um objeto em uma mochila, abrir ou fechar uma porta e
        atirar uma corda para alguém são ações de movimento.
      </>
    ),
    acao: "Movimento",
  },
  {
    titulo: "Mirar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você mira em um alvo que possa ver, dentro do alcance
        de sua arma. Isso anula a penalidade de –5 em testes de Pontaria
        realizados neste turno contra aquele alvo caso ele esteja engajado em
        combate corpo a corpo.
      </>
    ),
    acao: "Movimento",
  },
  {
    titulo: "Movimentar-se",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você pode percorrer uma distância igual a seu
        deslocamento (tipicamente 9m para raças de tamanho Médio). Outros tipos
        de movimento, como nadar, escalar ou cavalgar, também usam esta ação.
      </>
    ),
    acao: "Movimento",
  },
  {
    titulo: "Sacar ou Guardar Item",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Sacar ou guardar um item exige uma ação de movimento.
      </>
    ),
    acao: "Movimento",
  },
  {
    titulo: "Corrida",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você corre mais rapidamente que seu deslocamento
        normal. Veja a perícia Atletismo.
      </>
    ),
    acao: "Completa",
  },
  {
    titulo: "Golpe de Misericórdia",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você desfere um golpe letal em um oponente adjacente e
        indefeso. Um golpe de misericórdia é um acerto crítico automático. Além
        de sofrer dano, a vítima tem uma chance de morrer instantaneamente. Esta
        chance é de 25% (1 em 1d4) para personagens e NPCs importantes e de 75%
        (1 a 3 em 1d4) para NPCs secundários.
      </>
    ),
    acao: "Completa",
  },
  {
    titulo: "Investida",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você avança até o dobro de seu deslocamento (e no
        mínimo 3m) em linha reta e, no fim do movimento, faz um ataque corpo a
        corpo. Você recebe +2 no teste de ataque, mas sofre –2 na Defesa até o
        seu próximo turno, porque sua guarda fica aberta. Você não pode fazer
        uma investida em terreno difícil. Durante uma investida, você pode fazer
        a manobra atropelar como uma ação livre (mas não pode atropelar e atacar
        o mesmo alvo).
      </>
    ),
    acao: "Completa",
  },
  {
    titulo: "Lançar uma Magia",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Ao lançar magias com execução maior do que uma ação
        completa, você gasta uma ação completa a cada rodada.
      </>
    ),
    acao: "Completa",
  },
  {
    titulo: "Atrasar",
    descricao: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp;Escolhendo atrasar sua ação, você age mais tarde na
          ordem de Iniciativa, em relação à Iniciativa que rolou. Isto é o mesmo
          que reduzir sua Iniciativa voluntariamente pelo resto do combate.
          Quando sua nova Iniciativa chegar, você age normalmente. Você pode
          especificar este novo valor de Iniciativa ou apenas esperar até algum
          momento e então agir, fixando sua nova Iniciativa neste ponto. Atrasar
          é útil para ver o que seus amigos ou inimigos farão, antes de decidir
          o que você mesmo fará.
        </p>
        <ul>
          <li>
            &nbsp;&nbsp;&nbsp;<i>Limites para atrasar.</i> Você pode atrasar sua
            Iniciativa até –10 menos seu bônus de Iniciativa. Quando a contagem
            de Iniciativa chega a esse ponto, você deve agir ou abrir mão de
            qualquer ação na rodada. Por exemplo, um personagem com um bônus de
            Iniciativa +3 pode esperar até a contagem de Iniciativa chegar a
            –13. Nesse ponto, deve agir ou desistir de seu turno. Isso importa
            quando vários personagens atrasam suas ações.
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;<i>Vários atrasos.</i> Se vários personagens estão
            atrasando suas ações, aquele com o maior bônus de Iniciativa (ou a
            maior Destreza, em caso de empate) tem a vantagem. Se dois ou mais
            personagens que estejam atrasando quiserem agir na mesma contagem de
            Iniciativa, aquele com o maior bônus age primeiro. Se dois ou mais
            personagens estão tentando agir um depois do outro, aquele com o
            maior bônus de Iniciativa tem o direito de agir depois.
          </li>
        </ul>
      </>
    ),
    acao: "Livre",
  },
  {
    titulo: "Falar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Em geral, falar é uma ação livre. Lançar magias ou
        usar habilidades de classe que dependem da voz não são ações livres. O
        mestre também pode limitar aquilo que você consegue falar durante uma
        rodada (vinte palavras são o limite padrão).
      </>
    ),
    acao: "Livre",
  },
  {
    titulo: "Jogar-se no Chão",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Jogar-se no chão é uma ação livre. Você recebe os
        benefícios e penalidades normais por estar caído, mas normalmente não
        sofre dano ao se jogar no chão.
      </>
    ),
    acao: "Livre",
  },
  {
    titulo: "Largar um Item",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Deixar cair um item que esteja segurando é uma ação
        livre. Mas deixar cair (ou jogar) um item com a intenção de acertar algo
        é uma ação padrão. E deixar cair (ou jogar) um item para que outra
        pessoa agarre é uma ação de movimento.
      </>
    ),
    acao: "Livre",
  },
];

export const ManobrasRegras: ManobraRegra[] = [
  {
    titulo: "Agarrar",
    descricao: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp;Você segura uma criatura (por seu braço, sua roupa
          etc.). Uma criatura agarrada fica desprevenida e imóvel, sofre –2 nos
          testes de ataque e só pode atacar com armas leves. Ela pode se soltar
          com uma ação padrão, vencendo um teste de mano- bra oposto. Você só
          pode agarrar com um ataque desarmado ou arma natural e, enquanto
          agarra, fica com essa mão ou arma natural ocupada. Além disso, move-se
          metade do deslocamento normal, mas arrasta a criatura que estiver
          agarrando. Você pode soltá-la com uma ação livre. Você pode atacar uma
          criatura agarrada com sua mão livre. Se preferir, pode substituir um
          ataque por um teste de agarrar contra a criatura. Se vencer, causa
          dano de impacto igual a um ataque desarmado ou arma natural. Isso
          significa que você está esmagando ou sufocando o inimigo.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;Um personagem fazendo um ataque à distância contra
          um alvo envolvido na manobra agarrar tem 50% de chance de mirar no
          alvo errado!
        </p>
      </>
    ),
  },
  {
    titulo: "Derrubar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você deixa o alvo caído. Esta queda normalmente não
        causa dano. Se você vencer o teste oposto por 5 pontos ou mais, derruba
        o oponente com tanta força que também o empurra um quadrado em uma
        direção a sua escolha. Se isso o jogar além de um parapeito ou
        precipício, ele pode fazer um teste de Reflexos (CD 20) para se agarrar
        numa beirada.
      </>
    ),
  },
  {
    titulo: "Desarmar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você derruba um item que a criatura esteja segurando.
        Normalmente o item cai no mesmo lugar em que o alvo está (a menos que o
        alvo esteja voando, sobre uma ponte etc.). Se você vencer o teste oposto
        por 5 pontos ou mais, derruba o item com tanta força que também o
        empurra um quadrado em uma direção a sua escolha.
      </>
    ),
  },
  {
    titulo: "Empurrar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você empurra a criatura 1,5m. Para cada 5 pontos de
        diferença entre os testes, você empurra o alvo mais 1,5m. Você pode
        gastar uma ação de movimento para avançar junto com a criatura (até o
        limite do seu deslocamento).
      </>
    ),
  },
  {
    titulo: "Quebrar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você atinge um item que a criatura esteja segurando.
        Veja adiante em “Quebrando Objetos”.
      </>
    ),
  },
];

export const CondicoesRegras: CondicaoRegra[] = [
  {
    titulo: "Abalado",
    descricao:
      "O personagem sofre -2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado.",
    tipo: "Mental",
  },
  {
    titulo: "Agarrado",
    descricao:
      "O personagem fica desprevenido e imóvel, sofre -2 em testes de ataque e só pode atacar com armas leves. Ataques à distância contra um alvo envolvido em uma manobra agarrar têm 50% de chance de acertar o alvo errado.",
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
      "O personagem sofre -5 em testes de perícia e não pode se aproximar voluntariamente da fonte do medo.",
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
      "O personagem sofre -5 na Defesa contra ataques corpo a corpo e recebe +5 na Defesa contra ataques à distância (cumulativos com outras condições). Além disso, sofre -5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m.",
  },
  {
    titulo: "Cego",
    descricao:
      "O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre -5 em testes de perícias baseadas em Força ou Destreza. Todos os alvos de seus ataques recebem camuflagem total. Você é considerado cego enquanto estiver em uma área de escuridão total, a menos que algo lhe permita perceber no escuro.",
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
      "O personagem sofre -5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.",
  },
  {
    titulo: "Desprevenido",
    descricao:
      "O personagem sofre -5 na Defesa e em Reflexos. Você fica desprevenido contra inimigos que não possa perceber.",
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
      "O personagem fica lento, vulnerável e sofre -2 em testes de ataque.",
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
      "O personagem sofre -5 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos.",
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
      "Com a atenção presa em alguma coisa. O personagem sofre -5 em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou. Esta condição é anulada por ações hostis contra o personagem ou se o que o fascinou não estiver mais visível. Balançar uma criatura fascinada para tirá-la desse estado gasta uma ação padrão.",
    tipo: "Mental",
  },
  {
    titulo: "Fatigado",
    descricao:
      "O personagem sofre -2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fatigado novamente, em vez disso fica exausto.",
    tipo: "Cansaço",
  },
  {
    titulo: "Fraco",
    descricao:
      "O personagem sofre -2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fraco novamente, em vez disso fica debilitado.",
  },
  {
    titulo: "Frustrado",
    descricao:
      "O personagem sofre -2 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos. Se ficar frustrado novamente, em vez disso fica esmorecido.",
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
      "O personagem fica desprevenido, mas sofre -10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia.",
  },
  {
    titulo: "Lento",
    descricao:
      "Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e ele não pode correr ou fazer investidas.",
    tipo: "Movimento",
  },
  {
    titulo: "Ofuscado",
    descricao: "O personagem sofre -2 em testes de ataque e de Percepção.",
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
    descricao: "O personagem fica inconsciente e recebe redução de dano 8.",
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
      "O personagem sofre penalidade de armadura -5 e seu deslocamento é reduzido em -3m.",
    tipo: "Movimento",
  },
  {
    titulo: "Surdo",
    descricao:
      "O personagem não pode fazer testes de Percepção para ouvir e sofre -5 em testes de Iniciativa. Além disso, é considerado em condição ruim para lançar magias.",
    tipo: "Sentidos",
  },
  {
    titulo: "Surpreendido",
    descricao: "O personagem fica desprevenido e não pode fazer ações.",
  },
  {
    titulo: "Vulnerável",
    descricao: "O personagem sofre -2 na Defesa.",
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
