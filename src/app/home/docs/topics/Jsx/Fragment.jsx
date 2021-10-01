import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function Fragment() {
  return (
    <>
      <h1>fragment</h1>
      <ul data-ul="what is fragment">
        <li>we can use multiple elements in fragment without adding extra nodes in DOM.</li>
        <li>fragment is not add in nodes in DOM</li>
      </ul>
      <ReactCode file="fragment" dot="jsx" code={`
      
      //1 using React.Fragment
      import React from "react";

      const element = (
       <React.Fragment>
         <p>hello react js</p>
         <p>hello react js</p>
       </React.Fragment>);

          (or)
      //2 using Short Syntax
       const element = (
        <>
          <p>hello react js</p>
          <p>hello react js</p>
        </>);

      `} />
    </>
  );
}
