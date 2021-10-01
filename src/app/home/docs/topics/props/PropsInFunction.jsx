import React from "react";
import ReactCode from "../../../../components/ReactCode";


export default function PropsInFunction() {
  return (
    <>
      <h1>props in function component</h1>
      <ul data-ul="1 send data in another component">
          <li>we can send props many data type : string , array, object , function</li>
      </ul>
      <ReactCode file="App" dot="jsx" code={`
       import React from 'react'
       import Card from "./Card";

       export default function App() {
           return (
               <>
                //reuse to component with different data 
                 <Card name="joy" lang="python" /> 
                 <Card name="alex" lang="java script" /> 
                 <Card name="Anthony" lang="go" /> 
               </>
           )
       }
      `} />

      <ul data-ul="2 receiving data using props">
        <li>props is object type</li>
        <li>
            <pre>
            {`
            { name:'joy', lang: 'python' }
            { name:'alex',  lang: 'java script'}
            { name:'Anthony', lang: 'go'}
            `}
            </pre>
        </li>
      </ul>
      <ReactCode file="Card" dot="jsx" code={`
       import React from "react";

       export default function Card(props) {
           return (
               <>
                  <p>{props.title}</p>
                  <p>{props.lang}</p>
               </>
           )
       }
      `} />
    </>
  );
}
