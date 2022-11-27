import React, { useContext } from "react";
import style from "./numparationsButton.module.css";

export default function NumparationButton({
  id,
  action,
  bg = "#0f1316",
  fg = "#aeb5b8",
  label,
}) {
  return (
    <div className={style.NumparationsButton}>
      <button
        id={id}
        onClick={action}
        style={{ color: fg, backgroundColor: bg }}
      >
        {label}
      </button>
    </div>
  );
}
