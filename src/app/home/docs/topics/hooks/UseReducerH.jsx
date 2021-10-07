import React, { useReducer } from "react";
import ReactCode from "../../../../components/ReactCode";

// Reducer Function
const reducerFunction = (state, action) => {
    alert("action is work : " + action);
    let x = state + 1;
    return x;
};

export default function UseReducerH() {
    const [state, dispatch] = useReducer(reducerFunction, 0);

    return (
        <>
            <h3>Reducer function</h3>
            <ul data-ul="">
                <li>Reducer function is pure function that is return state</li>
                <li>
                    In reducer function have two parameters <strong>state</strong> and <strong>action</strong> and return a <strong>new state</strong>
                </li>
                <li>Reducer function have to define out side or inside component</li>
                <li>Reducer function don't produses side-effect</li>
                <li>it is always return to result according to pass argument</li>
                <li>
                    reducer function is pass as a argument in <strong>useReducer hook</strong>
                </li>
            </ul>
            <ReactCode
                file="syntex"
                dot="jsx"
                code={`
                const reducerFunction = (state, action) => {
                    return state;
                };
            `}
            />
            <h3>useReducer hook</h3>
            <ul data-ul="what is useReducer hook">
                <li>useReducer hook is same like useState hook but it is use for manage mulitiple state</li>
            </ul>
            <ReactCode
                file="syntex"
                dot="jsx"
                code={`
                const [state, dispatch] = useReducer(Reducer Function, initialState);
            `}
            />
            <ul data-ul="dispatch">
                <li>
                    dispatch methon is trigger to <strong>action</strong> method from <strong>Reducer function</strong>
                </li>
                <li>In dispatch , we preform any action for state change</li>
                <li>
                    we can call to <strong>{`dispatch()`} method</strong> by event etc.
                </li>
            </ul>
            <ul data-ul="ues to dispatch using click event"></ul>
            <ReactCode
                file="syntex"
                dot="jsx"
                code={`
                <button onClick={() => dispatch("my action")}>button</button>
            `}
            />
            <h3>how to use useReducer hook</h3>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
                import React, { useReducer } from "react";
                
                //reducer Function
                const reducerFunction = (state, action) => {
                    alert("action is work : " + action);
                    let x = state + 1;
                    return x; 
                };
                //reducer Function

                export default function Example() {
                    const [state, dispatch] = useReducer(reducerFunction, 0);
                    return (
                        <>
                          <h1>{state}</h1>
                           <button onClick={() => dispatch("my action")}>
                           button</button>  
                        </>
                    )
                }
                
            `}
            />
            <h1>{state}</h1>
            <button onClick={() => dispatch("my action")}>button</button>
        </>
    );
}
