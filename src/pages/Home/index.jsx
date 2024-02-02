import React from "react";
import PersonagemBlock from "../../components/Personagem";
import { Personagens } from "../../data/tables/Personagens";

const Home = () => {
  return (
    <>
      <body className="bg-bg-t20 bg-fixed bg-center p-8 font-tormenta">
        <div className="bg-white p-4 bg-opacity-25 rounded-xl flex justify-center flex-wrap gap-4">
          {Personagens.map((personagem) => (
            <PersonagemBlock Personagem={personagem} />
          ))}
        </div>
      </body>
    </>
  );
};

export default Home;
