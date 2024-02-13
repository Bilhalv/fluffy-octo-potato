import { ArrowDropUp } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React from "react";
import { poder, arma } from "../../data/constructors/Personagem";
import { magia } from "../../data/functions/findMagia";
import { PopoverComponent } from "./Popovers";

interface Props {
    titulo: string;
    children: magia[] | poder[] | arma[];
}

export default function AccordionConstructor(
    props: Props
) {
  return (
    <Accordion
        variant="outlined"
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.15)",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.15)",
          margin: "10px",
        }}
      >
        <AccordionSummary expandIcon={<ArrowDropUp />}>{props.titulo}</AccordionSummary>
        <AccordionDetails
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.15)",
          }}
        >
          <ul className="flex flex-col gap-4 text-red-700/75 list-disc ml-4">
            {props.children.map((data) => (
              <li>
                <PopoverComponent data={data} />
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
  );
}
