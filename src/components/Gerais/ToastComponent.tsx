import React, { ReactNode } from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  title: string;
  message: ReactNode;
  duration?: number | false;
}

export function showToast({ title, message, duration = 3000 }: ToastProps) {
  toast(
    <>
      <h1 className="text-center font-tormenta">{title}</h1>
      <div className="text-justify text-xs">{message}</div>
    </>,
    {
      position: "top-right",
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
      closeButton: false,
      style: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        textShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
      },
    }
  );
}
