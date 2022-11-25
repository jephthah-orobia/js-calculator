import React, { useState } from "react";
import ThemeContext, { themes } from "./context/ThemeContext";
import CalculatorApp from "./components/CalculatorApp";

export default function App(props) {
  // state to hold theme
  const [theme, setTheme] = useState(themes.light);

  return (
    // hook the value of ThemeContext to the the "theme" state.
    <ThemeContext.Provider value={theme}>
      {/* pass the state setter of "theme" to the app. */}

      <CalculatorApp setTheme={setTheme} />
    </ThemeContext.Provider>
  );
}
