import React from "react";
import { TurnOrderContext } from "./TurnOrder";
import { Bounce, toast } from "react-toastify";
import { Pin, PinOff } from "lucide-react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export function ToastTurnOrder() {
  const [toastShown, setToastShown] = React.useState<boolean>(false);
  const { active, move } = React.useContext(TurnOrderContext);

  React.useEffect(() => {
    if (toastShown) {
      toast.info(
        <div>
          <div className="flex flex-col gap-3 items-center">
            <h1>Turno</h1>
            <div className="flex justify-evenly w-full">
              <IconButton
                onClick={() => {
                  move("left");
                  toast.dismiss();
                }}
              >
                <ArrowBackIos />
              </IconButton>
              <p>{active}</p>
              <IconButton
                onClick={() => {
                  move("right");
                  toast.dismiss();
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            </div>
          </div>
        </div>,
        {
          position: "top-right",
          autoClose: false,
          draggable: true,
          icon: false,
          style: {
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
          },
          theme: "dark",
          transition: Bounce,
          closeButton: ({ closeToast }) => (
            <button onClick={closeToast}>
              <PinOff />
            </button>
          ),
        }
      );
    } else {
      toast.dismiss();
    }
  }, [active, move, toastShown]);
  return (
    <>
      <button onClick={() => setToastShown(!toastShown)}>
        <Pin />
      </button>
    </>
  );
}
