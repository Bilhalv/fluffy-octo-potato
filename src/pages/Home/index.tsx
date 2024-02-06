import React, { createContext, useState } from "react";
import PersonagemBlock from "../../components/Fichas/Personagem";
import { Personagens } from "../../data/tables/Personagens";
import NPCBlock from "../../components/Fichas/NPC";
import { NPC } from "../../data/constructors/NPC";
import Nav from "../../components/Nav/Nav";
import FlipMove from "react-flip-move";

interface NPCsContextProps {
  npcsShown: NPC[];
  setNpcsShown: React.Dispatch<React.SetStateAction<NPC[]>>;
}

export const NPCsContext = createContext<NPCsContextProps>({
  npcsShown: [],
  setNpcsShown: () => {},
});

const Home = () => {
  const [npcsShown, setNpcsShown] = useState<NPC[]>(
    JSON.parse(localStorage.getItem("npcs") || "[]") as NPC[]
  );
  return (
    <>
      <NPCsContext.Provider value={{ npcsShown, setNpcsShown }}>
        <Nav />
        <body className="bg-bg-t20 bg-fixed bg-center p-8 font-tormenta flex flex-col gap-10">
          <div className="bg-white p-4 bg-opacity-25 rounded-xl flex justify-center flex-wrap gap-4">
            {Personagens.map((personagem) => (
              <PersonagemBlock Personagem={personagem} />
            ))}
          </div>
            <FlipMove className="bg-white p-4 bg-opacity-25 rounded-xl flex justify-center flex-wrap gap-4">
              {npcsShown.map((npc: NPC) => (
                <NPCBlock NPC={npc} key={npc.nome} />
              ))}
            </FlipMove>
        </body>
      </NPCsContext.Provider>
    </>
  );
};

export default Home;
