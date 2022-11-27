import { createContext } from "react";
import * as lightStyle from "./calculatorApp.module.light.js";
import * as darkStyle from "./calculatorApp.module.dark.js";

/* 
export const container = {
  width: 300,
  height: 'calc(100vh - 2rem)',
  margin: 'auto',
  padding: 10,
  marginTop: '1rem',
  color: fg,
  backgroundColor: bg,
  borderRadius: 30,
  border: '1px solid gray'
} */

export const themes = {
    light: lightStyle,
    dark: darkStyle
}

const context = createContext(null);
export default context;