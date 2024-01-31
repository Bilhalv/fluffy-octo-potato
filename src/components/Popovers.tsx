import { Button, Paper, Popover } from "@mui/material";
import React, { useState } from "react";
import { arma, poder, magia } from "../data/constructors/Personagem";

interface defaultProps {
  titulo: string;
  content: React.JSX.Element;
}

export function DefaultPopover({ titulo, content }: defaultProps) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <a className="hover:underline hover:cursor-pointer" onClick={handleClick}>
        {titulo}
      </a>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Paper
          sx={{
            paddingX: "20px",
            paddingY: "5px",
          }}
        >
          {content}
        </Paper>
      </Popover>
    </>
  );
}

export function PopoverComponent({ data }: { data: arma | poder | magia }) {
  let content: React.JSX.Element;

  switch (true) {
    case "crit" in data:
      content = (
        //arma
        <div>
          <h1 className="text-center font-bold text-red-600">{data.nome}</h1>
          <ul>
            <li>
              <b className="text-red-600">Acerto</b> {data.acerto}
            </li>
            <li>
              <b className="text-red-600">Dano</b> {data.dano}
            </li>
            <li>
              <b className="text-red-600">Crítico</b> {data.crit}
            </li>
          </ul>
          <i>&nbsp;&nbsp;&nbsp;{data.desc}</i>
        </div>
      );
      break;
    case "circulo" in data:
      content = (
        //magia
        <div>
          {data.desc}, {data.acao}, {data.circulo}
        </div>
      );
      break;
    default:
      content = (
        //poder
        <div>
          {data.desc}, {data.acao}
        </div>
      );
      break;
  }

  return <DefaultPopover titulo={data.nome} content={content} />;
}
