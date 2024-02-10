import React from "react";
import { NavModal } from "./NavModal";
import { Sick } from "@mui/icons-material";
import { CondicaoRegra } from "../../data/constructors/Regra";
import { CondicoesRegras, CondicoesTipos } from "../../data/tables/Regras";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";
import FlipMove from "react-flip-move";
import { Normalize } from "../../data/functions/Normalize.ts";
import PushPinIcon from "@mui/icons-material/PushPin";

function CondicaoToast({
  CondicaoRegra,
  changefixed,
}: {
  CondicaoRegra;
  changefixed: (condicao: CondicaoRegra) => void;
}) {
  return (
    <>
      <div className="flex flex-col gap-1 p-4 rounded-2xl bg-red-600 bg-opacity-40 font-tormenta">
        <div className="flex justify-between items-center">
          <h1 className="text-lg">{CondicaoRegra.titulo}</h1>
          <button
            onClick={() => {
              changefixed(CondicaoRegra);
            }}
            className="p-2 bg-red-600 rounded-full hover:scale-110 hover:bg-red-400 transition-all"
          >
            <PushPinIcon />
          </button>
        </div>
        <p className="font-poppins italic">{CondicaoRegra.descricao}</p>
      </div>
    </>
  );
}

function CondicaoBlock({
  CondicaoRegra,
  changefixed,
}: {
  CondicaoRegra;
  changefixed: (condicao: CondicaoRegra) => void;
}) {
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
            <h1>{CondicaoRegra.titulo}</h1>
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
                changefixed(CondicaoRegra);
              }}
            >
              <PushPinIcon />
            </IconButton>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-sm font-poppins">
            &nbsp;&nbsp;&nbsp;&nbsp;{CondicaoRegra.descricao}{" "}
            {CondicaoRegra.tipo && <i>{CondicaoRegra.tipo}</i>}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
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
  const [condicoesFixadas, setCondicoesFixadas] = React.useState<
    CondicaoRegra[]
  >([]);

  const changefixed = (condicao: CondicaoRegra) => {
    if (!condicoesFixadas.includes(condicao)) {
      setCondicoesFixadas([...condicoesFixadas, condicao]);
    } else {
      setCondicoesFixadas(condicoesFixadas.filter((c) => c !== condicao));
    }
    if (condicoesFixadas.length === 1){
      setOpen(false)
    }
  };

  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-2">
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
                  <CondicaoBlock
                    key={condicao.titulo}
                    changefixed={changefixed}
                    CondicaoRegra={condicao}
                  />
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
      {condicoesFixadas.length > 0 && (
        <button
          onClick={() => setOpen(true)}
          className="p-2 bg-red-600 rounded-full hover:scale-110 hover:bg-red-400 transition-all disabled:opacity-5"
        >
          <PushPinIcon />
        </button>
      )}
      <Drawer
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "rgba(255, 255, 255, 0.1)",
            color: "white",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="w-auto p-2 gap-2 overflow-scroll flex flex-col max-h-40">
          {condicoesFixadas.map((condicao) => (
            <CondicaoToast
              key={condicao.titulo}
              CondicaoRegra={condicao}
              changefixed={changefixed}
            />
          ))}
        </div>
      </Drawer>
    </div>
  );
}
