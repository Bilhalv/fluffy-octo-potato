import React, { useEffect } from "react";
import { Personagens } from "../../data/tables/Personagens";
import {
  AccessTime,
  ArrowBackIos,
  ArrowForwardIos,
  NotInterested,
  SwapVert,
} from "@mui/icons-material";
import { NavModal } from "./NavModal";
import FlipMove from "react-flip-move";
import { IconButton } from "@mui/material";

type turn = {
  nome: string;
  iniciativa: number;
  desempate: number;
};

interface BlockProps {
  turnOrder: turn[];
  changeTurnOrder: (index: number, value: number) => void;
  active: string | undefined;
}

function TurnsBlock({ turnOrder, changeTurnOrder, active }: BlockProps) {
  return (
    <div className="flex flex-col">
      <FlipMove>
        {turnOrder.map((turn, index) => (
          <div
            key={turn.nome}
            className={
              "flex justify-between items-center rounded-md p-2 transition-all " +
              (active === turn.nome ? "text-red-600 font-bold" : "")
            }
          >
            <span>({turn.desempate}) {turn.nome}</span>
            <input
              type="number"
              value={turn.iniciativa}
              onChange={(e) => changeTurnOrder(index, parseInt(e.target.value))}
              className="text-center"
            />
          </div>
        ))}
      </FlipMove>
    </div>
  );
}
function resetTurnOrder() {
  let playersAll: turn[] = [];
  Personagens.forEach((personagem) => {
    playersAll.push({
      nome: personagem.persona,
      iniciativa: 0,
      desempate: personagem.atributos[1].valor,
    });
  });
  let npcsAll: turn[] = [];
  JSON.parse(localStorage.getItem("npcs") || "[]").forEach((npc) => {
    npcsAll.push({
      nome: npc.nome,
      iniciativa: 0,
      desempate: npc.iniciativa,
    });
  });
  localStorage.setItem("turnOrder", JSON.stringify(playersAll.concat(npcsAll)));
}
export function TurnOrder() {
  if (localStorage.getItem("turnOrder") === null) {
    resetTurnOrder();
  }
  const [turnOrder, setTurnOrder] = React.useState<turn[]>(
    JSON.parse(localStorage.getItem("turnOrder") || "[]")
  );
  const [active, setActive] = React.useState<string>();

  function changeTurnOrder(index: number, value: number) {
    let newTurnOrder = [...turnOrder];
    newTurnOrder[index].iniciativa = value;
    setTurnOrder(newTurnOrder);
    localStorage.setItem("turnOrder", JSON.stringify(newTurnOrder));
  }

  function sortTurnOrder() {
    let newTurnOrder = [...turnOrder];
    let sortedTurnOrder = [...newTurnOrder].sort(
      (a, b) => b.iniciativa - a.iniciativa || b.desempate - a.desempate
    );

    if (JSON.stringify(sortedTurnOrder) === JSON.stringify(newTurnOrder)) {
      newTurnOrder.sort(
        (a, b) => a.iniciativa - b.iniciativa || a.desempate - b.desempate
      );
    } else {
      newTurnOrder.sort(
        (a, b) => b.iniciativa - a.iniciativa || b.desempate - a.desempate
      );
    }
    setActive(newTurnOrder[0].nome);
    setTurnOrder(newTurnOrder);
    localStorage.setItem("turnOrder", JSON.stringify(newTurnOrder));
  }
  return (
    <>
      <NavModal icon={<AccessTime />}>
        <div className="bg-white w-1/2 p-4 mx-auto rounded-xl my-auto font-tormenta">
          <div className="flex justify-between">
            <IconButton
              sx={{
                backgroundColor: "red",
                color: "white",
                padding: "2px",
                border: "2px solid red",
                zIndex: 10,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "red",
                  transform: "scale(1.1)",
                },
              }}
              onClick={() => {
                sortTurnOrder();
              }}
            >
              <SwapVert />
            </IconButton>
            <h1 className="text-2xl font-bold text-center">Turnos</h1>
            <IconButton
              sx={{
                backgroundColor: "red",
                color: "white",
                padding: "2px",
                border: "2px solid red",
                zIndex: 10,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "red",
                  transform: "scale(1.1)",
                },
              }}
              onClick={() => {
                resetTurnOrder();
                setTurnOrder(
                  JSON.parse(localStorage.getItem("turnOrder") || "[]")
                );
              }}
            >
              <NotInterested />
            </IconButton>
          </div>
          {turnOrder.length > 0 ? (
            <TurnsBlock
              turnOrder={turnOrder}
              changeTurnOrder={changeTurnOrder}
              active={active}
            />
          ) : (
            <p className="text-center">Nenhum jogador na ordem de turno</p>
          )}
          <div className="flex justify-evenly">
            <IconButton
              onClick={() => {
                let newTurnOrder = [...turnOrder];
                let index = newTurnOrder.findIndex(
                  (turn) => turn.nome === active
                );
                if (index === -1) {
                  setActive(newTurnOrder[0].nome);
                } else {
                  if (index === 0) {
                    setActive(newTurnOrder[newTurnOrder.length - 1].nome);
                  } else {
                    setActive(newTurnOrder[index - 1].nome);
                  }
                }
              }}
            >
              <ArrowBackIos />
            </IconButton>
            <IconButton
              onClick={() => {
                let newTurnOrder = [...turnOrder];
                let index = newTurnOrder.findIndex(
                  (turn) => turn.nome === active
                );
                if (index === -1) {
                  setActive(newTurnOrder[0].nome);
                } else {
                  if (index === newTurnOrder.length - 1) {
                    setActive(newTurnOrder[0].nome);
                  } else {
                    setActive(newTurnOrder[index + 1].nome);
                  }
                }
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </div>
        </div>
      </NavModal>
    </>
  );
}
