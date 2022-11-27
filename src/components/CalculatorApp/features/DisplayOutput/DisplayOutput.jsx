import React from "react";
import style from "./displayOutput.module.css";

export default function DisplayOutput({ output }) {
  return <div className={style.DisplayOutput}>{output}</div>;
}
