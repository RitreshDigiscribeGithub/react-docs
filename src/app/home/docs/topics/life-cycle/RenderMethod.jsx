import React, { Component } from "react";
import ReactCode from "../../../../components/ReactCode";

export default class RenderMethod extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1>Render method</h1>
        <ul data-ul="Render method">
          <li>we use all JSX element in render()</li>
          <li>render() method is return JSX elements</li>
        </ul>
        <ul data-ul="when call Render method">
          <li>when component is rady to call</li>
          <li>when any changes in states</li>
          <li>when any changes in props</li>
        </ul>
        <ReactCode
          file="syntex"
          dot="jsx"
          code={`
         render(){
             return(
                <div>
                  <p>this is jsx element</p>
                </div>
             )
         }
        `}
        />
      </>
    );
  }
}
