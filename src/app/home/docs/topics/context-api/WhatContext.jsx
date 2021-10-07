import React from "react";
import imgCA from "../../../../../assets/images/contextApi.png";
import ReactCode from "../../../../components/ReactCode";

export default function WhatContext() {
    return (
        <>
            <h1>What is Context Api</h1>
            <ul data-ul="">
                <li>by using Context API , we can access data from diffrent level of Component without manually pass down tree</li>
                <li>
                    example: <strong>Component-A(value='data') </strong> ------ no need pass in other Component-b-y() ---- <strong>Component-Z('data')</strong>
                </li>
            </ul>
            <img src={imgCA} alt="" className="img-fluid" />
            <ul data-ul="1 React.createContext">
                <li>we create Context outside component</li>
                <li>
                    we create to Context using <strong>createContext()</strong> method , that is called Context object
                </li>
                <li>when component is render so Context object to subscribes</li>
            </ul>
            <ReactCode
                file="syntax"
                dot="jsx"
                code={`
              import React, { createContext } from "react";
              const MyContext = createContext(defaultValue);
            `}
            />
            <ul data-ul="2 React.Provider">
                <li>Provider is allows to consuming context</li>
                <li>
                    Provider component accepts a <strong>value prop</strong>
                    in this provider we pass a data
                </li>
                <li>we set to Provider Inside a component then in Provider we set target component</li>
                <li>
                    we can use multiple Provider but in <strong>tree form</strong>
                </li>
                <li>context must be export</li>
            </ul>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
                import React, { createContext } from "react";
                
                const MyContext = createContext(defaultValue);

                export default function Example() {
                    return (
                        <>
                           <MyContext.Provider value={data}>{/* Provider of MyContext */}
                             <Child />{/* target component */}
                           </MyContext.Provider>
                        </>
                    )
                }
                export { MyContext };//export to context
                `}
            />
            <ul data-ul="3 React.Consumer">
                <li>In Consumer , we receives to data from provider</li>
                <li>In Consumer , comoponent receives the current context value and returns a React node</li>
                <li>we receives to provider data using call back</li>
            </ul>
            <ReactCode
                file="Child"
                dot="jsx"
                code={`
                import React from "react";
                import { MyContext } from './Component';

                export default function Child() {
                    return (
                        <>
                           <MyContext.Consumer>{
                               (x)=> (
                                 <>
                                   <p>{x}</p>
                                </>) 
                            }</MyContext.Consumer>
                        </>
                    )
                }
                `}
            />
        </>
    );
}
