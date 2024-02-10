import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import Personagem from "../../data/constructors/Personagem";
import Bar from "../Gerais/Bar";
import Magias from "../Gerais/Magias";
import Poderes from "../Gerais/Poderes";

interface Props {
  Personagem: Personagem;
}

export default function PersonagemBlock(props: Props) {
  const [pvAtual, setPvAtual] = useState<number>(props.Personagem.pv);
  const [pmAtual, setPmAtual] = useState<number>(props.Personagem.pm);
  return (
    <>
      <div className="p-7 rounded-2xl gap-3 desktop:w-2/5 w-full">
        <Accordion
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.6)",
            borderRadius: "50px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.15)",
          }}
        >
          <AccordionSummary>
            <div className="p-7 rounded-2xl gap-3 w-full">
              <div className="w-full">
                <Avatar
                  sx={{ width: 175, height: 175, margin: "auto" }}
                  src={props.Personagem.img}
                />
              </div>
              <div className="flex flex-col gap-2 my-2">
                <Bar
                  Atual={pvAtual}
                  Max={props.Personagem.pv}
                  setAtual={setPvAtual}
                  cor={"Vermelha"}
                />
                <Bar
                  Atual={pmAtual}
                  Max={props.Personagem.pm}
                  setAtual={setPmAtual}
                  cor={"Azul"}
                />
              </div>
              <div className="flex justify-between font-bold text-xl text-red-700">
                <p>{props.Personagem.persona}</p>
                <p>{props.Personagem.nivel}</p>
              </div>
              <div className="text-gray-500 italic">
                <p>
                  {props.Personagem.raca} {props.Personagem.classe} (
                  {props.Personagem.player})
                </p>
              </div>
              <div className="flex justify-evenly border-y-2 border-red-600 gap-2 text-sm flex-wrap">
                {props.Personagem.atributos.map((atributo, index) => {
                  return (
                    <div key={index} className="flex gap-1">
                      <p className="text-red-600">
                        {atributo.nome.substring(0, 3).toUpperCase()}
                      </p>
                      <p>
                        {atributo.valor >= 0
                          ? "+" + atributo.valor
                          : atributo.valor}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="flex flex-col gap-2">
              <p className="flex gap-2">
                <p className="text-red-600">Defesa</p>
                {props.Personagem.defesa}
              </p>
              <p className="flex gap-2">
                <p className="text-red-600">Morte</p>-
                {props.Personagem.pv / 2 < 10 ? 10 : Math.floor(props.Personagem.pv / 2)}
              </p>
              <p className="flex gap-2">
                <p className="text-red-600">Movimento</p>
                {props.Personagem.movimento}m (
                {props.Personagem.movimento / 1.5}□)
              </p>
            </div>
            {props.Personagem.poderes && (
              <Poderes poder={[...props.Personagem.poderes]} />
            )}
            {props.Personagem.magias && (
              <Magias magia={[...props.Personagem.magias]} />
            )}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
