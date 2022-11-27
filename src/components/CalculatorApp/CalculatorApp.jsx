import React, { useReducer } from "react";
import style from "./calculatorApp.module.css";
import DisplayStatus from "./features/DisplayStatus/DisplayStatus";
import DisplayInput from "./features/DisplayInput/DisplayInput";
import DisplayOutput from "./features/DisplayOutput/DisplayOutput";
import NumparationButton from "./features/NumparationsButton/NumparationsButton";
import reducer, { initialState } from "./calculatorApp.reducer";
import DigOpActions from "./dataActions/DigOpActions";

export default function CalculatorApp() {
  const [display, dispatch] = useReducer(reducer, initialState);

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
          <DisplayInput inputs={display.input} />
          <DisplayOutput output={display.output} />
        </div>
      </div>
      <div className={style.calcAppNumparations}>
        {DigOpActions.map((item, i) => (
          <NumparationButton
            key={i}
            id={item.id}
            label={item.label}
            action={() => dispatch(item.action)}
            bg={item.bg}
          />
        ))}
      </div>
    </div>
  );
}
