import React, { useState, useEffect, useRef } from "react";
import { Alert, AlertTitle } from "@mui/material";
import ReactCode from "../../../../components/ReactCode";

export default function PreviousProps() {
    const [count, setCount] = useState();

    const countFunc = () => {
        setCount(Math.round(Math.random() * 100));
    };
    return (
        <>
            <h1>get previous Prop</h1>

            <ReactCode
                file="Example"
                dot="jsx"
                code={`
              import React, { useState } from "react";
              const [count, setCount] = useState();

              const countFunc = () => {
                  setCount(Math.round(Math.random() * 100));
              };

               export default function Example() {
                   return (
                       <>
                           <Component data={count} /> 
                       </>
                   )
               }
               
            `}
            />

            <ReactCode
                file="Component"
                dot="jsx"
                code={`
                import React, { useEffect, useRef } from "react";

                function Component(props) {
                    const val = useRef(); //useRef in teke value
                    useEffect(() => {
                        val.current = props.data;
                    });
                    return (
                        <>
                          <strong>previous props : {val.current}</strong>
                        </>
                    );
                }
            `}
            />
            <Alert severity="info">
                <AlertTitle>Example.jsx</AlertTitle>
                <strong>current state : {count}</strong>
            </Alert>
            <br />
            <Component data={count} />
            <button onClick={countFunc}>button</button>
        </>
    );
}

function Component(props) {
    const val = useRef(); //useRef in teke value
    useEffect(() => {
        val.current = props.data;
    });
    return (
        <>
            <Alert severity="info">
                <AlertTitle>Component.jsx</AlertTitle>
                <strong>previous props : {val.current}</strong>
            </Alert>
        </>
    );
}
