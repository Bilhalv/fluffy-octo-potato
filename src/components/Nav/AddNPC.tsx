import { Add, AddCircle } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
} from "@mui/material";
import React, { useContext } from "react";
import { NPCShown } from "../../data/constructors/NPC";
import { Groups, NPCs } from "../../data/tables/NPCs";
import { NPCsContext } from "../../pages/Home";
import NPCBlock from "../Fichas/NPC";
import { NavModal } from "./NavModal";

export function AddNpc() {
  const { npcsShown, addNPC } = useContext(NPCsContext);

  const [selectedNpc, setSelectedNpc] = React.useState<string>();
  const [selectedGroup, setSelectedGroup] = React.useState<string>();
  const addNpcConst = () => {
    const npc: NPCShown = {
      ...(NPCs.find((item) => item.nome === selectedNpc) || NPCs[0]),
      id: npcsShown.length + 1,
    };
    if (npc) {
      addNPC(npc);
    }
  };
  const [tabs, setTabs] = React.useState(0);
  const addNpcGroupConst = () => {
    const group = Groups.find((item) => item.nome === selectedGroup)?.npcs;
    if (group) {
      const newNpcs: NPCShown[] = group.map((npc, idx) => {
        return {
          ...npc,
          id: npcsShown.length + 1 + idx,
        };
      });
      addNPC(newNpcs);
    }
  };
  return (
    <>
      <NavModal icon={<Add />} tooltip="Adicionar NPC">
        <Tabs
          className="mb-4 rounded-t-lg"
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          value={tabs}
          onChange={(_, value) => {
            setTabs(value);
          }}
        >
          <Tab label="NPCs" />
          <Tab label="Grupos" />
        </Tabs>
        {tabs === 0 ? (
          <FormControl fullWidth>
            <div className="flex">
              <InputLabel color="secondary">NPC</InputLabel>
              <Select
                className="w-full"
                color="secondary"
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

              <button
                onClick={addNpcConst}
                className="bg-red-500 p-1 border-2 rounded-full hover:scale-110 hover:bg-transparent text-white border-white transition-all w-fit h-fit m-auto hover:text-red-500 hover:border-red-500"
              >
                <Add />
              </button>
            </div>
            {selectedNpc && (
              <NPCBlock
                NPC={{
                  ...(NPCs.find((item) => item.nome === selectedNpc) ||
                    NPCs[0]),
                  id: npcsShown.length + 1,
                }}
                isModal
              />
            )}
          </FormControl>
        ) : (
          <FormControl fullWidth>
            <div className="flex">
              <InputLabel color="secondary">Group</InputLabel>
              <Select
                className="w-full"
                label="Group"
                color="secondary"
                value={selectedGroup}
                onChange={(e) => {
                  setSelectedGroup(e.target.value as string);
                }}
              >
                {Groups.map((item, index) => (
                  <MenuItem key={index} value={item.nome}>
                    {item.nome}
                  </MenuItem>
                ))}
              </Select>
              <button
                onClick={addNpcGroupConst}
                className="bg-red-500 p-1 border-2 rounded-full hover:scale-110 hover:bg-transparent text-white border-white transition-all w-fit h-fit m-auto hover:text-red-500 hover:border-red-500"
              >
                <Add />
              </button>
            </div>
            {selectedGroup && (
              <div className="flex justify-evenly flex-wrap gap-2 mt-2 text-white">
                {Groups.find((item) => item.nome === selectedGroup)?.npcs.map(
                  (npc, index) => (
                    <p>{npc.nome.split(` `)[0]}</p>
                  )
                )}
              </div>
            )}
          </FormControl>
        )}
      </NavModal>
    </>
  );
}
