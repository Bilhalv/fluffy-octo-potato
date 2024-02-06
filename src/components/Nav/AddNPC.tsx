import { Add, AddCircle } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import React from "react";
import { NPC } from "../../data/constructors/NPC";
import { NPCs } from "../../data/tables/NPCs";

export function AddNpc() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  const [npcs, setNpcs] = React.useState<NPC[]>(
    JSON.parse(localStorage.getItem("npcs") || "[]") as NPC[]
  );
  const [selectedNpc, setSelectedNpc] = React.useState<string | null>(null);
  function addNpc() {
    if (selectedNpc) {
      const atual = NPCs.find((item) => item.nome === selectedNpc);
      setNpcs([...npcs, atual as NPC]);
      setSelectedNpc(null);
      toggleModal();
      localStorage.setItem("npcs", JSON.stringify(npcs));
    }
  }
  return (
    <>
      <button
        onClick={toggleModal}
        className="p-2 bg-red-600 rounded-full hover:scale-110 hover:bg-red-400 transition-all"
      >
        <Add />
      </button>
      <Modal
        open={modalOpen}
        onClose={toggleModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="bg-white w-1/2 p-4 mx-auto rounded-xl my-auto">
          {/*
                here will be a select, bellow a npc sheet adapted without the new aditions(delete button, move button), and then a button to add the npc
            */}
          <div className="w-full p-4">
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
              <button
                onClick={addNpc}
                className="bg-green-600 p-2 rounded-full hover:scale-110 hover:bg-green-400 transition-all"
              >
                <AddCircle />
              </button>
            </FormControl>
          </div>
        </div>
      </Modal>
    </>
  );
}
