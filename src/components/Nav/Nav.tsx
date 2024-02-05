import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import { AddNpc } from "./AddNPC";
import { TurnOrder } from "./TurnOrder";

export default function Nav() {
  const [tempAside, setTempAside] = React.useState<boolean>(false);
  const [aside, setAside] = React.useState<boolean>(false);
  function toggleAside() {
    setTempAside(!tempAside);
    setAside(!aside);
  }
  return (
    <>
      {aside ? (
        <aside
          className={`bg-white w-fit flex flex-col bg-opacity-25 fixed rounded-xl p-2 top-2 left-2 gap-2 items-center text-center text-white drop-shadow-[_2px_2px_rgba(0,0,0,0.25)] my-auto font-tormenta z-50 transition-transform ${
            tempAside ? "animate-fade-in-left" : "animate-fade-out-left"
          }`}
        >
          <button
            onClick={() => toggleAside()}
            className="bg-red-600 rounded-full p-2 hover:bg-red-400 transition-all hover:scale-110"
          >
            <VisibilityOff />
          </button>
          <AddNpc />
          <TurnOrder />
        </aside>
      ) : (
        <button
          onClick={toggleAside}
          className={
            "bg-red-600 rounded-full p-2 fixed top-2 left-[-20px] hover:left-0 transition-all opacity-50 hover:opacity-100 " +
            (tempAside ? "animate-fade-in-left" : "animate-fade-out-left")
          }
        >
          <Visibility />
        </button>
      )}
    </>
  );
}
