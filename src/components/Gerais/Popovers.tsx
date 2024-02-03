import { Button, Paper, Popover } from "@mui/material";
import React, { useState } from "react";
import { arma, poder, magia } from "../../data/constructors/Personagem";

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
        <Paper>{content}</Paper>
      </Popover>
    </>
  );
}

export function PopoverComponent({ data }: { data: arma | poder | magia }) {
  let content: React.JSX.Element;
  let titulo: string = data.nome;

  type classificacoes = "Arcana" | "Divina" | "Universal";

  type escolas =
    | "Abjuração"
    | "Adivinhação"
    | "Convocação"
    | "Encantamento"
    | "Evocação"
    | "Ilusão"
    | "Necromancia"
    | "Transmutação";

  const selectClassificacao: Record<classificacoes, string> = {
    Arcana: "bg-magia_arcana",
    Divina: "bg-magia_divina",
    Universal: "bg-magia_universal",
  };

  const selectEscola: Record<escolas, string> = {
    Abjuração: "/magias/escolas/abjuracao.svg",
    Adivinhação: "/magias/escolas/adivinhacao.svg",
    Convocação: "/magias/escolas/convocacao.svg",
    Encantamento: "/magias/escolas/encantamento.svg",
    Evocação: "/magias/escolas/evocacao.svg",
    Ilusão: "./magias/escolas/ilusao.svg",
    Necromancia: "/magias/escolas/necromancia.svg",
    Transmutação: "/magias/escolas/transmutacao.svg",
  };

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
        <div className="bg-bg-t20 px-5 py-2 border-4 border-red-600 border-opacity-25 rounded-sm">
          <div className="flex justify-between items-center">
            <p className="flex flex-col">
              <p className="text-center">
                <b className="text-red-600 bg-magia_arcana">{data.nome}</b>
              </p>
              <div className="flex flex-wrap text-white text-sm justify-evenly gap-2">
                <p className="flex gap-2">
                  <img
                    src="/magias/dados/execucao.svg"
                    className="w-5 h-5 inline-block"
                  />
                  <p>{data.acao}</p>
                </p>
                <p className="flex gap-2">
                  <img
                    src="/magias/dados/alcance.svg"
                    className="w-5 h-5 inline-block"
                  />
                  <p>{data.alcance}</p>
                </p>
                <p className="flex gap-2">
                  <img
                    src="/magias/dados/duracao.svg"
                    className="w-5 h-5 inline-block"
                  />
                  <p>{data.duracao}</p>
                </p>
                {data.resistencia && (
                  <p className="flex gap-2">
                    <img
                      src="/magias/dados/resistencia.svg"
                      className="w-5 h-5 inline-block"
                    />
                    <p>{data.resistencia}</p>
                  </p>
                )}
                <p className="flex gap-2">
                  <img
                    src="/magias/dados/alvo.svg"
                    className="w-5 h-5 inline-block"
                  />
                  <p>{data.alvo_area}</p>
                </p>
              </div>
            </p>
            <p
              className={
                selectClassificacao[data.classificacao] +
                " w-14 h-14 flex bg-center bg-no-repeat bg-cover p-3"
              }
            >
              <img src={selectEscola[data.escola as escolas]} />
              <p className="text-white text-xs font-bold">1</p>
            </p>
          </div>
          <div className="bg-white bg-opacity-75 p-2 rounded-xl">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{data.desc}.</p>
          </div>
        </div>
      );
      break;
    default:
      content = (
        //poder
        <div>
          <b className="text-red-600">
            {data.nome} {data.acao && `(${data.acao})`}
          </b>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;{data.desc}.</div>
        </div>
      );
      titulo =
        (data.pm ? `${data.pm} PM ` : "") +
        data.nome +
        (data.acao ? ` (${data.acao})` : "");
      break;
  }

  return <DefaultPopover titulo={titulo} content={content} />;
}
