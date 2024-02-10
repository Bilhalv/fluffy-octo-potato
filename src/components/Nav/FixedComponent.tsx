import { Drawer } from "@mui/material";
import React from "react";
import { regras } from "../../data/constructors/Regra";
import { PushPin } from "@mui/icons-material";
import { fixedContext } from "./Nav";

interface ToastProps {
  regra: regras;
  changefixed: (condicao: regras) => void;
}

function Toast({ regra, changefixed }: ToastProps) {
  return (
    <div className="flex flex-col gap-1 p-4 rounded-2xl bg-red-600 bg-opacity-40 font-tormenta">
      <div className="flex justify-between items-center">
        <h1 className="text-lg">{regra.titulo}</h1>
        <button
          onClick={() => {
            changefixed(regra);
          }}
          className="p-2 bg-red-600 rounded-full hover:scale-110 hover:bg-red-400 transition-all"
        >
          <PushPin />
        </button>
      </div>
      <p className="font-poppins italic">{regra.descricao}</p>
    </div>
  );
}

export function FixedComponent() {
  const [open, setOpen] = React.useState(false);
  const { regrasFixadas, setRegrasFixadas } = React.useContext(fixedContext);

  const changefixed = (regra: regras) => {
    if (!regrasFixadas.includes(regra)) {
      setRegrasFixadas([...regrasFixadas, regra]);
    } else {
      setRegrasFixadas(regrasFixadas.filter((c) => c !== regra));
    }
    if (regrasFixadas.length === 1) {
      setOpen(false);
    }
  };

  return (
    <>
      {regrasFixadas.length > 0 && (
        <button
          onClick={() => setOpen(true)}
          className="p-2 bg-red-600 rounded-full hover:scale-110 hover:bg-red-400 transition-all disabled:opacity-5"
        >
          <PushPin />
        </button>
      )}
      <Drawer
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "rgba(255, 255, 255, 0.1)",
            color: "white",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="w-auto p-2 gap-2 overflow-scroll flex flex-col max-h-40">
          {regrasFixadas.map((condicao) => (
            <Toast
              key={condicao.titulo}
              regra={condicao}
              changefixed={changefixed}
            />
          ))}
        </div>
      </Drawer>
    </>
  );
}
