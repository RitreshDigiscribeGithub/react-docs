import React, { Component } from "react";
import ReactCode from "../../../../components/ReactCode";

export default class WhatIsConstructor extends Component {
  constructor() {
    super();
    this.state = {
      name: "ritesh goswami",
    };
  }

  render() {
    return (
      <>
        <h1>constructor</h1>
        <ul data-ul="what is constructor">
          <li>when we call to class so constructor is first invoked</li>
          <li>In clsas Component , constructor is work first then work render method</li>
          <li>constructor is invoked first so that we difine state in constructor</li>
          <li>we should not use acync code in constructor</li>
        </ul>

        <ul data-ul="super() method">
          <li>super method in call in constructor</li>
          <li>when call to parant class of constructor so we have to use call super() method</li>
        </ul>

        <ReactCode
          file="syntex"
          dot="jsx"
          code={`
          constructor() {
            super();
            this.state = {
              name:"react"
            }
          }
        `}
        />
      </>
    );
  }
}
