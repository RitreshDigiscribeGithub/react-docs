import React, { Component } from "react";
import ReactCode from "../../../../components/ReactCode";
import Alert from "@mui/material/Alert";

export default function StateInClass() {
  return (
    <>
      <h1>state in class component</h1>

      <ul data-ul="1 initialise to state">
        <li>
          we initialise to state in <strong>constructor(){`{ }`}</strong> method
        </li>
        <li>
          In constructor(){`{ }`} use <strong>super()</strong> method for calling parent class of constructor()
        </li>
        <li>
          For create state we use <strong>this.state = {`{ }`}</strong>
        </li>
        <li>In this.state = {`{ }`} we initialise data as object keys and properties</li>
      </ul>
      <ReactCode
        file="Syntax : state"
        dot="jsx"
        code={`
         constructor() {
            super();
            this.state = {
              x: 0,//initialise to state    
            };
          }
        `}
      />

      <ul data-ul="2 upadate to state">
        <li>
          For update to state we use <strong>this.setState()</strong> method as event or any
        </li>
        <li>In this.setState() method pass a object with update key</li>
      </ul>

      <ReactCode
        file="Syntax : setState"
        dot="jsx"
        code={`
         //click event
         changesValue() {
             this.setState({ x: 1 });
           }
         //click event
        `}
      />

      <ul data-ul="how to update state in class component"></ul>
      <Alert severity="warning">class component , updata state some complex and more code we should mostly use function component for update state</Alert>
      <br />
      <ReactCode
        file="Component"
        dot="js"
        code={`
        import React, { Component } from "react";
        
        export default class StateInClass extends Component {

          constructor() {
            super(); //super() method use calling parent class of constructor()
            this.state = {
              x: 0,
            };
          }

          //click event
          changesValue() {
              this.setState({ x: 1 });
            }
          //click event

          render() {
            return (
              <>
                <p>{this.state.x}</p>
                <button onClick={() => this.changesValue()}>click me</button>
              </>
            );
          }
        }        
        `}
      />
    </>
  );
}
