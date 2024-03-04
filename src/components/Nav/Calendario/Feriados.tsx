import React from "react";

type Feriado = {
  nome: string;
  mes: number;
  dia: number;
  descricao: React.ReactNode;
};

const feriados: Feriado[] = [
  {
    nome: "Dia do Reencontro",
    mes: 1,
    dia: 1,
    descricao: (
      <>
        <p>
          O primeiro e mais importante dia do ano. Foi no Dia do Reencontro, há
          exatos 400 anos, que a caravana de refugiados de Lamnor chegou aos pés
          da estátua de Valkaria, iniciando a era atual de Arton. Nesta data,
          grandes festas são celebradas por todo o Reinado — em especial em
          Valkaria, que fica com suas ruas, tavernas e estalagens lotadas.
        </p>
        <p>
          O primeiro dia do ano também é o equinócio da primavera. Nesta data,
          povos silvestres, como elfos, sílfides e centauros, cantam e dançam ao
          redor de fogueiras para comemorar o fim do inverno e o início de um
          novo ciclo.
        </p>
      </>
    ),
  },
  {
    nome: "Cerimônia do Plantio",
    mes: 1,
    dia: 15,
    descricao: (
      <>
        <p>
          Este feriado, popular entre camponeses, celebra o início do plantio.
          Costuma-se plantar uma semente simbólica no solo, para afastar o
          inverno e permitir a chegada da primavera. Também nesta data a Ordem
          de Lena realiza a cerimônia que ordena suas jovens clérigas (diz-se
          que é neste dia que Lena desce dos céus para fecundá-las).
        </p>
      </>
    ),
  },
  {
    nome: "Sckharal",
    mes: 3,
    dia: 20,
    descricao: (
      <>
        <p>
          Sete dias de festividades em Sckharshantallas. As ruas são tomadas por
          enormes dragões feitos de vime, dançarinos, mágicos e companhias
          teatrais. O último dia do Sckharal é reservado à execução de
          criminosos.
        </p>
      </>
    ),
  },
  {
    nome: "Dia da Memória",
    mes: 4,
    dia: 6,
    descricao: (
      <>
        <p>
          Uma cerimônia recente, celebrada no Reinado para comemorar o fim da
          Guerra Artoniana e honrar aqueles que caíram frente às tropas
          puristas.
        </p>
      </>
    ),
  },
  {
    nome: "Cerimônia de Admissão da Ordem da Luz",
    mes: 5,
    dia: 12,
    descricao: (
      <>
        <p>
          Nessa época, Norm fica lotada de jovens nobres, escudeiros e
          aventureiros almejando entrar na prestigiosa ordem de cavalaria.
        </p>
      </>
    ),
  },
  {
    nome: "Exposição de Inventos",
    mes: 7,
    dia: 1,
    descricao: (
      <>
        <p>
          Criado por Lorde Niebling, este evento é uma grande mostra de
          engenhocas no Palácio Imperial de Valkaria. Recebe inventores de todas
          as raças, incluindo goblins — para desgosto de nobres conservadores.
        </p>
      </>
    ),
  },
  {
    nome: "Grande Feira",
    mes: 8,
    dia: 11,
    descricao: (
      <>
        <p>
          Esta semana de festividades atrai milhares de aventureiros e
          visitantes para Nova Malpetrim.
        </p>
      </>
    ),
  },
  {
    nome: "Noite das Máscaras",
    mes: 9,
    dia: 17,
    descricao: (
      <>
        <p>
          Comemoração da fundação do reino de Ahlen. Durante as festividades que
          ocorrem na capital, Thartann, todos usam máscaras e as roupas que
          quiserem — é o único dia do ano em que não há distinção entre nobres e
          plebeus. O ponto culminante das festividades é o baile que acontece
          nos salões do Palácio Rishantor, sede da corte ahleniense.
        </p>
      </>
    ),
  },
  {
    nome: "Noite das Sombras",
    mes: 10,
    dia: 7,
    descricao: (
      <>
        <p>
          Nesta temida noite, espíritos nefastos vagam pelo mundo arrastando
          quem puderem para seus reinos de trevas, seres feéricos cavalgam pelos
          campos e magias nocivas têm seu poder dobrado. Dizem que a primeira
          Noite das Sombras aconteceu quando a ancestral maga goblinoide
          Hangpharstyth enlouqueceu e morreu em uma explosão mística em seu
          castelo no istmo que separava Arton Norte e Sul. Os ecos de seu último
          grito atravessaram os Planos de existência e, uma vez por ano, todo
          artoniano se encolhe em sua casa, mantendo suas portas e janelas
          fechadas e orando aos deuses por proteção.
        </p>
      </>
    ),
  },
  {
    nome: "Dia da Profecia",
    mes: 12,
    dia: 3,
    descricao: (
      <>
        <p>
          Neste dia, o povo busca orientação de seus clérigos. Dizem que, nessa
          data, as profecias costumam ser mais precisas e informativas; ou,
          ainda, que as profecias desse dia falam de eventos importantes.
        </p>
      </>
    ),
  },
];

export function FeriadoCheck(mes: number, dia: number) {
  return feriados.find((feriado) => feriado.mes === mes && feriado.dia === dia);
}
