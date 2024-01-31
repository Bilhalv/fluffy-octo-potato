import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Personagem from "../data/constructors/Personagem";
import React from "react";
import { ArrowDropUp } from "@mui/icons-material";
import { PopoverComponent } from "./Popovers";

interface Props {
  Personagem: Personagem;
}

export default function Combate(props: Props) {
  return (
    <>
      <Accordion
        variant="outlined"
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.15)",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.15)",
          margin: "10px",
        }}
      >
        <AccordionSummary expandIcon={<ArrowDropUp />}>
          Combate
        </AccordionSummary>
        <AccordionDetails
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="flex w-full justify-between">
            <div className="w-full flex flex-col gap-2">
              <div>
                <b className="text-red-600">Defesa</b> {props.Personagem.defesa}
              </div>
              <div>
                <b className="text-red-600">Morte</b>{" "}
                {props.Personagem.pv / 2 < 10 ? 10 : props.Personagem.pv / 2}
              </div>
              <div>
                <b className="text-red-600">Movimento</b>{" "}
                {props.Personagem.movimento} ({props.Personagem.movimento / 1.5}{" "}
                □)
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <b className="text-center text-red-600 text-">Armas</b>
              <ul className="list-disc text-red-600">
                {props.Personagem.armas?.map((arma, index) => {
                  return (
                    <li key={index}>
                      <b>
                        <PopoverComponent data={arma} />
                      </b>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
