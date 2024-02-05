import { Modal } from "@mui/material";
import React from "react";

interface Props {
  icon: any;
  children: React.ReactNode;
}

export function NavModal({ icon, children }: Props) {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  return (
    <>
      <button
        onClick={toggleModal}
        className="p-2 bg-red-600 rounded-full hover:scale-110 hover:bg-red-400 transition-all"
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
        }}
      >
        {children as React.ReactElement}
      </Modal>
    </>
  );
}
