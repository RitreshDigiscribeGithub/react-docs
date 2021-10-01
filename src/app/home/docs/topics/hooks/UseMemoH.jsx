import React, { useState, useMemo } from "react";
import ReactCode from "../../../../components/ReactCode";

export default function UseMemoH() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(100);

  const multiplication = useMemo(() => {
    alert("Multiplication of x function with useMemo hook");
    return x * 200;
  }, [x]);

  return (
    <>
      <h1>useMemo hook</h1>
      <ul data-ul="what is useMemo hook">
        <li>useMemo hook is same like pure component but only for function component</li>
        <li>useMemo hook is prevent to unnecessary calling functions in component</li>
      </ul>
      <ul data-ul="useMemo syntax"></ul>
      <ReactCode
        file="Syntax"
        dot="jsx"
        code={`

        const variableName = useMemo(() => {
            //code here
        },[state (or) props variableName]);

      `}
      />

      <ul data-ul="how to use useMemo hook"></ul>
      <ReactCode
        file="Example"
        dot="jsx"
        code={`
        import React, { useState, useMemo } from "react";
         
         export default function Example() {
            const [x, setx] = useState(0);
            const [y, sety] = useState(100);

            //function without useMemo: calling every time ,every state (x,y)
            const multi = () => {
                return x * 200;
            };

            //function with useMemo: calling only x state change
            const multi = useMemo(() => {
                return x * 200;
              }, [x]);

             return (
                 <>
                  <p>x : {x}</p>
                  <p>y : {y}</p> 
                  <p>without useMemo x : {multi()}</p>
                  <p>with useMemo x : {multi}</p>
                  <button onClick={() => setx(x + 1)}>change x value</button>
                  <button onClick={() => sety(y + 1)}>change y value</button>
                 </>
             )
         }
         
      `}
      />
      <h3>x : {x}</h3>
      <h3>y : {y}</h3>
      <h3>multiplication for x : {multiplication}</h3>
      <p>
        <button onClick={() => setx(x + 1)}>change x value</button>
      </p>
      <p>
        <button onClick={() => sety(y + 1)}>change y value</button>
      </p>
    </>
  );
}
