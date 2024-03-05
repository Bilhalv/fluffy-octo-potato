import React from "react";
import { NavModal } from "./NavModal";
import { BookKey } from "lucide-react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

type info = {
  titulo: string;
  conteudo: string;
};

export function RegrasAdicionais() {
  const regras: info[] = [
    {
      titulo: "Dado de Façanha",
      conteudo:
        "Quando um jogador tenta uma façanha, o mestre solicita um dado de façanha. Há uma chance de sucesso de 50%, com uma penalidade proporcional a dificuldade em caso de falha.",
    },
    {
      titulo: "Sacrificar Item",
      conteudo:
        "Ao tomar um dano massivo, o usuário sempre tem a possibilidade de sacrificar o item em uma de suas mãos para tomar metade do dano.",
    },
  ];
  return (
    <NavModal icon={<BookKey />} tooltip={"Regras Adicionais"}>
      <div>
        {regras.map((regra: info) => (
          <Accordion
            sx={{
              "&.MuiAccordion-root": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
                transition: "0.3s",
                boxShadow: "0px 0px 0px 0px rgba(0,0,0)",
                borderRadius: "0px",
                "&:hover": {
                  bgcolor: "rgba(255, 100, 100, 0.1)",
                  scale: "1.05",
                },
                "&.Mui-expanded": {
                  margin: "0",
                  bgcolor: "rgba(255, 100, 100, 0.2)",
                  scale: "1.0",
                },
                "&.Mui-notexpanded": {
                  margin: "0",
                },
                "&.Mui-focused": {
                  margin: "0",
                },
              },
            }}
          >
            <AccordionSummary>{regra.titulo}</AccordionSummary>
            <AccordionDetails className="font-poppins">
              &nbsp;&nbsp;&nbsp;&nbsp;{regra.conteudo}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </NavModal>
  );
}
