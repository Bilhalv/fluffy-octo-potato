import { ArrowLeft, ArrowRight, Delete } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  IconButton,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { NPCShown } from "../../data/constructors/NPC";
import { NPCsContext } from "../../pages/Home";
import Bar from "../Gerais/Bar";
import Magias from "../Gerais/Magias";
import Poderes from "../Gerais/Poderes";

interface Props {
  NPC: NPCShown;
  isModal?: boolean;
}

export default function NPCBlock(props: Props) {
  const [pvAtual, setPvAtual] = useState<number>(props.NPC.pv);
  const [pmAtual, setPmAtual] = useState<number>(props.NPC.pm || 0);
  const { npcsShown, deleteNPC, moveNPC } = useContext(NPCsContext);

  return (
    <>
      <div
        className={
          "p-7 rounded-2xl gap-3 w-full " + props.isModal ? "" : "desktop:w-2/5"
        }
      >
        <Accordion
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.6)",
            borderRadius: "50px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.15)",
          }}
        >
          <AccordionSummary>
            <div className="flex flex-col w-full p-7">
              <div className="flex gap-2 flex-col items-center">
                {!props.isModal && (
                  <IconButton
                    onClick={() => {
                      deleteNPC(props.NPC.id);
                    }}
                    className="w-fit"
                  >
                    <Delete />
                  </IconButton>
                )}
                <div className="w-full flex justify-between">
                  {!props.isModal && (
                    <div className="h-fit my-auto">
                      <IconButton
                        onClick={() => {
                          moveNPC(
                            "left",
                            npcsShown.findIndex(
                              (npc) => npc.id === props.NPC.id
                            )
                          );
                        }}
                      >
                        <ArrowLeft />
                      </IconButton>
                    </div>
                  )}
                  <Avatar
                    sx={{ width: 175, height: 175, margin: "auto" }}
                    src={props.NPC.img}
                  />
                  {!props.isModal && (
                    <div className="h-fit my-auto">
                      <IconButton
                        onClick={() => {
                          moveNPC(
                            "right",
                            npcsShown.findIndex(
                              (npc) => npc.id === props.NPC.id
                            )
                          );
                        }}
                      >
                        <ArrowRight />
                      </IconButton>
                    </div>
                  )}
                </div>
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
            {props.NPC.poderes && <Poderes poder={[...props.NPC.poderes]} />}
            {props.NPC.magias && <Magias magia={[...props.NPC.magias]} />}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
