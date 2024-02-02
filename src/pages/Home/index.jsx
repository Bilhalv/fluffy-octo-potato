import React from "react";
import PersonagemBlock from "../../components/Personagem";
import { Personagens } from "../../data/tables/Personagens";

const Home = () => {
  return (
    <>
      <body className="bg-bg-t20 bg-fixed bg-center h-[100rem] p-8 font-tormenta">
        {Personagens.map((personagem) => (
          <PersonagemBlock Personagem={personagem} />
        ))}
      </body>
    </>
  );
};

export default Home;
