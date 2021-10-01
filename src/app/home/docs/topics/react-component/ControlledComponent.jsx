import React, { useState } from "react";
import ReactCode from "../../../../components/ReactCode";

export default function ControlledComponent() {
    const [inVal, setInVal] = useState("default value");

    const inChange = (e) => {
        setInVal(e.target.value); //input in controll by react
    };

    return (
        <>
            <h1>Controlled Component</h1>
            <ul data-ul="what is Controlled Component">
                <li>
                    when we control to input filds by using <strong>state</strong> , that component are called Controlled Component
                </li>
            </ul>

            <input type="text" value={inVal} onChange={inChange} />
            <h4>{inVal}</h4>
            <br />
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
              import React, { useState } from "react";
              
              export default function Example() {
                  const [inVal, setInVal] = useState("default value");

                  const inChange = (e) => {
                     setInVal(e.target.value); //input in controll by react
                  };
            
                  return (
                      <>
                        <input type="text" value={inVal} onChange={inChange} />
                        <h4>{inVal}</h4>  
                      </>
                  )
              }
              
            `}
            />
        </>
    );
}
