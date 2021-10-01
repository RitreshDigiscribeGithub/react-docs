import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function ElementVariables() {
  return (
    <>
      <h1>Element Variables</h1>
      <ul data-ul="Element Variables">
        <li>Element Variables is same like if/eles but set JSX Element in Variables accoding to if/eles statement</li>
      </ul>
      <ReactCode file="index" dot="js" code={`
       import React from "react";
       export default function ShortCircuitOperator() {
         let x;
         if (true) {
           return x = <p>yes</p>;
         } else {
           return x = <p>no</p>;
         }
       }`} />
    </>
  );
}
