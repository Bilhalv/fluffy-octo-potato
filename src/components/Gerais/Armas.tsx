import { ArrowDropUp } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import { arma } from "../../data/constructors/Personagem";
import { PopoverComponent } from "./Popovers";

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
        <AccordionDetails
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.15)",
          }}
        >
          <ul className="flex flex-col gap-4 text-red-700/75 list-disc ml-4">
            {props.armas.map((arma) => (
              <li>
                <PopoverComponent data={arma} />
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
