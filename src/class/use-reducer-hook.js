import React, { act, useReducer } from "react";
const testReducer = (state, action) => {
    if (action.type === "INC") {
        return state + 1
    } else if (action.type === "DEC") {
        return state - 1
    } else if (action.type === "RES") {
        return 0
    } else {
        return state;
    }
}
const SimpleReducerHook = () => {
    const [value, dispatch] = useReducer(testReducer, 0)

    return (<>
        <div>
            <button onClick={() => dispatch({ type: "INC" })}>+</button>
            <label>Counter:{value}</label>
            <button onClick={() => dispatch({ type: "DEC" })} >-</button>
            <br />
            <button onClick={() => dispatch({ type: "RES" })} >RESET</button>
        </div>
    </>)
}

const UseReducerHook = () => {
    return (<>
        <div>
            <SimpleReducerHook />
        </div>
    </>)
}
export default UseReducerHook;
