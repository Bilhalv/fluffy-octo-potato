import React from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  LucideMoveRight,
  MoveLeft,
  MoveRight,
  MoveRightIcon,
} from "lucide-react";
import { NavModal } from "./NavModal";
import seedrandom from "seedrandom";
import { IconButton, Input, Tooltip } from "@mui/material";
import { DefaultPopover } from "../Gerais/Popovers";

interface Dia {
  dia: number;
  nimb: boolean;
  diaDaSemana: number;
}

interface Mes {
  nome: string;
  dias: Dia[];
}

interface Ano {
  ano: number;
  meses: Mes[];
}

function getMoonPhase(year: number, month: number, day: number) {
  let r = day / 7;
  r = Math.floor(r + 0.5) % 30;
  let moon = r < 0 ? r + 30 : r;
  let moonPhases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌑"];
  let moonPhasesLabel = [
    "Nova",
    "Crescente Côncava",
    "Crescente",
    "Crescente Convexa",
    "Cheia",
    "Minguante Convexa",
    "Minguante",
    "Minguante Côncava",
    "Nova",
  ];
  let finalMoon = {
    moon: moon,
    emoji: moonPhases[moon],
    label: moonPhasesLabel[moon],
  };
  return finalMoon;
}

function GerarDiasdaSemana(mes: Mes[]) {
  let diaDaSemana = 0;

  for (let i = 0; i < mes.length; i++) {
    for (let j = 0; j < mes[i].dias.length; j++) {
      mes[i].dias[j].diaDaSemana = diaDaSemana;
      if (diaDaSemana === 6) {
        diaDaSemana = 0;
      } else {
        diaDaSemana++;
      }
    }
  }
  return mes;
}

function GerarMeses(ano: number) {
  const rng = seedrandom(ano.toString());
  let Nimb = Math.floor(rng() * 12) + 1;
  const monthsNimb: number[] = [];

  for (let idx = 0; idx < Nimb; idx++) {
    const x = Math.floor(seedrandom(String(idx + ano))() * 12);
    monthsNimb.push(x);
  }

  const meses: Mes[] = [
    "Caravana",
    "Pomo",
    "Keenvia",
    "Sirravia",
    "Vigília",
    "Prussvia",
    "Ceifa",
    "Contenda",
    "Clausura",
    "Pharstyth",
    "Véu",
    "Pyra",
  ].map((mes, i) => {
    let haveNimb: boolean = monthsNimb.includes(i);

    let dayNimb = Math.floor(seedrandom((i + ano).toString())() * 32 + 1);

    const dias: {
      dia: number;
      nimb: boolean;
      diaDaSemana: number;
    }[] = [];

    for (let j = 1; j <= 30 + (haveNimb ? 1 : 0); j++) {
      dias.push({ dia: j, nimb: haveNimb && j === dayNimb, diaDaSemana: 0 });
    }

    return {
      nome: mes,
      dias,
    };
  });
  return GerarDiasdaSemana(meses);
}

function gerarAno(ano: number) {
  return { ano, meses: GerarMeses(ano) };
}

