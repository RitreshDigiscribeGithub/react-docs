import React from "react";
import ReactCode from "../../../../components/ReactCode";
export default function WhatIsJsx() {
  return (
    <>
      <h1>jsx</h1>
      <ul data-ul="what is JSX">
        <li>JSX stands for JavaScript XML</li>
        <li>
          It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code). It is easy to create a template using JSX in React, but it is not a
          simple template language instead it comes with the full power of JavaScript.
        </li>
      </ul>
      <ReactCode file="syntax" dot="jsx" code={`
       const element = <h1>hello react js</h1>;
      `} />
       
       <ul data-ul="data binding in JSX">
           <li>dynamic value can be bind in JSX</li>
       </ul>
    
       <ReactCode file="syntax" dot="jsx" code={`
       const x="react js";
       const num= 17;  
       
       //interpolation
       const element = <h1>app:{x} v:{num}</h1>;

       //JavaScript expression -
       const element = <p>{1+1} {num===17?'foo':'bar'}</p> 

       //template string
       const element = <p>${"{`library is :${x} version :${num}`}"}</p> 
      `} />

      <ul data-ul="Advantages of JSX">
          <li>JSX makes it easier to write or add HTML in React.</li>
          <li>JSX prevents XSS (cross-site-scripting) attacks popularly known as injection attacks.</li>
      </ul>
    </>
  );
}
