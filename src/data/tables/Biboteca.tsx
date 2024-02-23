import { Aventura, Cena, Combate, Partes } from "../constructors/Biboteca";
import React from "react";

function Quote({ children }: React.PropsWithChildren<{}>) {
  return <p className="italic font-bold">&nbsp;&nbsp;&nbsp;&nbsp;{children}</p>;
}
function Paragraph({ children }: React.PropsWithChildren<{}>) {
  return <p>&nbsp;&nbsp;&nbsp;&nbsp;{children}</p>;
}
function Content({ children }: React.PropsWithChildren<{}>) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

const SegredoDasMinas: Partes[] = [
  {
    titulo: "Introdução",
    intro: "Aqui começa a aventura de O Segredo das Minas",
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
    ],
  },
];

export const Biblioteca: Aventura[] = [
  {
    titulo: "O Segredo das Minas",
    partes: SegredoDasMinas,
  },
];
