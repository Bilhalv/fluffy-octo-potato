import { Add, AddCircle } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import { NPCShown } from "../../data/constructors/NPC";
import { NPCs } from "../../data/tables/NPCs";
import { NPCsContext } from "../../pages/Home";
import NPCBlock from "../Fichas/NPC";
import { NavModal } from "./NavModal";

export function AddNpc() {
  const { npcsShown, addNPC } = useContext(NPCsContext);

  const [selectedNpc, setSelectedNpc] = React.useState<string>();
  const addNpcConst = () => {
    const npc: NPCShown = {
      ...(NPCs.find((item) => item.nome === selectedNpc) || NPCs[0]),
      id: npcsShown.length + 1,
    };
    if (npc) {
      addNPC(npc);
    }
  };
  return (
    <>
      <NavModal icon={<Add />} tooltip="Adicionar NPC">
        <FormControl fullWidth>
          <InputLabel>NPC</InputLabel>
          <Select
            label="NPC"
            value={selectedNpc}
            onChange={(e) => {
              setSelectedNpc(e.target.value as string);
            }}
          >
            {NPCs.map((item, index) => (
              <MenuItem key={index} value={item.nome}>
                {item.nome}
              </MenuItem>
            ))}
          </Select>
          {selectedNpc && (
            <NPCBlock
              NPC={{
                ...(NPCs.find((item) => item.nome === selectedNpc) || NPCs[0]),
                id: npcsShown.length + 1,
              }}
              isModal
            />
          )}
          <button
            onClick={addNpcConst}
            className="bg-green-600 p-2 rounded-full hover:scale-110 hover:bg-green-400 transition-all w-fit mx-auto mt-2"
          >
            <AddCircle />
          </button>
        </FormControl>
      </NavModal>
    </>
  );
}
