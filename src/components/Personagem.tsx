import React, { useState } from "react";
import Personagem from "../data/constructors/Personagem";
import { Avatar, LinearProgress, Popover } from "@mui/material";
import Bar from "./Bar";
import Combate from "./Combate";
import Poderes from "./Poderes";
import Magias from "./Magias";

interface Props {
  Personagem: Personagem;
}

export default function PersonagemBlock(props: Props) {
  const [pvAtual, setPvAtual] = useState<number>(props.Personagem.pv);
  const [pmAtual, setPmAtual] = useState<number>(props.Personagem.pm);
  return (
    <>
      <div className="bg-white bg-opacity-75 p-7 rounded-2xl gap-3">
        <div className="w-full">
          <div className="flex w-full border-b border-black pb-2 border-opacity-15">
            <div className="hidden desktop:block mr-5">
              <Avatar
                sx={{
                  width: 200,
                  height: 200,
                  margin: "auto",
                }}
                src={props.Personagem.img}
              />
            </div>
            <div className="w-full flex flex-col justify-evenly">
              <div className="flex justify-between text-gray-500">
                <h1>{props.Personagem.player}</h1>
                <h1>{props.Personagem.classe}</h1>
                <h1>{props.Personagem.nivel}</h1>
                <h1>{props.Personagem.raca}</h1>
                <h1>{props.Personagem.persona}</h1>
              </div>
              <div className="desktop:hidden">
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    margin: "auto",
                  }}
                  src={props.Personagem.img}
                />
              </div>
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
          <div className="mt-2 grid grid-flow-col gap-2 w-fit mx-auto border rounded-xl desktop:grid-rows-none grid-rows-2">
            {props.Personagem.atributos.map((atributo, index) => {
              return (
                <div key={index} className="flex justify-between px-6">
                  <b className="text-red-600">
                    {atributo.nome.substring(0, 3).toUpperCase()}
                  </b>
                  <h1>
                    {atributo.valor >= 0
                      ? "+" + atributo.valor
                      : atributo.valor}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="mt-2 p-2 border-t border-black border-opacity-15">
            <Combate Personagem={props.Personagem} />
          </div>
          {props.Personagem.poderes && (
            <div className="mt-2 p-2 border-t border-black border-opacity-15">
              <Poderes poder={[...props.Personagem.poderes]} />
            </div>
          )}
          {props.Personagem.magias && (
            <div className="mt-2 p-2 border-t border-black border-opacity-15">
              <Magias magia={[...props.Personagem.magias]} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
