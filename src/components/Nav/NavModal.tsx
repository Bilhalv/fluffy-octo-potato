import { Modal } from "@mui/material";
import { Tooltip } from "react-tooltip";
import React from "react";

interface Props {
  icon: any;
  children: React.ReactNode;
  tooltip: string;
}

export function NavModal({ icon, children, tooltip }: Props) {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  return (
    <>
      <button
        onClick={toggleModal}
        className="p-2 bg-red-600 rounded-full hover:scale-110 hover:bg-red-400 transition-all"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={tooltip}
        data-tooltip-variant="error"
      >
        {icon}
      </button>
      <Modal
        open={modalOpen}
        onClose={toggleModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& .MuiDrawer-paper": {
            bgcolor: "rgba(255, 255, 255, 0.1)",
            color: "white",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="bg-white bg-opacity-10 backdrop-blur w-1/2 p-4 mx-auto rounded-xl my-auto font-tormenta">
          {children as React.ReactElement}
        </div>
      </Modal>
    </>
  );
}
