import React from "react";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavModal } from "./NavModal";
import { IconButton, Input, Tooltip } from "@mui/material";
import { DefaultPopover } from "../Gerais/Popovers";
import {
  Ano,
  gerarAno,
  getMoonPhase,
} from "./Calendario/Functions.tsx";
import {
  FeriadoCheck
} from './Calendario/Feriados.tsx'

export function Calendar() {
  const [ano, setAno] = React.useState<Ano>(gerarAno(1420));

  interface Dia {
    dia: number;
    mes: number;
  }
  
  const [diaAtual, setDiaAtual] = React.useState<Dia>(
    localStorage.getItem("diaAtual") === null
      ? {
          dia: 1,
          mes: 1,
        }
      : (JSON.parse(localStorage.getItem("diaAtual") as string) as Dia)
  );

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

  React.useEffect(() => {
    localStorage.setItem("diaAtual", JSON.stringify(diaAtual));
  }, [diaAtual]);

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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changeDiaInput(e, true)
              }
            />
            <p>/</p>
            <Input
              sx={{ width: "3rem" }}
              type="number"
              value={diaAtual.mes}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changeDiaInput(e, false)
              }
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
                      <Tooltip title={getMoonPhase(ano.ano, dia).label}>
                        <p className="text-xs">
                          {getMoonPhase(ano.ano, dia).emoji}
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
