import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function FunctionalComponent() {
  return (
    <>
      <h1>functional Component</h1>
      <ul data-ul="what is functional Component">
        <li>Functional Component is same like java script Functional but this Function return JSX elements</li>
        <li>if you create component so file and component name must be same and first letter capital like : Header.jsx</li>
      </ul>

      <ul data-ul="Create functional Component">
        <li> step 1 {`>`} : create Header.jsx file</li>
        <li> step 2 {`>`} : import to React from "react" in Header.jsx file</li>
        <li>step 3 {`>`} : create a Function and return must be use for jsx elements</li>
        <li>step 4 {`>`} : export default to component</li>
      </ul>
      <ReactCode
        file="Header"
        dot="jsx"
        code={`
       import React from "react";
       
       export default function Header() {
           return (//return must be use
               //use Fragment <></> for multiple jsx elements
               <>
                 <p>header component work!</p>   
               </>
           )
       }

      `}
      />

      <ul data-ul="how to use functional Component"></ul>
      <p>1 create a component like: Header.jsx and export to component</p>
      <ReactCode
        file="1 Header"
        dot="jsx"
        code={`
       import React from "react";
       
       export default function Header() {
           return (
               <>
                  <p>Header component work!</p>  
               </>
           )
       }

      `}
      />
      <p>2 import to Header component root component</p>
      <ReactCode
        file="2 App"
        dot="jsx"
        code={`
       import React from "react";
       import Header from "./Header";//import to component

       export default function App() {
           return (
               <>
               <Header/>//if have not child node:self closing tag
                  //(or)
                <Header><Header/> //if have child node
               </>
           )
       }

      `}
      />
      <p>3 root component import in index.js</p>
      <ReactCode
        file="3 index"
        dot="js"
        code={`
       import React from "react";
       import ReactDOM from "react-dom";
       import App from "./app/App";
         
       ReactDOM.render(
           <App/>,
           document.getElementById('root')
       )
      `}
      />
    </>
  );
}
