import React, { useState } from "react";
import Personagem from "../data/constructors/Personagem";
import { Avatar, LinearProgress, Popover } from "@mui/material";
import Bar from "./Bar";

interface Props {
  Personagem: Personagem;
}

export default function PersonagemBlock(props: Props) {
  const [pvAtual, setPvAtual] = useState<number>(props.Personagem.pv);
  const [pmAtual, setPmAtual] = useState<number>(props.Personagem.pm);
  return (
    <>
      <div className="bg-white bg-opacity-75 p-7 rounded-2xl gap-3">
        <div>
          <div className="flex justify-between text-gray-500">
            <h1>{props.Personagem.player}</h1>
            <h1>{props.Personagem.classe}</h1>
            <h1>{props.Personagem.nivel}</h1>
            <h1>{props.Personagem.raca}</h1>
            <h1>{props.Personagem.persona}</h1>
          </div>
          <Avatar
            sx={{
              width: 100,
              height: 100,
              margin: "auto",
            }}
            src={props.Personagem.img}
          />
          <div className="flex flex-col text-center">
            <h1>PV</h1>
            <Bar
              Atual={pvAtual}
              Max={props.Personagem.pv}
              setAtual={setPvAtual}
              cor={"Vermelha"}
            />
          </div>
          <div className="flex flex-col text-center">
            <h1>PM</h1>
            <Bar
              Atual={pmAtual}
              Max={props.Personagem.pm}
              setAtual={setPmAtual}
              cor={"Azul"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
