import { useState } from "react";
import "./Box.css";

export default function Box(props) {
  const [color, setColor] = useState("vermelho");

  const toggleColor = () => {
    setColor((prevColor) => {
      return prevColor === "vermelho" ? "azul" : "vermelho";
    });
  };
  return <div className={`Box ${color}`} onClick={toggleColor}></div>;
}
