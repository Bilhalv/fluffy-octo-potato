// add a mui component that can be stackable on a column, like the chackaui toast
import React from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  title: string;
  message: string | Element | JSX.Element;
  duration?: number | false;
}

export function showToast({ title, message, duration = 3000 }: ToastProps) {
  toast(
    <>
      <h1 className="text-center">{title}</h1>
      <p className="text-justify">{message.toString()}</p>
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
    }
  );
}
