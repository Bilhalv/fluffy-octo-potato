import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import React from "react";
import { NavModal } from "./NavModal";
import { SearchComponent } from './SearchComponent';
import { ManobrasRegras } from '../../data/tables/Regras';

export function Manobras() {
  return (
    <div>
      <NavModal icon={<AirlineStopsIcon />} tooltip="Manobras" >
      <h1 className="text-xl text-center">Manobras</h1>
      <SearchComponent regras={ManobrasRegras} />
      </NavModal>
    </div>
  );
}