import React from "react";
import CalculatorApp from "./components/CalculatorApp/CalculatorApp";

export default function App(props) {
  return (
    // hook the value of ThemeContext to the the "theme" state.
    <div className="appContainer">
      <CalculatorApp />
    </div>
  );
}
