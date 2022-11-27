import React from "react";
import CalculatorApp from "./components/CalculatorApp/CalculatorApp";

export default function App(props) {
  return (
    // hook the value of ThemeContext to the the "theme" state.
    <div className="appContainer" style={{ margin: "auto" }}>
      <CalculatorApp />
      <div style={{ textAlign: "center", verticalAlign: "middle" }}>
        <p>Designed and created by:</p>
        <h3>
          <a
            href="https://jephthah-orobia.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Jephthah M. Orobia
          </a>
        </h3>
      </div>
    </div>
  );
}
