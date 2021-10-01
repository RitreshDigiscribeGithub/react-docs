import React, { PureComponent } from "react";
import ReactCode from "../../../../components/ReactCode";

export default class PureComponentReact extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    alert("component is re-render");
    return (
      <>
        <h1>pure component</h1>
        <ul data-ul="what is pure component">
          <li>pure component ine react features</li>
          <li>that is import from react</li>
          <li>pure component is only use with class component</li>
          <li>pure component is prevent to re-redering to component when previous and cureent state value is same</li>
        </ul>
        <ReactCode file="Example" dot="jsx" code={`
        import React, { PureComponent } from "react";
         
         export default class Example extends PureComponent {

          constructor() {
            super();
            this.state = {count: 0};
          }
        
           render() {
             alert("component is re-render");
             return (
               <>
                  <h4>{this.state.count}</h4>
                  <button onClick={() => this.setState({ count: 1 })}>Click Here</button>
               </>
             )
           }
         }
         
        
        `} />
        <h4>{this.state.count}</h4>
        <button onClick={() => this.setState({ count: 1 })}>Click Here</button>
      </>
    );
  }
}
