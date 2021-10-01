import React, { Component } from "react";
import ReactCode from "../../../../components/ReactCode";

export default class ShouldUpdate extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h1>shouldComponentUpdate</h1>
        <ul data-ul="shouldComponentUpdate()">
          <li>shouldComponentUpdate() method come in updating phases</li>
          <li>shouldComponentUpdate() method based on two condition like: do you want update to component yes or not</li>
          <li>shouldComponentUpdate() method return true and false</li>
          <li>if return true so block to component other life cycle method and rendering , else execut to rendering and life cycle method</li>
          <li>by default shouldComponentUpdate() return false and block to rendering</li>
          <li>it is is help to stop unnecessary rendering in component</li>
        </ul>
        <ReactCode
          file="syntex"
          dot="jsx"
          code={`
          shouldComponentUpdate() {
             if (condition) {
                return true;
             } else {
                return false;  
             }
          }//by default false
        `}
        />

        <ul data-ul="how to ues shouldComponentUpdate()"></ul>
        <ReactCode
          file="Example"
          dot="jsx"
          code={`
          import React, { Component } from 'react'
          
          export default class Example extends Component {

              constructor() {
                super();
                this.state = {count: 0};
              }

              render() {
                  return (
                      <>
                       <h3>{this.state.count}</h3>
                       <button
                        onClick={() => {
                          this.setState({ count: this.state.count + 1 });
                        }}>
                        click here
                       </button>   
                      </>
                  )
              }

              shouldComponentUpdate() {
                 if (this.state.count > 10) {
                    alert('rendering is stoped')
                   return false; 
                 } else {
                   return true; 
                 }
               }

          }
          
        `}
        />
        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}>
          click here
        </button>
      </>
    );
  }

  shouldComponentUpdate() {
    if (this.state.count > 10) {
     
      alert("rendering is stoped");
      return false;
    } else {
      return true;
    }
  }
}
