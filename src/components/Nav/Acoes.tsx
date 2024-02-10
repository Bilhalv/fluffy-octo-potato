import { DirectionsRun } from "@mui/icons-material";
import React from "react";
import { NavModal } from "./NavModal";

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