import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import React from "react";
import { NavModal } from "./NavModal";

export function Manobras() {
  return (
    <div>
      <NavModal icon={<AirlineStopsIcon />} tooltip="Manobras" >
        <div>
            Manobras
        </div>
      </NavModal>
    </div>
  );
}