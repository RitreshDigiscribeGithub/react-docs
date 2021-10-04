import React, { Component } from "react";
import ReactCode from "../../../../components/ReactCode";

export default function PropsInClass() {
    return (
        <>
            <h1>props in class component</h1>
            <ul data-ul="1 send data in another class component">
                <li>we can send props many data type : string , array, object , function</li>
            </ul>
            <ReactCode
                file="App"
                dot="jsx"
                code={`
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
      `}
            />
            <ul data-ul="2 receiving data in class component using this.props"></ul>
            <ReactCode
                file="Card"
                dot="jsx"
                code={`
       import React, { Component } from "react";

       export default class Card extends Component {
        constructor() {
          super();
        }
        render() {
          return (
            <>
              <p>{this.props.name}</p>
              <p>{this.props.lang}</p>
            </>
          );
        }
      }
      `}
            />
        </>
    );
}
