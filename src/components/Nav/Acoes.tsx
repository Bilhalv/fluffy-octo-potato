import { DirectionsRun } from "@mui/icons-material";
import React from "react";
import { NavModal } from "./NavModal";
import { AcoesRegras } from "../../data/tables/Regras";
import { SearchComponent } from "./SearchComponent";

export function Acoes() {
  return (
    <div>
      <NavModal icon={<DirectionsRun />} tooltip="Ações" >
        
      <h1 className="text-xl text-center">Ações</h1>
      <SearchComponent regras={AcoesRegras} />
      </NavModal>
    </div>
  );
}