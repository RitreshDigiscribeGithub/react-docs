import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function StateInFunction() {
  return (
    <>
      <h1>state in function component</h1>
      <ul data-ul="useState in function component">
        <li>useState is a hook , that is use for update to state in component</li>
        <li>useState hook import form react</li>
        <li>useState return two item cureent vaule and update value</li>
        <li>In useState syntax use array destructuring</li>
      </ul>

      <ReactCode
        file="Syntax : useState"
        dot="jsx"
        code={`
           const [x, setNum] = useState(0);
          
         
           {/* x - is variable name */}
           {/* 0 - is initial value of x variable */}
           {/* setNum - function is which pass updated value as a argument */}
          `}
      />

      <ul data-ul="how to use useState hook in component">
        <li>
          <strong className="text-warning">warning : </strong>
          useState hook must be put top in componet
        </li>
      </ul>
      <ReactCode
        file="Component"
        dot="jsx"
        code={`
           import React, { useState } from "react";//import to useState hook
                       
           export default function StateRoutes() {
            const [x, setNum] = useState(0)//useState hook put top in componet
            
            //event
            const changesValue = () =>{
              let newValue = 1;
              setNum(newValue)
            }
            //event

             return (
               <>
                 <p>{x}</p>
                 <button onClick={changesValue}>click me</button>
               </>
             )
           }
          `}
      />
    </>
  );
}
