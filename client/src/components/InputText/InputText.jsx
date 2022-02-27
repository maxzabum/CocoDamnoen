import React from "react";
import { Input } from "antd";
import "./index.css";
const InputText = ({ label, error, onChange, placeholder, value, type }) => {
  return (
    <div className="input-text-container">
      <p className="text-label">{label}</p>
      {type === "text" && (
        <Input
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`input-text ${error ? "error" : ""}`}
          type={type}
        />
      )}
      {type === "password" && (
        <Input.Password
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`input-text ${error ? "error" : ""}`}
          type={type}
        />
      )}
      {error && <p className="text-input-error">please input require field</p>}
    </div>
  );
};

export default InputText;
