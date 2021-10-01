import React, { Component } from "react";
import ReactCode from "../../../../components/ReactCode";

export default class DidMount extends Component {
  constructor() {
    super();
    this.state = {
      name: "xyz",
    };
  }

  render() {
    console.log("ui is laoded");
    return (
      <>
        <h1>DidMount</h1>
        <ul data-ul="componentDidMount life cycle">
          <li>when in Component jsx ,css has ready then after call componentDidMount life cycle method</li>
          <li>when we update to state and props so componentDidMount life method is not re-call</li>
        </ul>
        <ul data-ul="when should call componentDidMount">
          <li>we call to api in component in that condition use componentDidMount life cycle method</li>
          <li>when any action base after loaded jsx element and css in that condition use componentDidMount() life cycle</li>
        </ul>
        <ReactCode
          file="example"
          dot="jsx"
          code={`
          import React, { Component } from 'react'
                
           export default class Example extends Component {

              constructor() {
                 super();
                 this.state = { name: "xyz" };
                }

              render() {
                  return (<>
                        <h1>{this.state.name}</h1> 
                        <button onClick={() => this.setState({ name: "abc" })>
                         click here</button>          
                     </>)
                }

              componentDidMount() {
                   console.log("componentDidMount method is work!");
                }    
            }`}
        />
        <h3>{this.state.name}</h3>
        <button
          onClick={() => {
            this.setState({ name: "abc" });
          }}>
          click here
        </button>
      </>
    );
  }

  componentDidMount() {
    console.log("componentDidMount method is work!");
  }
}
