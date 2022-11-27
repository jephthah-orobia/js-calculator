import React from "react";
import style from "./displayInput.module.css";

export default function DisplayInput({ inputs }) {
  return <div className={style.DisplayInput}>{inputs}</div>;
}
