import { evaluate } from "mathjs";

function calculate(input) {
    let parsedInput = input.replace("×", "*");
    parsedInput = parsedInput.replace("÷", "/");
    return (evaluate(parsedInput)).toString();
}

export const DIGIT = "digit",
    OPERATOR = "operator",
    LETTER = "letter",
    FUNCTION = "function",
    EQUALS = "equals",
    PLACEHOLDER = "placeholder",
    DECIMAL = "decimal";

export const initialState = { input: "", output: "0", currentType: null };

export const reducer = (state, action) => {
    let result = '';
    let s = '';
    switch (action.type) {
        case DECIMAL:
            switch (state.currentType) {
                case DECIMAL:
                    return state;
                case DIGIT:
                    return state.output.indexOf(".") >= 0 ? state : {
                        input: state.input + ".",
                        output: state.output + ".",
                        currentType: action.type,
                    }
                case OPERATOR:
                    return {
                        input: state.input + "0.",
                        output: "0.",
                        currentType: DECIMAL
                    }
                default:
                    return {
                        input: "0.",
                        output: "0.",
                        currentType: DECIMAL
                    }
            }
        case DIGIT:
            switch (state.currentType) {
                case DIGIT:
                case DECIMAL:
                    return {
                        input: (state.output === "0") ? state.input : state.input + action.data,
                        output: (state.output === "0") ? "0" : state.output + action.data,
                        currentType: action.type,
                    };
                case OPERATOR:
                    return {
                        input: state.input + action.data,
                        output: action.data,
                        currentType: DIGIT,
                    };
                case EQUALS:
                    return {
                        input: action.data,
                        output: action.data,
                        currentType: DIGIT,
                    };
                default:
                    return action.data !== 0 ? {
                        input: action.data,
                        output: action.data,
                        currentType: DIGIT,
                    } : {
                        input: 0,
                        output: 0,
                        currentType: null
                    };
            }
        case OPERATOR:
            switch (state.currentType) {
                case OPERATOR:
                    return {
                        input: state.input.match(/[+-×÷]-$/i)
                            ? state.input.substring(0, state.input.length - 2) + action.data :
                            action.data === "-" ? state.input + "-" :
                                state.input.substring(0, state.input.length - 1) + action.data,
                        output: action.data,
                        currentType: action.type,
                    };
                case EQUALS:
                    return {
                        input: state.output + action.data,
                        output: action.data,
                        currentType: action.type,
                    };
                default:
                    return {
                        input: state.input + action.data,
                        output: action.data,
                        currentType: action.type,
                    };
            }
        case EQUALS:
            switch (state.curretType) {
                case OPERATOR:
                    s = state.input.substring(0, state.input.length - 1);
                    result = calculate(s);
                    return {
                        input: s + "=" + result,
                        output: result,
                        currentType: action.type,
                    };
                case EQUALS:
                    return {
                        input: state.input,
                        output: state.output,
                        currentType: action.type,
                    };
                default:
                    result = calculate(state.input);
                    return {
                        input: state.input + "=" + result,
                        output: result,
                        currentType: action.type,
                    };;
            }
        case FUNCTION:
            switch (action.data) {
                case "DEL":
                    s = state.input.substring(0, state.input.length - 1);
                    return {
                        input: s,
                        output: s.match(/((\d+\.*\d*)$|[+-×÷]$)/) ? s.match(/((\d+\.*\d*)$|[+-×÷]$)/)[0] : "0",
                        type: s.match(/[+-×÷]$/) ? OPERATOR
                            : s.match(/\d+$/) ? DIGIT
                                : s.match(/\.$/) ? DECIMAL : null
                    }
                default:
                    return state;
            }
        default:
            return initialState;
    }
};

export default reducer;