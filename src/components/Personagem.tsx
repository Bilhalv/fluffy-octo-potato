import React, { useState } from "react";
import Personagem from "../data/constructors/Personagem";
import { Avatar, LinearProgress, Popover } from "@mui/material";

interface Props {
  Personagem: Personagem;
}

export default function PersonagemBlock(props: Props) {
  const [pvAtual, setPvAtual] = useState<number>(props.Personagem.pv);

  const [numPV, setNumPV] = useState<string>(String(props.Personagem.pv));

  const [pmAtual, setPmAtual] = useState<number>(props.Personagem.pm);

  const [numPM, setNumPM] = useState<string>(String(props.Personagem.pm));

  const [anchor, setAnchor] = React.useState(null);
  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };

  const changeStatus = (status: "PV" | "PM", value: string) => {
    const plus = value.includes("+");
    const minus = value.includes("-");
    if (plus) {
      const newValue = value.replace("+", "");
      if (status === "PV") {
        setPvAtual(pvAtual + Number(newValue));
      } else {
        setPmAtual(pmAtual + Number(newValue));
      }
    } else if (minus) {
      const newValue = value.replace("-", "");
      if (status === "PV") {
        setPvAtual(pvAtual - Number(newValue));
      } else {
        setPmAtual(pmAtual - Number(newValue));
      }
    } else {
      if (status === "PV") {
        setPvAtual(Number(value));
      } else {
        setPmAtual(Number(value));
      }
    }
  };
  return (
    <>
      <div className="bg-white bg-opacity-75 p-7 rounded-2xl">
        <div className="flex justify-between text-gray-500">
          <h1>{props.Personagem.player}</h1>
          <h1>{props.Personagem.classe}</h1>
          <h1>{props.Personagem.nivel}</h1>
          <h1>{props.Personagem.raca}</h1>
          <h1>{props.Personagem.persona}</h1>
        </div>
        <Avatar
          sx={{
            width: 100,
            height: 100,
            margin: "auto",
          }}
          src={props.Personagem.img}
        />
        <div className="flex flex-col">
          <h1>PV</h1>
          <button
            className="relative cursor-pointer select-none"
            onClick={(e) => openPopover(e)}
          >
            <div className="z-10">
              <LinearProgress
                variant="determinate"
                color="error"
                sx={{
                  height: "15px",
                  borderRadius: "5px",
                  width: "100%",
                  position: "relative",
                  zIndex: 10,
                }}
                value={(pvAtual / props.Personagem.pv) * 100}
              />
            </div>
            <h1 className="mt-[-19px] z-50 text-sm relative text-center text-white">
              {pvAtual}/{props.Personagem.pv}
            </h1>
          </button>
          <Popover
            onClose={() => setAnchor(null)}
            open={Boolean(anchor)}
            anchorEl={anchor}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
              flexDirection: "column",
            }}
          >
            <input
              className="w-1/2 mx-auto rounded-xl bg-red-500 border-2 border-red-400"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  changeStatus("PV", numPV);
                }
              }}
              onChange={(e) => setNumPV(e.target.value)}
            />
            <button type="submit" onClick={() => changeStatus("PV", numPV)}>
              confirmar
            </button>
          </Popover>
        </div>
      </div>
    </>
  );
}
