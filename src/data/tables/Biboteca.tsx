import { Aventura, Cena, Combate, Partes } from "../constructors/Biboteca";
import React from "react";
import { MercenariosDaZhura, StrokaECapangas } from "./NPCs";

function Quote({ children }: React.PropsWithChildren<{}>) {
  return (
    <p className="italic font-bold font-tormenta">
      &nbsp;&nbsp;&nbsp;&nbsp;{children}
    </p>
  );
}
function Paragraph({ children }: React.PropsWithChildren<{}>) {
  return <p>&nbsp;&nbsp;&nbsp;&nbsp;{children}</p>;
}
function Content({ children }: React.PropsWithChildren<{}>) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
function CombateComponent({ content }: { content: string }) {
  return (
    <p className="font-tormenta">
      &nbsp;&nbsp;&nbsp;&nbsp;<b className="text-red-600">Criaturas. </b>
      {content}
    </p>
  );
}

const SegredoDasMinas: Partes[] = [
  {
    titulo: "Introdução",
    intro:
      "A aventura começa quando um mensageiro goblin, a mando de Ezequias, entra em contato com o grupo. Segundo o goblin, o inventor tem um pedidonimportante para os heróis. Quando o grupo aceita a missão, o goblin os leva até a Minérios Maravilhosos, a oficina de Ezequias, no Distrito da Bigorna.",
    cenas: [
      {
        titulo: "O Pedido de Ezequias",
        content: (
          <Content>
            <Paragraph>
              O Distrito da Bigorna é a região mais povoada e movi- mentada de
              Yuvalin, repleta de casas, tavernas e oficinas. Na Minérios, o
              grupo encontra Ezequias trabalhando em itens de forja. O inventor
              está ocupado, mas, quando vê os aventureiros, interrompe o que
              está fazendo.
            </Paragraph>
            <Paragraph>
              Ezequias explica a situação: mineradores que trabalham para ele
              encontraram uma câmara anã nas redondezas de Yuvalin. O inventor
              acredita que o lugar possa conter aço-rubi. Mais importante,
              informações contidas em documentos encontrados pelos minera- dores
              indicam que o lugar pode conter uma mítica ferramenta-artefato
              capaz de forjar o valioso material. O lefou pede que os heróis
              investiguem a câmara em busca dessa ferramenta. Pelo serviço,
              oferece T$ 1.000 por aventureiro.
            </Paragraph>
            <Paragraph>
              O inventor também menciona que os mineradores que foram investigar
              a área nunca voltaram. Ezequias teme que, por causa de seus
              desafetos com a Guilda, os trabalhadores possam ter sido
              capturados ou mor- tos, então avisa que o grupo precisa estar
              preparado para problemas.
            </Paragraph>
            <Quote>
              “Estou confiando essa missão a vocês. É muito importante para
              minha pesquisa que vocês encontrem o artefato! É a melhor forma de
              se forjar aço-rubi e não ouso imaginar o que acontecerá se ele
              cair em mãos erradas. Por favor, peguem-no custe o que custar!
              Além do pagamento, vocês terão minha eterna gratidão”.
            </Quote>
            <Paragraph>
              Se os aventureiros pedirem mais dinheiro, Ezequias dobrará a
              proposta, tamanha sua dedicação à busca. A recompensa será
              entregue assim que a ferramenta-artefato for levada ao lefou. Caso
              os heróis façam mais perguntas sobre a ferramenta, Ezequias dirá
              que não sabe exatamente como ela é, só que é um item muito valioso
              que pode forjar aço-rubi.
            </Paragraph>
          </Content>
        ),
      },
      {
        titulo: "O Pedido de Lonien",
        content: (
          <Content>
            <Paragraph>
              Uma vez que os aventureiros aceitem a missão, podem se preparar na
              cidade. Quando o grupo estiver partindo, uma humana jovem, alta e
              de cabelos claros surge correndo na direção deles. Seu nome é
              Lonien. Ela tem uma expressão aflita e pergunta se os aven-
              tureiros estão indo para as minas. Se responderem que sim, ela diz
              que seu irmão está desaparecido e que deve estar lá. Ele se chama
              Jaren e, como ela, é alto e de cabelos claros. Segundo Lonien, seu
              irmão tem agido de forma esquisita desde que foi expulso da Guilda
              dos Mineradores.
            </Paragraph>
            <Quote>
              “Não sei o que se passa na cabeça dele... Desde que foi expulso da
              Guilda dos Mineradores, Jaren não parece mais o mesmo... Ele
              estava falando muito sobre essa mina anã de Ezequias e de repente
              sumiu de casa! Temo que possa ter se perdido lá ou ter feito uma
              bobagem ainda pior. Vocês poderiam procurar meu irmão e trazê-lo
              de volta, por favor?”
            </Quote>
            <Paragraph>
              Caso o grupo pergunte o motivo de Jaren ter sido expulso da
              Guilda, Lonien diz que ele foi denunciado por Ezequias por desvio
              de dinheiro.
            </Paragraph>
            <Paragraph>
              Se os aventureiros mentirem e falarem que não estão indo para as
              minas, Lonien pede desculpas por ter incomodado.
            </Paragraph>
          </Content>
        ),
      },
      {
        titulo: "Emboscada Anã",
        combate: {
          titulo: "Stroka e anões capangas x4.",
          content: [...StrokaECapangas],
        },
        content: (
          <Content>
            <Paragraph>
              Os aventureiros seguem em direção às minas. É uma viagem curta
              pelos campos gelados ao sopé das Uivantes. No meio da viagem, o
              grupo é emboscado por anões mercenários escondidos em valas ao
              lado da estrada. O grupo deve fazer um teste de Percepção (CD 15).
              Personagens que falharem são surpreendidos. Há quatro capangas e a
              líder, Stroka. Se ela ficar com menos de 15 PV, pede clemência.
            </Paragraph>
            <CombateComponent content="Stroka e anões capangas x4." />
            <Quote>
              “Ei, não foi nada pessoal! Eu e meus cupinchas fomos contratados
              pela Guilda dos Mineradores para dar um trato nos amigos de
              Ezequias. Parece que ele está criando problemas para a Guilda! Mas
              não vou mais ficar no caminho de vocês, tá bom?”
            </Quote>
            <Paragraph>O grupo pode decidir o destino da anã.</Paragraph>
          </Content>
        ),
      },
      {
        titulo: "A Entrada",
        content: (
          <Content>
            <Paragraph>
              A entrada da câmara anã na mina é um salão grande com piso de
              ladrilhos e colunas nas paredes. Em outros tempos deve ter sido
              bonito, mas hoje está empoeirado e repleto de rachaduras nos
              ladrilhos e colunas. No fundo do salão há um corredor reto,
              estreito e escuro. No final dele, há um elevador velho, mas que
              ainda funciona. Quando os aventureiros entram e puxam a alavanca,
              descem para o primeiro andar da câmara, o mais próximo da
              superfície (na perspectiva anã, seria o quarto, mas usaremos a
              perspectiva humana no texto).
            </Paragraph>
            <Paragraph>
              O elevador para no primeiro andar. Os aventureiros podem descer
              para os outros níveis da mina. Porém, um teste de Sabedoria (CD
              10) revela que isso não é boa ideia; no Reinado, é senso comum que
              masmorras são mais perigosas no fundo do que na superfície. Se os
              jogadores insistirem em explorar os andares fora de ordem, não os
              impeça. De qualquer forma, para abrir o cofre no quarto andar,
              eles precisarão de peças encontradas em todos os andares.
            </Paragraph>
          </Content>
        ),
      },
    ],
  },
  {
    titulo: "Os Mineradores Perdidos",
    intro:
      "O primeiro andar está ocupado por um bando mercenário liderado pela anã Zhura.",
    cenas: [
      {
        titulo: "Corredor de Acesso",
        content: (
          <Content>
            <Paragraph>
              Saindo do elevador, o grupo se vê num corredor. Um teste de
              Investigação (CD 15) revela indícios de uso recente (pegadas na
              poeira, tochas oleadas nas paredes...). Os personagens podem ir
              para a direita (área 2) ou para a esquerda (área 4).
            </Paragraph>
          </Content>
        ),
      },
      {
        titulo: "Vigias Atentos",
        combate: {
          titulo: "Anões veteranos x2.",
          content: [MercenariosDaZhura[1], MercenariosDaZhura[1]],
        },
        content: (
          <Content>
            <Paragraph>
              Seguindo pela direita, os personagens passam por uma porta
              quebrada e chegam a uma sala larga com dois anões veteranos de
              guarda.
            </Paragraph>
            <Paragraph>
              Os anões estão atentos; para surpreendê-los, os personagens
              precisam fazer um teste de Furtividade oposto à Percepção dos
              inimigos (+10). Se falharem, os anões os percebem e atacam. Na
              segunda rodada do combate, os anões pedem ajuda aos humanos da
              área 3, que se juntam ao combate na terceira rodada.
            </Paragraph>
            <CombateComponent content="Anões veteranos x2." />
            <Paragraph>
              Um dos anões possui um papel dobrado com uma mensagem:{" "}
              <i>
                Não se esqueçam: a Guilda dos Mineradores paga bem, mas exige
                muito! Não falhem, ou eles chamarão outros mercenários.
                Precisamos agir a qualquer sinal de pessoas mandadas pelo tal
                Ezequias. Não me decepcionem. — Zhura
              </i>
            </Paragraph>
          </Content>
        ),
      },
    ],
  },
];

export const Biblioteca: Aventura[] = [
  {
    titulo: "O Segredo das Minas",
    partes: SegredoDasMinas,
  },
];
