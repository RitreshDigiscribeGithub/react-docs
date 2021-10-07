import React, { Component } from "react";
import ReactCode from "../../../../components/ReactCode";

export default class ClassComponent extends Component {
    render() {
        return (
            <>
                <h1>Class Component</h1>
                <ul data-ul="what is Class Component">
                    <li>Class Component is same like ES6 class</li>
                    <li>Class Component is also return JSX elements but with render() method</li>
                    <li></li>
                    <li>if you create Class component so file and component name must be same and first letter capital like : Header.jsx</li>
                </ul>
                <ul data-ul="render() method">
                    <li>class Component is not return JSX elements directly we have to use render() method than return JSX elements</li>
                    <li>
                        Syntax :{" "}
                        <pre>{`
           render() {
            return( 
                <> 
                   <p>hello react</p>
                </> 
            ) 
           }
          `}</pre>
                    </li>
                </ul>
                <ul data-ul="how to use class component"></ul>
                <ReactCode
                    file="1 Header"
                    dot="jsx"
                    code={`
          import React, { Component } from 'react'
          
          export default class ClassComponent extends Component {
              render() {
                  return (
                      <>
                        <p>header component work!</p>  
                      </>
                  )
              }
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
                 <Header/>
               </>
           )
       }
      `}
                />
            </>
        );
    }
}
