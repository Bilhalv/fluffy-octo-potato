import { Modal, Tooltip } from "@mui/material";
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
      <Tooltip
        title={
          <>
            <div className="font-tormenta">{tooltip}</div>
          </>
        }
        arrow
      >
        <button
          onClick={toggleModal}
          className="p-2 bg-red-600 rounded-full hover:scale-110 hover:bg-red-400 transition-all"
        >
          {icon}
        </button>
      </Tooltip>
      <Modal
        open={modalOpen}
        onClose={toggleModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="bg-white bg-opacity-75 w-1/2 p-4 mx-auto rounded-xl my-auto font-tormenta">
          {children as React.ReactElement}
        </div>
      </Modal>
    </>
  );
}
