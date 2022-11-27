import React from "react";
import style from "./displayStatus.module.css";

export default function DisplayStatus({ currentOn }) {
  return (
    <ul className={style.DisplayStatus}>
      {Array.isArray(currentOn) &&
        currentOn.map((item, i) => (
          <li key={i} className={item.className}>
            {item.text}
          </li>
        ))}
    </ul>
  );
}
