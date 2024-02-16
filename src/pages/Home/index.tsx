import React, { createContext, useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import NPCBlock from "../../components/Fichas/NPC";
import PersonagemBlock from "../../components/Fichas/Personagem";
import Nav from "../../components/Nav/Nav";
import { NPCShown } from "../../data/constructors/NPC";
import { Personagens } from "../../data/tables/Personagens";
import { showToast } from "../../components/Gerais/ToastComponent";
import { ToastContainer } from "react-toastify";

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
    if (Array.isArray(npc)) {
      setNpcsShown([...npcsShown, ...npc]);
      showToast({
        title: "NPCs Adicionados",
        message: `${npc.length} NPCs foram adicionados à lista de NPCs`,
        duration: 3000,
      });
      return;
    } else {
      setNpcsShown([...npcsShown, npc]);
      showToast({
        title: "NPC Adicionado",
        message: `${npc.nome} foi adicionado à lista de NPCs`,
        duration: 3000,
      });
    }
  }

  useEffect(() => {
    localStorage.setItem("npcs", JSON.stringify(npcsShown));
  }, [npcsShown]);

  return (
    <>
      <NPCsContext.Provider
        value={{ npcsShown, setNpcsShown, deleteNPC, moveNPC, addNPC }}
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
      </NPCsContext.Provider>
    </>
  );
};

export default Home;
