import React from "react";
import ReactCode from "../../../../components/ReactCode";
import Alert from "@mui/material/Alert";

export default function WhatIsProps() {
  return (
    <>
      <h1>what is props</h1>

      <ul data-ul="what is props">
        <li>props is means properties</li>
        <li>props is a same like a function parameter & augment but not exact</li>
        <li>Props are arguments passed into React components.</li>
        <li>Example : {`<User name="alex" />`}</li>
      </ul>
      
      <Alert severity="warning">only for understand not exact</Alert>
      <br />
      <ReactCode file="example" dot="js" code={`
        function user(fname,lname) {
           return  ${'`name is ${fname} ${lname}`'}
        }
        function app() {
          user('Anthony','Russo')  
        }
      `} />
    </>
    
  );
}
