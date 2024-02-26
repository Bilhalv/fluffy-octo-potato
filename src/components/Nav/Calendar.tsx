import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { NavModal } from "./NavModal";

export function Calendar() {

  return (
    <NavModal icon={<CalendarIcon size={24} />} tooltip="Calendário">
      <h1>Calendar</h1>
    </NavModal>
  );
}
