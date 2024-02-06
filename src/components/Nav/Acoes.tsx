import React from "react";
import { NavModal } from "./NavModal";
import { DirectionsRun } from "@mui/icons-material";

export function Acoes() {
  return (
    <div>
      <NavModal icon={<DirectionsRun />} tooltip="Ações" >
        <div>
            Ações
        </div>
      </NavModal>
    </div>
  );
}