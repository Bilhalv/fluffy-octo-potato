import React, { createContext, useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import NPCBlock from "../../components/Fichas/NPC";
import PersonagemBlock from "../../components/Fichas/Personagem";
import Nav from "../../components/Nav/Nav";
import { NPCShown } from "../../data/constructors/NPC";
import { Personagens } from "../../data/tables/Personagens";
import { showToast } from "../../components/Gerais/ToastComponent";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { PinOff } from "lucide-react";

export type turn = {
  nome: string;
  iniciativa: number;
  desempate: number;
};

interface BlockProps {
  turnOrder: {
    setTurnOrder: React.Dispatch<React.SetStateAction<turn[]>>;
    turnOrder: turn[];
  };
  active: {
    setActive: React.Dispatch<React.SetStateAction<string>>;
    active: string;
  };
  move: (side: "left" | "right") => void;
  toastOpen: {
    orderToast: boolean;
    setOrderToast: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const TurnOrderContext = createContext<BlockProps>({
  turnOrder: { setTurnOrder: () => {}, turnOrder: [] },
  active: { setActive: () => {}, active: "" },
  move: () => {},
  toastOpen: { orderToast: false, setOrderToast: () => {} },
});

interface NPCsContextProps {
  npcsShown: NPCShown[];
  setNpcsShown: React.Dispatch<React.SetStateAction<NPCShown[]>>;
  deleteNPC: (id: number) => void;
  moveNPC: (pos: string, index: number) => void;
  addNPC: (newNPC: NPCShown | NPCShown[]) => void;
}

export const NPCsContext = createContext<NPCsContextProps>({
  npcsShown: [],
  setNpcsShown: () => {},
  deleteNPC: () => {},
  moveNPC: () => {},
  addNPC: () => {},
});

const Home = () => {
  const [npcsShown, setNpcsShown] = useState<NPCShown[]>(
    JSON.parse(localStorage.getItem("npcs") || "[]") as NPCShown[]
  );

  function deleteNPC(id: number) {
    setNpcsShown((prevNpcs) => prevNpcs.filter((npc) => npc.id !== id));
  }

  function moveNPC(pos: string, index: number) {
    if (
      (pos === "left" && index > 0) ||
      (pos === "right" && index < npcsShown.length - 1)
    ) {
      const newNpcs = [...npcsShown];
      const swapIndex = pos === "left" ? index - 1 : index + 1;
      [newNpcs[index], newNpcs[swapIndex]] = [
        newNpcs[swapIndex],
        newNpcs[index],
      ];
      setNpcsShown([...newNpcs]);
      localStorage.setItem("npcs", JSON.stringify(newNpcs));
    }
  }

  function addNPC(npc: NPCShown | NPCShown[]) {
    const addedNPCs = Array.isArray(npc) ? npc : [npc];
    setNpcsShown([...npcsShown, ...addedNPCs]);
    showToast({
      title: Array.isArray(npc) ? "NPCs Adicionados" : "NPC Adicionado",
      message: Array.isArray(npc)
        ? `${npc.length} NPCs foram adicionados à lista de NPCs`
        : `${npc.nome} foi adicionado à lista de NPCs`,
      duration: 3000,
    });
  }

  useEffect(() => {
    localStorage.setItem("npcs", JSON.stringify(npcsShown));
  }, [npcsShown]);

  //turn Order toast
  const [turnOrder, setTurnOrder] = useState<turn[]>(
    JSON.parse(localStorage.getItem("turnOrder") || "[]")
  );
  const [orderToast, setOrderToast] = useState<boolean>(false);
  const [active, setActive] = useState<string>(turnOrder[0]?.nome || "");
  const move = (pos: "left" | "right") => {
    let index = turnOrder.findIndex((turn) => turn.nome === active);
    let newIndex = pos === "left" ? index - 1 : index + 1;
    let turn =
      turnOrder[
        newIndex >= turnOrder.length
          ? 0
          : newIndex < 0
          ? turnOrder.length - 1
          : newIndex
      ];
    setActive(turn.nome);
    toast.dismiss();
  };
  useEffect(() => {
    if (orderToast) {
      toast.info(
        <div>
          <div className="flex flex-col gap-3 items-center">
            <h1>Turno</h1>
            <div className="flex justify-evenly w-full">
              <IconButton
                onClick={() => {
                  move("left");
                  toast.dismiss();
                }}
              >
                <ArrowBackIos />
              </IconButton>
              <p>{active}</p>
              <IconButton
                onClick={() => {
                  move("right");
                  toast.dismiss();
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            </div>
          </div>
        </div>,
        {
          position: "top-right",
          autoClose: false,
          draggable: true,
          icon: false,
          style: {
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
          },
          theme: "dark",
          transition: Bounce,
          closeButton: ({ closeToast }) => (
            <button onClick={closeToast}>
              <PinOff />
            </button>
          ),
        }
      );
    } else {
      toast.dismiss();
    }
  }, [active, move, orderToast]);

  return (
    <>
      <NPCsContext.Provider
        value={{ npcsShown, setNpcsShown, deleteNPC, moveNPC, addNPC }}
      >
        <TurnOrderContext.Provider
          value={{
            move,
            toastOpen: {
              orderToast,
              setOrderToast,
            },
            active: {
              active,
              setActive,
            },
            turnOrder: {
              turnOrder,
              setTurnOrder,
            },
          }}
        >
          <Nav />
          <body className="bg-bg-t20 bg-fixed bg-center p-8 font-tormenta flex flex-col gap-10">
            <div className="bg-white p-4 bg-opacity-25 rounded-xl flex justify-center flex-wrap gap-4 backdrop-blur-[3px]">
              {Personagens.map((personagem) => (
                <PersonagemBlock Personagem={personagem} />
              ))}
            </div>
            {npcsShown.length > 0 && (
              <div className="bg-white p-4 bg-opacity-25 rounded-xl flex flex-col gap-4 relative">
                <FlipMove typeName={null}>
                  <div className="flex justify-evenly opacity-0">
                    {npcsShown.map((npc: NPCShown) => (
                      <p>
                        {npc.nome} - {npc.id}
                      </p>
                    ))}
                  </div>
                  <div className="flex  justify-center flex-wrap gap-4 relative">
                    {npcsShown.map((npc: NPCShown) => (
                      <NPCBlock NPC={npc} key={npc.id} />
                    ))}
                  </div>
                </FlipMove>
              </div>
            )}
            <ToastContainer stacked />
          </body>
        </TurnOrderContext.Provider>
      </NPCsContext.Provider>
    </>
  );
};

export default Home;
