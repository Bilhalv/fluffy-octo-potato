import { Drawer, Modal } from "@mui/material";
import { Library } from "lucide-react";
import React from "react";

export function Biboteca() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(true);
  return (
    <>
      <button
        onClick={() => {setModalOpen(!modalOpen)}}
        className="p-2 bg-red-600 rounded-full hover:scale-110 hover:bg-red-400 transition-all"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={"Biboteca"}
        data-tooltip-variant="error"
      >
        <Library />
      </button>
      <Drawer
        open={modalOpen}
        anchor="bottom"
        onClose={() => {
          setModalOpen(!modalOpen);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& .MuiDrawer-paper": {
            bgcolor: "rgba(255, 255, 255, 0.1)",
            color: "white",
            backdropFilter: "blur(5px)",
            paddingX: "20px",
            paddingY: "10px",
          },
        }}
      >
        <div className="font-tormenta">
          <h1>Biblioteca</h1>
          <p className="bg-gradient-to-r from-yellow-600 via-black to-yellow-500 inline-block text-transparent bg-clip-text">Em construção</p>
        </div>
      </Drawer>
    </>
  );
}
