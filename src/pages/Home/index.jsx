import React from "react";
import PersonagemBlock from "../../components/Fichas/Personagem";
import { Personagens } from "../../data/tables/Personagens";
import { NPCs } from "../../data/tables/NPCs";
import NPCBlock from "../../components/Fichas/NPC";

const Home = () => {
  return (
    <>
      <body className="bg-bg-t20 bg-fixed bg-center p-8 font-tormenta flex flex-col gap-10">
        <div className="bg-white p-4 bg-opacity-25 rounded-xl flex justify-center flex-wrap gap-4">
          {Personagens.map((personagem) => (
            <PersonagemBlock Personagem={personagem} />
          ))}
        </div>
        <div className="bg-white p-4 bg-opacity-25 rounded-xl flex justify-center flex-wrap gap-4">
          {NPCs.map((npc) => (
            <NPCBlock NPC={npc} />
          ))}
        </div>
      </body>
    </>
  );
};

export default Home;
