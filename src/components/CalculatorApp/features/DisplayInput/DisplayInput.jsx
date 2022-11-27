import React from "react";
import style from "./displayInput.module.css";

export default function DisplayInput({ inputs }) {
  return (
    <div className={style.DisplayInput}>
      {Array.isArray(inputs) &&
        inputs.map((item, i) => (
          <span className={item.className} key={i}>
            {item.text}
          </span>
        ))}
    </div>
  );
}
