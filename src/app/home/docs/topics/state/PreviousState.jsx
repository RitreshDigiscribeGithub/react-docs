import React, { useState } from "react";
import ReactCode from "../../../../components/ReactCode";

export default function PreviousState() {
    const [current, setCurrent] = useState();
    const [previous, setPrevious] = useState();

    const changeValue = () => {
        let x = Math.round(Math.random() * 10);

        setCurrent((pre) => {
            setPrevious(pre);
            return x;
        });
    };
    return (
        <>
            <h1>get previous state</h1>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
            import React, { useState } from "react";
            
            export default function Example() {
                const [current, setCurrent] = useState();
                const [previous, setPrevious] = useState();

                const changeValue = () => {
                    let x = Math.round(Math.random() * 10);
            
                    setCurrent((pre) => {
                        setPrevious(pre);
                        return x;
                    });
                };
                return (
                    <div>
                        <h3>current value : {current}</h3>
                        <h3>previous value : {previous}</h3>
                        <button onClick={changeValue}>click here</button>
                    </div>
                )
            }
            
            `}
            />
            <h3>current value : {current}</h3>
            <h3>previous value : {previous}</h3>
            <button onClick={changeValue}>click here</button>
        </>
    );
}
