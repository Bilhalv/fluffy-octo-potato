import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { poder } from "../data/constructors/Personagem";
import React from "react";
import { ArrowDropUp } from "@mui/icons-material";
import { PopoverComponent } from "./Popovers";

interface Props {
  poder: poder[];
}

export default function Poderes(props: Props) {
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
          Poderes
        </AccordionSummary>
        <AccordionDetails
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.15)",
          }}
        >
          <ul className="flex flex-col gap-4 text-red-600 list-disc">
            {props.poder.map(
              (poder, index) =>
                poder && (
                  <li key={index}>
                    <b>
                      <PopoverComponent data={poder} />
                    </b>
                  </li>
                )
            )}
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
