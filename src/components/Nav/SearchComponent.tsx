import React from "react";
import { regras, regrasArray } from "../../data/constructors/Regra";
import {
  Accordion,
  AccordionSummary,
  IconButton,
  AccordionDetails,
  TextField,
} from "@mui/material";
import { PushPin } from "@mui/icons-material";
import { Normalize } from "../../data/functions/Normalize";
import { showToast } from "../Gerais/ToastComponent";
import { NavModal } from "./NavModal";

interface BlockProps {
  regra: regras;
  changeFixed: (regra: regras) => void;
}

function Block({ regra, changeFixed }: BlockProps) {
  return (
    <>
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
            <h1>{regra.titulo}</h1>
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
                changeFixed(regra);
              }}
            >
              <PushPin />
            </IconButton>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-sm font-poppins">
            &nbsp;&nbsp;&nbsp;&nbsp;{regra.descricao}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

interface SearchComponentProps {
  regras: regrasArray;
  icon: any;
  title: string;
}

export function SearchComponent({ regras, icon, title }: SearchComponentProps) {
  const [regrasShow, setRegrasShow] = React.useState<regrasArray>(regras);

  const [search, setSearch] = React.useState<string>("");

  function searchRegras(value: string) {
    const inputNormalized = Normalize(value.toLowerCase());
    setSearch(value);
    setRegrasShow(
      regras.filter(
        (x) =>
          Normalize(x.titulo.toLowerCase()).includes(inputNormalized) ||
          Normalize(String(x.descricao).toLowerCase()).includes(inputNormalized)
      )
    );
  }
  const changefixed = (regra: regras) => {
    showToast({
      title: regra.titulo,
      message: regra.descricao,
      duration: false,
    });
  };

  return (
    <>
      <NavModal icon={icon} tooltip={title}>
        <h1 className="text-xl text-center">{title}</h1>

        <TextField
          label="Buscar Regras"
          type="text"
          error
          className="w-full bg-red-600 rounded-lg bg-opacity-10"
          value={search}
          onChange={(e) => {
            searchRegras(e.target.value);
          }}
        />
        <div className="max-h-96 overflow-y-scroll overflow-x-hidden">
          {regrasShow.map((regra) => (
            <Block regra={regra} changeFixed={changefixed} />
          ))}
        </div>
      </NavModal>
    </>
  );
}
