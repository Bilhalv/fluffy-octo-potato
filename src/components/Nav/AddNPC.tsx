import { Add, AddCircle } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";

export function AddNpc() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  function addNpc() {
    console.log("Adicionando NPC");
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
        <div className="bg-white w-fit p-4 mx-auto rounded-full my-auto">
            {/*
                here will be a select, bellow a npc sheet adapted without the new aditions(delete button, move button), and then a button to add the npc
            */}
        </div>
      </Modal>
    </>
  );
}
