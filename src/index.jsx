import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./styles/dom.css";
import "./styles/fonts.css";
import "@fortawesome/fontawesome-free/css/all.css";

// React 18 new way of initializing react app:
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
