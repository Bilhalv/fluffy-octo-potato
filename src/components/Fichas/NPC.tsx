import React, { useState } from "react";
import { Avatar } from "@mui/material";
import Bar from "../Gerais/Bar";
import Poderes from "../Gerais/Poderes";
import Magias from "../Gerais/Magias";
import { NPC } from "../../data/constructors/NPC";

interface Props {
  NPC: NPC;
}

export default function NPCBlock(props: Props) {
  const [pvAtual, setPvAtual] = useState<number>(props.NPC.pv);
  const [pmAtual, setPmAtual] = useState<number>(props.NPC.pm || 0);
  return (
    <>
      <div className="bg-white bg-opacity-75 p-7 rounded-2xl gap-3 desktop:w-1/4 w-full">
        <div className="w-full">
          <Avatar
            sx={{ width: 175, height: 175, margin: "auto" }}
            src={props.NPC.img}
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <Bar
            Atual={pvAtual}
            Max={props.NPC.pv}
            setAtual={setPvAtual}
            cor={"Vermelha"}
          />
          {props.NPC.pm && (
            <Bar
              Atual={pmAtual}
              Max={props.NPC.pm}
              setAtual={setPmAtual}
              cor={"Azul"}
            />
          )}
        </div>
        <div className="flex justify-between font-bold text-xl text-red-700">
          <p>{props.NPC.nome}</p>
          <p>ND {props.NPC.nd}</p>
        </div>
        <div className="text-gray-500 italic">
          <p>
            {props.NPC.categoria} {props.NPC.tamanho}{" "}
            {props.NPC.tipo && `(${props.NPC.tipo})`}
          </p>
        </div>
        <div className="flex justify-evenly border-y-2 border-red-600 gap-2 text-sm flex-wrap">
          {props.NPC.atributos.map((atributo, index) => {
            return (
              <div key={index} className="flex gap-1">
                <p className="text-red-600">
                  {atributo.nome.substring(0, 3).toUpperCase()}
                </p>
                <p>
                  {atributo.valor >= 0 ? "+" + atributo.valor : atributo.valor}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex gap-2">
            <p>
              <b className="text-red-600">Defesa </b>
              {props.NPC.defesa},
            </p>
            <p>
              <b className="text-red-600">Fort </b>
              {props.NPC.fortitude},
            </p>
            <p>
              <b className="text-red-600">Ref </b>
              {props.NPC.reflexos},
            </p>
            <p>
              <b className="text-red-600">Vontade </b>
              {props.NPC.vontade},
            </p>
          </p>
          <p className="flex gap-2">
            <p className="text-red-600">Resistências</p>
            {props.NPC.resistencias}
          </p>
          <p className="flex gap-2">
            <p className="text-red-600">Movimento</p>
            {props.NPC.deslocamento}m ({props.NPC.deslocamento / 1.5}□)
          </p>
        </div>
        {props.NPC.poderes && <Poderes poder={[...props.NPC.poderes]} />}
        {props.NPC.magias && <Magias magia={[...props.NPC.magias]} />}
        <div className="flex flex-col gap-2">
          <p>
            <b className="text-red-600">Perícias</b>
            {props.NPC.pericias.map((pericia, index) => {
              return (
                <p key={index}>
                  {pericia.nome}{" "}
                  {pericia.bonus >= 0 ? "+" + pericia.bonus : pericia.bonus}
                </p>
              );
            })}
          </p>
          <p>
            <b className="text-red-600">Tesouro </b>
            {props.NPC.tesouro}
          </p>
        </div>
      </div>
    </>
  );
}
