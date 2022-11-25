import React, { useContext } from "react";
import ThemeContext, { themes } from "../context/ThemeContext";

export default function CalculatorApp({ setTheme }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`d-flex flex-column justify-content-start align-content-stretch rounded-2 ${theme.container}`}
      style={{
        width: "300px",
        height: "calc( 100vh - 2rem )",
        margin: "auto",
        padding: "10px",
        marginTop: "1rem",
      }}
    >
      <h1>JS Calculator</h1>
      <button
        onClick={() => setTheme(theme.darkMode ? themes.light : themes.dark)}
        className={theme.btn.outline}
      >
        <i className="fa-solid fa-circle-half-stroke"></i>
      </button>
    </div>
  );
}
