import { useState } from "react";
import "./Box.css";

export default function Box(props) {
  const [color, setColor] = useState("#fffff");

  const toggleColor = () => {
    setColor(() => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return "#" + randomColor;
    });
  };
  return (
    <div
      className='Box'
      style={{ backgroundColor: color }}
      onClick={toggleColor}
    ></div>
  );
}
