import { LinearProgress, Popover } from "@mui/material";
import React, { useState } from "react";

interface Props {
  cor: "Azul" | "Vermelha";
  setAtual: React.Dispatch<React.SetStateAction<number>>;
  Atual: number;
  Max: number;
}

export default function Bar(props: Props) {
  const [anchor, setAnchor] = React.useState(null);
  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };

  const [num, setNum] = useState<string>(String(props.Max));

  const changeStatus = (value: string) => {
    const plus = value.includes("+");
    const minus = value.includes("-");
    if (plus) {
      const newValue = value.replace("+", "");
      props.setAtual(props.Atual + Number(newValue));
    } else if (minus) {
      const newValue = value.replace("-", "");
      props.setAtual(props.Atual - Number(newValue));
    } else {
      props.setAtual(Number(value));
    }
  };
  return (
    <>
      <button
        className="relative cursor-pointer select-none"
        onClick={(e) => openPopover(e)}
      >
        <div className="z-10">
          <LinearProgress
            variant="determinate"
            color={props.cor !== "Azul" ? "error" : "info"}
            sx={{
              height: "15px",
              borderRadius: "5px",
              width: "100%",
              position: "relative",
              zIndex: 10,
            }}
            value={(props.Atual / props.Max) * 100}
          />
        </div>
        <h1 className="mt-[-19px] z-50 text-sm relative text-center text-white">
          {props.Atual}/{props.Max}
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
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          "& .MuiPopover-paper": {
            width: "fit-content",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            bgcolor: ( props.cor === "Azul"? "rgba(125, 125, 255, 0.9)" :"rgba(255, 125, 125, 0.9)"),
            color: "white",
            gap: "10px",
            alignItems: "center",
            borderRadius: "20px",
          },
        }}
      >
        <input
          className={"w-1/2 mx-auto rounded-xl border-2 "+ (props.cor === "Azul" ? "border-blue-500 bg-blue-500" : "border-red-500 bg-red-500")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              changeStatus(num);
            }
          }}
          onChange={(e) => setNum(e.target.value)}
        />
        <button type="submit" onClick={() => changeStatus(num)}
        className={"rounded-xl w-fit px-2 "+ (props.cor !== "Azul" ? "bg-red-500 hover:bg-red-600": "bg-blue-500 hover:bg-blue-600")}>
          confirmar
        </button>
      </Popover>
    </>
  );
}