export function Calendar() {
  const [ano, setAno] = React.useState<Ano>(gerarAno(1420));
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
            O primeiro e mais importante dia do ano. Foi no Dia do Reencontro,
            há exatos 400 anos, que a caravana de refugiados de Lamnor chegou
            aos pés da estátua de Valkaria, iniciando a era atual de Arton.
            Nesta data, grandes festas são celebradas por todo o Reinado — em
            especial em Valkaria, que fica com suas ruas, tavernas e estalagens
            lotadas.
          </p>
          <p>
            O primeiro dia do ano também é o equinócio da primavera. Nesta data,
            povos silvestres, como elfos, sílfides e centauros, cantam e dançam
            ao redor de fogueiras para comemorar o fim do inverno e o início de
            um novo ciclo.
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
            Sete dias de festividades em Sckharshantallas. As ruas são tomadas
            por enormes dragões feitos de vime, dançarinos, mágicos e companhias
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
            engenhocas no Palácio Imperial de Valkaria. Recebe inventores de
            todas as raças, incluindo goblins — para desgosto de nobres
            conservadores.
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
            Comemoração da fundação do reino de Ahlen. Durante as festividades
            que ocorrem na capital, Thartann, todos usam máscaras e as roupas
            que quiserem — é o único dia do ano em que não há distinção entre
            nobres e plebeus. O ponto culminante das festividades é o baile que
            acontece nos salões do Palácio Rishantor, sede da corte ahleniense.
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
            quem puderem para seus reinos de trevas, seres feéricos cavalgam
            pelos campos e magias nocivas têm seu poder dobrado. Dizem que a
            primeira Noite das Sombras aconteceu quando a ancestral maga
            goblinoide Hangpharstyth enlouqueceu e morreu em uma explosão
            mística em seu castelo no istmo que separava Arton Norte e Sul. Os
            ecos de seu último grito atravessaram os Planos de existência e, uma
            vez por ano, todo artoniano se encolhe em sua casa, mantendo suas
            portas e janelas fechadas e orando aos deuses por proteção.
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
            Neste dia, o povo busca orientação de seus clérigos. Dizem que,
            nessa data, as profecias costumam ser mais precisas e informativas;
            ou, ainda, que as profecias desse dia falam de eventos importantes.
          </p>
        </>
      ),
    },
  ];
  function FeriadoCheck(mes: number, dia: number) {
    return feriados.find(
      (feriado) => feriado.mes === mes && feriado.dia === dia
    );
  }
  const [diaAtual, setDiaAtual] = React.useState({
    dia: 1,
    mes: 1,
  });
  const changeDia = (plus: boolean) => {
    let newDia = diaAtual.dia + (plus ? 1 : -1);
    let newMes = diaAtual.mes;
    const MaxDiaAtual = ano.meses[diaAtual.mes - 1].dias.length;
    if (newDia > MaxDiaAtual && newMes < 12) {
      newDia = 1;
      newMes++;
    } else if (newDia < 1 && newMes > 1) {
      newMes--;
      newDia = ano.meses[newMes - 1].dias.length;
    } else if (newDia < 1 && newMes === 1) {
      newMes = 12;
      setAno(gerarAno(ano.ano - 1));
      newDia = ano.meses[11].dias.length;
    } else if (newDia > MaxDiaAtual && newMes >= 12) {
      newMes = 1;
      setAno(gerarAno(ano.ano + 1));
      newDia = 1;
    }
    setDiaAtual({ dia: newDia, mes: newMes });
  };
  const changeDiaInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    isDay: boolean
  ) => {
    let newDia = isDay ? parseInt(e.target.value) : diaAtual.dia;
    let newMes = isDay ? diaAtual.mes : parseInt(e.target.value);
    const MaxDiaAtual = ano.meses[diaAtual.mes - 1].dias.length;
    const MaxMesAtual = 12;
    if (isDay) {
      if (newDia > MaxDiaAtual) {
        newDia = MaxDiaAtual;
        newMes++;
        if (newMes > MaxMesAtual) {
          newMes = 1;
          setAno(gerarAno(ano.ano + 1));
          newDia = 1;
        }
      } else if (newDia < 1) {
        newDia = 1;
        newMes--;
        if (newMes < 1) {
          newMes = 12;
          setAno(gerarAno(ano.ano - 1));
          newDia = ano.meses[11].dias.length;
        }
      }
    } else {
      if (newMes > MaxMesAtual) {
        newMes = 1;
        setAno(gerarAno(ano.ano + 1));
        newDia = 1;
      } else if (newMes < 1) {
        newMes = 12;
        setAno(gerarAno(ano.ano - 1));
        newDia = ano.meses[11].dias.length;
      }
    }
    setDiaAtual({ dia: newDia, mes: newMes });
  };
  return (
    <NavModal icon={<CalendarIcon size={24} />} tooltip="Calendar">
      <h2 className="text-center text-2xl">Calendário</h2>
      <Input
        fullWidth
        type="number"
        placeholder="Ano"
        value={ano.ano}
        onChange={(e) => setAno(gerarAno(parseInt(e.target.value)))}
      />
      <div className="flex justify-between my-4 text-white">
        <IconButton
          onClick={() => changeDia(false)}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255,0,0,0.25)",
            },
          }}
        >
          <ChevronLeft />
        </IconButton>
        <div className="">
          <p className="text-center w-fit mx-auto">Dia atual</p>
          <div className="flex gap-5">
            <Input
              sx={{ width: "3rem" }}
              type="number"
              value={diaAtual.dia}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeDiaInput(e, true)}
            />
            <p>/</p>
            <Input
              sx={{ width: "3rem" }}
              type="number"
              value={diaAtual.mes}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeDiaInput(e, false)}
            />
          </div>
        </div>
        <IconButton
          onClick={() => changeDia(true)}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255,0,0,0.25)",
            },
          }}
        >
          <ChevronRight />
        </IconButton>
      </div>
      <div className="flex flex-col overflow-scroll max-h-96 gap-2">
        {ano.meses.map((mes, i) => (
          <div key={i} className="w-full bg-white/75 rounded-xl p-4">
            <h3 className="text-center text-xl mb-2">{mes.nome}</h3>
            <table className="w-full">
              <thead>
                <tr className="text-xs">
                  <th>Leen</th>
                  <th>Valk</th>
                  <th>Hedryl</th>
                  <th>Luna</th>
                  <th>Astar</th>
                  <th>Dallia</th>
                  <th>Haya</th>
                </tr>
              </thead>
              <tbody>
                {mes.dias.map((dia, j) => (
                  <>
                    {dia.diaDaSemana !== 0 &&
                      j === 0 &&
                      Array.from({ length: dia.diaDaSemana }).map((_, k) => (
                        <td key={k}></td>
                      ))}
                    <td
                      key={j}
                      className={`${
                        dia.diaDaSemana === 6 || dia.diaDaSemana === 0
                          ? "bg-red-400"
                          : ""
                      } text-center select-none ${
                        dia.nimb || FeriadoCheck(j + 1, dia.dia)
                          ? "text-white hover:scale-110 transition-all"
                          : ""
                      } ${
                        dia.dia === diaAtual.dia && i + 1 === diaAtual.mes
                          ? "bg-red-600 scale-110 transition-all rounded-3xl"
                          : ""
                      }
                      
                      `}
                    >
                      {dia.nimb || FeriadoCheck(j + 1, dia.dia) ? (
                        <DefaultPopover
                          titulo={String(dia.dia)}
                          content={
                            <div className="text-justify px-4 py-2 text-xs">
                              {dia.nimb && (
                                <p className="text-center text-sm font-bold font-tormenta">
                                  Dia de Nimb! O rei da aleatoriedade!!🎲
                                </p>
                              )}
                              {FeriadoCheck(j + 1, dia.dia) && (
                                <p>
                                  <b className="text-sm font-tormenta">
                                    {FeriadoCheck(j + 1, dia.dia)?.nome}
                                  </b>
                                  {FeriadoCheck(j + 1, dia.dia)?.descricao}
                                </p>
                              )}
                            </div>
                          }
                        />
                      ) : (
                        <>{dia.dia}</>
                      )}
                      <Tooltip title={getMoonPhase(ano.ano, i, dia.dia).label}>
                        <p className="text-xs">
                          {getMoonPhase(ano.ano, i, dia.dia).emoji}
                        </p>
                      </Tooltip>
                    </td>
                    {dia.diaDaSemana === 6 && <tr></tr>}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </NavModal>
  );
}
