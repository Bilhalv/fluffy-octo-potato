import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { NavModal } from "./NavModal";
import seedrandom from "seedrandom";
import { Input } from "@mui/material";

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

function gerarAno(ano: number) {
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

    let dayNimb = Math.floor(seedrandom((i + ano).toString())() * 31);

    const dias: {
      dia: number;
      nimb: boolean;
      diaDaSemana: number;
    }[] = [];

    for (let j = 1; j <= 30 + (haveNimb ? 1 : 0); j++) {
      dias.push({ dia: j, nimb: haveNimb && j === dayNimb, diaDaSemana: 0});
    }

    return {
      nome: mes,
      dias,
    };
  });

  let diaDaSemana = 0;
  for (let i = 0; i < meses.length; i++) {
    for (let j = 0; j < meses[i].dias.length; j++) {
      meses[i].dias[j].diaDaSemana = diaDaSemana;
      if (diaDaSemana === 6) {
        diaDaSemana = 0;
      } else {
        diaDaSemana++;
      }
    }
  }

  return {
    ano,
    meses,
  };
}

export function Calendar() {
  const [ano, setAno] = React.useState<Ano>(gerarAno(1420));
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
      <div className="flex flex-col overflow-scroll max-h-96 gap-2">
        {ano.meses.map((mes, i) => (
          <div key={i} className="w-full bg-white/75 rounded-xl p-4">
            <h3 className="text-center text-xl mb-2">{mes.nome}</h3>
            <table className="w-full">
              <thead>
                <tr>
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
                        dia.nimb ||
                        dia.diaDaSemana === 6 ||
                        dia.diaDaSemana === 0
                          ? "bg-red-400"
                          : ""
                      } text-center`}
                    >
                      {dia.dia}
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
