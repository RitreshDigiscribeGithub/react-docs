import React, { Component } from "react";
import ReactCode from "../../../../components/ReactCode";
import Alert from '@mui/material/Alert';

export default class WillUnmount extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1>componentWillUnmount()</h1>
        <ul data-ul="componentWillUnmount()">
          <li>componentWillUnmount() method is come in Unmount phase</li>
          <li>when component is remove from dom in that condition work componentWillUnmount() method</li>
        </ul>
        <ul data-ul="how to work componentWillUnmount()">
        </ul>
        <Alert severity="info">pleace navigate to another routes than work componentWillUnmount() method</Alert>
        <br />
        <ReactCode file="Example" dot="jsx" code={`
           import React, { Component } from 'react'
           
           export default class Example extends Component {
               
               render() {
                   return (
                       <>
                           
                       </>
                   )
               }

               componentWillUnmount() {
                alert("componentWillUnmount work!");
              }
           }
           
        `}/>
          <ul data-ul="when should use componentWillUnmount() method">
              <li>when we calling to api but we want to navigate back so we need to cancal to request in that condition we use componentWillUnmount() method</li>
              <li>when we want to stop setTimeout</li>
          </ul>
      </>
    );
  }

  componentWillUnmount() {
    alert("componentWillUnmount work!");
  }
}
