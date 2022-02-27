import React, { useState, useEffect } from "react";
import "./index.css";
const Button = ({ label, color, onClick, type }) => {
  const [buttonStyle, setButtonStyle] = useState({
    borderColor: "",
    color: "",
    backgroundColor: "#fff",
  });
  useEffect(() => {
    setButtonStyle({ borderColor: color, color, backgroundColor: "#fff" });
  }, [label, color]);

  // const buttonStyle = () => {

  // }
  return (
    <button
      type={type}
      className={"button-container"}
      style={{ buttonStyle }}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {label}
    </button>
  );
};

export default Button;
