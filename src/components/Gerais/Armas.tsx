import { ArrowDropUp } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import { arma } from "../../data/constructors/Personagem";

interface Props {
  armas: arma[];
}

export default function Armas(props: Props) {
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
        <AccordionSummary expandIcon={<ArrowDropUp />}>Armas</AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col w-full">
            <div className="flex border-y border-y-black/15">
              {["Nome", "Dano", "Acerto", "Crit", "Alcance", "Desc"].map(
                (x, index) => {
                  return (
                    <p
                      key={index}
                      className={
                        "text-red-600 w-full text-center border-r border-r-black/15" +
                        (index === 0 ? " border-l border-l-black/15" : "")
                      }
                    >
                      {x}
                    </p>
                  );
                }
              )}
            </div>
            {props.armas.map((arma, index) => {
              return (
                <div key={index} className="flex border-b border-b-black/15">
                  {["nome", "dano", "acerto", "crit", "alcance", "desc"].map(
                    (x, index) => {
                      return (
                        <p
                          key={index}
                          className={
                            "w-full pl-5 border-r border-r-black/15 py-2 " +
                            (index === 0 && "border-l border-l-black/15 ") +
                            (x === "desc" &&
                              "text-justify text-xs font-poppins")
                          }
                        >
                          {arma[x]}
                        </p>
                      );
                    }
                  )}
                </div>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
