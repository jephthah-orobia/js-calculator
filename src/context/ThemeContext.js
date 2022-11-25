import { createContext } from "react";

export const themes = {
    light: {
        darkMode: false,
        container: "text-bg-light",
        btn: {
            outline: "btn btn-outline-dark"
        }
    },
    dark: {
        darkMode: true,
        container: "text-bg-dark",
        btn: {
            outline: "btn btn-outline-light"
        }
    }
}

const context = createContext(themes.light);

export default context;