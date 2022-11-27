import { DIGIT, EQUALS, OPERATOR, FUNCTION, DECIMAL, PLACEHOLDER } from "../calculatorApp.reducer";

const NumparationButtons = [
    {
        id: "seven",
        label: 7,
        action: { type: DIGIT, data: "7" },

    },
    {
        id: "eight",
        label: 8,
        action: { type: DIGIT, data: "8" },

    },
    {
        id: "nine",
        label: 9,
        action: { type: DIGIT, data: "9" },

    },
    {
        id: "DEL",
        label: "DEL",
        bg: "#4f2728",
        action: { type: FUNCTION, data: "DEL" },

    },
    {
        id: "clear",
        label: "AC",
        bg: "#4f2728",
        action: { type: "CLEAR" },

    },
    {
        id: "four",
        label: "4",
        action: { data: "4", type: DIGIT },
    },
    {
        id: "five",
        label: 5,
        action: { data: "5", type: DIGIT },
    },
    {
        id: "six",
        label: 6,
        action: { data: "6", type: DIGIT },
    },
    {
        id: "multiply",
        label: "×",
        action: { data: "×", type: OPERATOR },
    },
    {
        id: "divide",
        label: "÷",
        action: { data: "÷", type: OPERATOR },
    },
    {
        id: "one",
        label: 1,
        action: { data: "1", type: DIGIT }
    },
    {
        id: "two",
        label: 2,
        action: { data: "2", type: DIGIT }
    },
    {
        id: "three",
        label: "3",
        action: { data: "3", type: DIGIT }
    },
    {
        id: "add",
        label: "+",
        action: { data: "+", type: OPERATOR }
    },
    {
        id: "subtract",
        label: "-",
        action: { data: "-", type: OPERATOR }
    },
    {
        id: "zero",
        label: "0",
        action: { data: "0", type: DIGIT }
    },
    {
        id: "decimal",
        label: ".",
        action: { data: ".", type: DECIMAL },
    },
    {
        id: "equals",
        label: "=",
        secondLabel: "",
        action: { type: EQUALS },

    },
];

export default NumparationButtons;