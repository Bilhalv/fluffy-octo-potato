import { Sick } from "@mui/icons-material";
import React from "react";
import { CondicoesRegras } from "../../data/tables/Regras";
import { NavModal } from "./NavModal";
import { SearchComponent } from "./SearchComponent.tsx";

export function Condicoes() {
  return (
    <>
      <NavModal icon={<Sick />} tooltip="Condições">
        <h1 className="text-xl text-center">Condições</h1>
        <SearchComponent
         regras={CondicoesRegras}
        />
      </NavModal>
    </>
  );
}
