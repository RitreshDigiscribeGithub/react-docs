import React from "react";
import ReactCode from "../../../../components/ReactCode";
export default function JsxRules() {
  return (
    <>
      <h1>Jsx Rules</h1>
      <ul data-ul="JSX Rules">
     <ReactCode file="jsx_rules" dot="jsx" code={`
     //1 Return Single only Element.
        const x= (
            <div>
               <p>foo</p>
               <p>bar</p>
            </div>  
        );

      //2 Use camelCase for HTML Attribute.
      const x = <div contentEditable="ture"></div>

      //3 Use className not Class becouse :class is a reserved keyword
      const x = <div className="card"></div>

      //4 self tag also closing
      <input type="text" />

      //5 should not have any Spacing in element
      <input type="text"        />//bad
      <input type="text" />//good
      
      //6 only use double quotes
      <div className='container'></div>//bad 
      <div className="container"></div>//good

      //7 don't binding data in double quotes, single quotes  for attribute 
      const x = "container"
      <div className="{x}"></div>//bad
      <div className={x}></div>//good

      //8 auxiliary attribute must be use
     <img src="hello.jpg" />// bad
     <img src="hello.jpg" alt="no image" /> // good
      `} />
     </ul>
    </>
  );
}
