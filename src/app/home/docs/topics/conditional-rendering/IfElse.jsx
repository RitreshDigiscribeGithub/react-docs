import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function IfElse() {
  return (
    <>
      <h1>if / else</h1>
      <ul data-ul="if / else conditional">
        <li>In react , if / else condition use like java script if / else but it is return JSX</li>
      </ul>
      <ReactCode file="index" dot="js" code={`
         import React from 'react'
         
         export default function IfElse() {
           let x = true;
           return (
            if (x) {
             return <h1>yes</h1>;
            } else {
              return <h1>no</h1>;
            }
           )
         }
      `} />
    </>
  );
}
