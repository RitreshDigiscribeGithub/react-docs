import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function TernaryOperator() {
  return (
    <>
      <h1>Ternary Operator</h1>
      <ul data-ul="Ternary Operator conditional">
        <li>Ternary Operator is Shorthand of if/else</li>
        <li>Ternary Operator can be use in JSX template</li>
      </ul>
      <ReactCode file="index" dot="js" code={`
       import React from "react";
       export default function ShortCircuitOperator() {
           let x = true;
           return(
             <p>{x?'yes':'no'}</p>
           )
        }`} />
    </>
  );
}
