import React from "react";
import { NavModal } from "./NavModal";
import { Sick } from "@mui/icons-material";
import { CondicaoRegra } from "../../data/constructors/Regra";
import { CondicoesRegras, CondicoesTipos } from "../../data/tables/Regras";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import FlipMove from "react-flip-move";
import { Normalize } from "../../data/functions/Normalize.ts";

function CondicaoBlock(condicao: CondicaoRegra) {
  return (
    <Accordion
      sx={{
        "&.MuiAccordion-root": {
          bgcolor: "rgba(255, 255, 255, 0.1)",
          transition: "0.3s",
          "&.Mui-expanded": {
            margin: "0",
            bgcolor: "white",
          },
          "&.Mui-focused": {
            margin: "0",
          },
        },
      }}
    >
      <AccordionSummary>
        <h1>{condicao.titulo}</h1>
      </AccordionSummary>
      <AccordionDetails>
        <div className="text-sm font-poppins">
          &nbsp;&nbsp;&nbsp;&nbsp;{condicao.descricao}{" "}
          {condicao.tipo && <i>{condicao.tipo}</i>}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export function Condicoes() {
  const [condicoesShown, setCondicoesShown] =
    React.useState<CondicaoRegra[]>(CondicoesRegras);

  function searchCondicoes(value: string) {
    const inputNormalized = Normalize(value.toLowerCase());
    setCondicoesShown(
      CondicoesRegras.filter(
        (condicao) =>
          Normalize(condicao.titulo.toLowerCase()).includes(inputNormalized) ||
          Normalize(String(condicao.descricao).toLowerCase()).includes(
            inputNormalized
          )
      )
    );
  }
  return (
    <div>
      <NavModal icon={<Sick />} tooltip="Condições">
        <h1 className="text-xl text-center">Condições</h1>
        <input
          type="text"
          className="w-full p-2 my-2 bg-gray-100"
          placeholder="Buscar condição"
          onChange={(e) => {
            searchCondicoes(e.target.value);
          }}
        />
        <div className="max-h-60 overflow-scroll">
          <FlipMove typeName={null}>
            {condicoesShown.length !== 0 ? (
              <>
                <p></p>
                {/* nao sei pq precisa disso mas so funciona c isso */}
                {condicoesShown.map((condicao) => (
                  <CondicaoBlock {...condicao} key={condicao.titulo} />
                ))}
              </>
            ) : (
              <i className="text-center text-gray-500">
                Nenhuma condição encontrada
              </i>
            )}
          </FlipMove>
        </div>
      </NavModal>
    </div>
  );
}
