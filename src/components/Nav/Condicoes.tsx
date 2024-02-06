import React from "react";
import { NavModal } from "./NavModal";
import { Sick } from "@mui/icons-material";

export function Condicoes() {
  return (
    <div>
      <NavModal icon={<Sick />} tooltip="Condições" >
        <div>
            Condições
        </div>
      </NavModal>
    </div>
  );
}