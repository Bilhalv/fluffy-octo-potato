import {
  AirlineStops,
  DirectionsRun,
  Sick,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { AddNpc } from "./AddNPC";
import { TurnOrder } from "./TurnOrder";
import { regras } from "../../data/constructors/Regra";
import { PDF } from "./PDF";
import { Eraser } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { NPCsContext } from "../../pages/Home";
import { showToast } from "../Gerais/ToastComponent";
import { SearchComponent } from "./SearchComponent";
import {
  AcoesRegras,
  CondicoesRegras,
  ManobrasRegras,
} from "../../data/tables/Regras";
import { Biboteca } from "./Biboteca";
import { Calendar } from "./Calendar";

interface fixedContextProps {
  regrasFixadas: regras[];
  setRegrasFixadas: React.Dispatch<React.SetStateAction<regras[]>>;
}

export const fixedContext = React.createContext<fixedContextProps>({
  regrasFixadas: [],
  setRegrasFixadas: () => {},
});

export default function Nav() {
  const { setNpcsShown } = useContext(NPCsContext);
  const [tempAside, setTempAside] = React.useState<boolean>(false);
  const [aside, setAside] = React.useState<boolean>(false);
  function toggleAside() {
    setTempAside(!tempAside);
    setAside(!aside);
  }
  const [regrasFixadas, setRegrasFixadas] = React.useState<regras[]>([]);
  return (
    <>
      <fixedContext.Provider value={{ regrasFixadas, setRegrasFixadas }}>
        {aside ? (
          <aside
            className={`bg-white w-fit flex flex-col bg-opacity-25 fixed rounded-xl p-2 top-2 left-2 gap-2 items-center text-center text-white drop-shadow-[_2px_2px_rgba(0,0,0,0.25)] my-auto font-tormenta z-50 transition-transform ${
              tempAside ? "animate-fade-in-left" : "animate-fade-out-left"
            }`}
          >
            <button
              onClick={() => toggleAside()}
              className="bg-red-600 rounded-full p-2 hover:bg-red-400 transition-all hover:scale-110"
            >
              <VisibilityOff />
            </button>
            <AddNpc />
            <TurnOrder />
            <SearchComponent
              icon={<DirectionsRun />}
              regras={AcoesRegras}
              title="Acoes"
            />
            <SearchComponent
              icon={<Sick />}
              regras={CondicoesRegras}
              title="Condicoes"
            />
            <SearchComponent
              icon={<AirlineStops />}
              regras={ManobrasRegras}
              title="Manobras"
            />
            <PDF />
            <button
              className="p-2 bg-red-600 rounded-full hover:scale-110 hover:bg-red-400 transition-all"
              onClick={() => {
                localStorage.setItem("npcs", JSON.stringify([]));
                setNpcsShown([]);
                showToast({
                  title: "NPC's Limpos",
                  message: "Todos os NPC's foram removidos",
                  duration: 3000,
                });
              }}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Limpar NPC's"
              data-tooltip-variant="error"
            >
              <Eraser />
            </button>
            <Biboteca />
            <Calendar />
            <Tooltip
              id="my-tooltip"
              style={{
                backgroundColor: "rgba(255, 0, 0, 0.8)",
                textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
              }}
            />
          </aside>
        ) : (
          <button
            onClick={toggleAside}
            className={
              "bg-red-600 rounded-full p-2 fixed top-2 left-[-20px] hover:left-0 transition-all opacity-50 z-50 hover:opacity-100 " +
              (tempAside ? "animate-fade-in-left" : "animate-fade-out-left")
            }
          >
            <Visibility />
          </button>
        )}
      </fixedContext.Provider>
    </>
  );
}
