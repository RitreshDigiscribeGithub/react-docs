import React from "react";
import FolderSetup from "./FolderSetup/FolderSetup";
import ReactCode from "../../../../components/ReactCode";

export default function ReduxSetUp() {
    return (
        <>
            <h1>Redux Set Up</h1>
            <hr />
            <h3>folder structure</h3>
            <FolderSetup />
            <h3>Set Up</h3>
            {/* create to actions */}
            <ul data-ul="1 create to actions in"></ul>
            <ReactCode
                file="redux/actions/index"
                dot="js"
                code={`
                export const increaseCount = (data) => {
                    return {
                        type: "increaseCount",
                        myPayLoad: data,
                    };
                };
            `}
            />
            {/* create to Reducers */}
            <ul data-ul="2 create to Reducer for actions"></ul>
            <ReactCode
                file="redux/reducers/counter-reducers/counter"
                dot="js"
                code={`
                const initialState = 0;

                const counterReducers = (state = initialState, action) => {
                    //action.myPayLoad
                    switch (action.type) {
                        case "increaseCount":
                            return state + 1;
                        default:
                            return state;
                    }
                };
                
                export default counterReducers;
            `}
            />
            {/* create to Root Reducer */}
            <ul data-ul="3 create to Root Reducer for combine to all reducers"></ul>
            <ReactCode
                file="redux/reducers/index"
                dot="js"
                code={`
                import counterReducers from "./counter-reducers/counter";
                import { combineReducers } from "redux";

                const rootReducer = combineReducers({
                    counterReducers, //here add multiple reducers
                });

                export default rootReducer;
            `}
            />
            {/* create to store */}
            <ul data-ul="4 create to a store"></ul>
            <ReactCode
                file="redux/store/store"
                dot="js"
                code={`
                import rootReducer from "../reducers/index";
                import { createStore } from "redux";

                const ReduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

                const store = createStore(rootReducer, ReduxDevTool); //global centralized store

                export default store;
            `}
            />
            {/* set a Provider */}
            <ul data-ul="5 set a Provider in index.js"></ul>
            <ReactCode
                file="index"
                dot="js"
                code={`
                import React from "react";
                import ReactDOM from "react-dom";
                import App from "./app/App";
                import store from "./store/store";
                import { Provider } from "react-redux";

                store.subscribe(() => console.log(store.getState()));

                ReactDOM.render(
                    <Provider store={store}>
                        <App />
                    </Provider>,
                    document.getElementById("root")
                );
            `}
            />

            <ul data-ul="6 trigger to action in component"></ul>
            <ReactCode
                file="Main"
                dot="jsx"
                code={`
                import React from "react";
                import { useDispatch, useSelector } from "react-redux";
                import { increaseCount } from "../actions/index";
                
                export default function Main() {
                    const myState = useSelector((state) => state.counterReducers); //call to counterReducers Reducer
                    const dispatch = useDispatch();
                
                    return (
                        <>
                            <h1>{myState}</h1>
                            <button onClick={() => dispatch(increaseCount())}>click here</button>
                        </>
                    );
                }
            `}
            />
        </>
    );
}
