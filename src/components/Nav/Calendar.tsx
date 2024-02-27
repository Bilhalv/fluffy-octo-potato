import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { NavModal } from "./NavModal";
import seedrandom from "seedrandom";
import { Input } from "@mui/material";

interface Dia {
  dia: number;
  nimb: boolean;
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
  const meses = Array.from({ length: 12 }, (_, i) => {
    const dias = Array.from({ length: 30 }, (_, j) => ({
      dia: j + 1,
      nimb: rng() > 0.5,
    }));
    return {
      nome: new Date(ano, i, 1).toLocaleString("pt-BR", { month: "long" }),
      dias,
    };
  });
  return { ano, meses };
}

export function Calendar() {
  const [ano, setAno] = React.useState(gerarAno(1420));
  return (
    <NavModal icon={<CalendarIcon size={24} />} tooltip="Calendar">
      <h2 className="text-center text-2xl">Calendário</h2>
      <Input fullWidth type="number" placeholder="Ano" defaultValue={1420} />
      <div className="flex flex-col overflow-scroll max-h-96">
        {ano.meses.map((mes, i) => (
          <div key={i} className="w-full">
            <h3 className="text-center">{mes.nome}</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Dom</th>
                  <th>Seg</th>
                  <th>Ter</th>
                  <th>Qua</th>
                  <th>Qui</th>
                  <th>Sex</th>
                  <th>Sáb</th>
                </tr>
              </thead>
              <tbody>
                {mes.dias.map((dia, j) => (
                  <>
                    <td
                      key={j}
                      className={`${
                        dia.nimb ? "bg-gray-300" : "bg-white"
                      } text-center`}
                    >
                      {dia.dia}
                    </td>
                    {dia.dia % 7 === 0 && <tr></tr>}
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
