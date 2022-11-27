import React, { useState } from "react";
import ThemeContext, { themes } from "./calculatorApp.context";
import style from "./calculatorApp.module.css";
import DisplayStatus from "./features/DisplayStatus/DisplayStatus";
import DisplayInput from "./features/DisplayInput/DisplayInput";
import DisplayOutput from "./features/DisplayOutput/DisplayOutput";

export const DIGIT = "operator",
  OPERATOR = "operator",
  LETTER = "letter";

export default function CalculatorApp() {
  const [inputs, setInputs] = useState([
    { className: "", type: DIGIT, text: 1 },
    { className: "", type: OPERATOR, text: "+" },
    { className: "current", type: DIGIT, text: 2 },
  ]);

  const [output, setOutput] = useState(3);
  return (
    <div className={style.calcAppContainer}>
      <div className={style.calcAppHeader}>
        <h1 className={style.calcAppHeaderTitle}>A Simple Calculator</h1>
      </div>
      <div className={style.calcAppDisplayContainer}>
        <div className={style.calcAppDisplay}>
          <DisplayStatus
            currentOn={[
              { text: "M", className: "" },
              { text: "D", className: style.invertedBox },
              { text: "Math ▲", className: "" },
            ]}
          />
          <DisplayInput inputs={inputs} />
          <DisplayOutput output={output} />
        </div>
      </div>
      <div className={style.calcAppControl}>Misc Button Here</div>
      <div className={style.calcAppNumparations}>Numeric Buttons Bere</div>
    </div>
  );
}
