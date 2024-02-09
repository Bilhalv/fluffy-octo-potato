import React from "react";
import { NavModal } from "./NavModal";
import { Sick } from "@mui/icons-material";
import { CondicaoRegra } from "../../data/constructors/Regra";
import { CondicoesRegras, CondicoesTipos } from "../../data/tables/Regras";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";
import FlipMove from "react-flip-move";
import { Normalize } from "../../data/functions/Normalize.ts";
import PushPinIcon from "@mui/icons-material/PushPin";

function CondicaoBlock(condicao: CondicaoRegra) {
  const [snackFixed, setSnackFixed] = React.useState<boolean>(false);
  return (
    <Accordion
      sx={{
        "&.MuiAccordion-root": {
          bgcolor: "rgba(255, 255, 255, 0.1)",
          transition: "0.3s",
          boxShadow: "0px 0px 0px 0px rgba(0,0,0)",
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
      <AccordionSummary>
        <div className="flex justify-between items-center w-full my-[-10px]">
          <h1>{condicao.titulo}</h1>
          <IconButton
            sx={{
              "&.MuiIconButton-root": {
                color: "white",
                bgcolor: "rgba(255, 50, 50, 0.8)",
                border: "3px solid rgba(255, 255, 255, 1)",
                transition: "0.3s",
                "&:hover": {
                  color: "red",
                  borderColor: "rgba(255, 50, 50, 1)",
                  bgcolor: "rgba(0, 0, 0, 0)",
                },
              },
            }}
            onClick={() => {
              setSnackFixed(!snackFixed);
            }}
          >
            <PushPinIcon />
          </IconButton>
        </div>
        <Snackbar
          open={snackFixed}
          onClose={() => {
            setSnackFixed(false);
          }}
          key={condicao.titulo}
          message={
            <div>
              <h1>{condicao.titulo}</h1>
              <p>{condicao.descricao}</p>
            </div>
          }
        />
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
  const [search, setSearch] = React.useState<string>("");

  function searchCondicoes(value: string) {
    const inputNormalized = Normalize(value.toLowerCase());
    setSearch(value);
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
        <TextField
          label="Buscar condição"
          type="text"
          error
          className="w-full bg-red-600 rounded-lg bg-opacity-10"
          value={search}
          onChange={(e) => {
            searchCondicoes(e.target.value);
          }}
        />
        <div className="max-h-96 overflow-y-scroll overflow-x-hidden">
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
