import React, { useState } from "react";
import ReactCode from "../../../../components/ReactCode";

export default function ShortCircuitOperator() {
    const [x, setX] = useState();
    const [y, setY] = useState();

    const userObj = {
        username: null,
    };

    return (
        <>
            <h1>Short Circuit Operator</h1>
            {/*_______________Short Circuit AND Operator____________*/}
            <ul data-ul="Short Circuit AND Operator">
                <li>Short Circuit AND Operator is Shorthand of only if statement</li>
                <li>In Short Circuit Operator is {`&&`} (and)Operator</li>
            </ul>
            <ReactCode
                file="index"
                dot="jsx"
                code={`
      import React,{ useState } from "react";
      export default function ShortCircuitOperator() {
          const [x, setX] = useState();
          return(
            {
              x &&  <h1>data here</h1>
            }
            <button onClick={() => setX(1)}>click here</button>
          )
       }`}
            />

            {x && <h1>data here</h1>}
            <button onClick={() => setX(1)}>click here</button>

            {/*_______________Short Circuit OR Operator____________*/}
            <ul data-ul="Short Circuit OR Operator">
                <li>Short Circuit OR Operator use as a default value</li>
            </ul>
            <ReactCode
                file="index"
                dot="jsx"
                code={`
           import React from "react";
         
           export default function ShortCircuitOperator() {
              const [y, setY] = useState();
              return(
                <h3>{y || "default value here"}</h3>
                <button onClick={() => setY('new value')}>click here</button>
            )
          }`}
            />
            <h3>{y || "default value here"}</h3>
            <button onClick={() => setY("new value")}>click here</button>

            {/*__________________Nullish Coalescing_______________________ */}
            <ul data-ul="Nullish Coalescing">
              <li>Nullish Coalescing check null or undefined</li>
            </ul>
            <ReactCode
                file="index"
                dot="jsx"
                code={`
                import React from 'react'
                
                export default index ShortCircuitOperator() {
                  const userObj = {
                    username: null,
                  };

                  return (
                    <>
                      // null object key value
                      <p>{userObj.username ?? "error: undefined or null"}</p>

                      // undefined object key value
                      <p>{userObj.abc ?? "error: undefined or null"}</p>
                    </>
                  )
                }
                
                `}
            />
            <h3>{userObj.usernamess ?? "error: undefined or null"}</h3>
        </>
    );
}
