import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function ShortCircuitOperator() {
  return (
    <>
      <h1>Short Circuit Operator</h1>
      <ul data-ul="Short Circuit Operator">
        <li>Short Circuit Operator is Shorthand of only if statement</li>
        <li>In Short Circuit Operator is {`&&`} (and)Operator</li>
      </ul>
      <ReactCode file="index" dot="jsx" code={`
      import React from "react";
      export default function ShortCircuitOperator() {
          let x = true;
          return(
            <p>{x && 'yes'}</p>
          )
       }`}/>
    </>
  );
}
