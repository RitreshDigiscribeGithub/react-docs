import React, { Component } from "react";
import ReactCode from "../../../../components/ReactCode";

export default class DidUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: "foo",
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h1>componentDidUpdate</h1>
        <ul data-ul="componentDidUpdate lifecycle">
          <li>when any state and props update in that condtion work componentDidUpdate lifecycle method</li>
        </ul>
        <ReactCode
          file="example"
          dot="jsx"
          code={`
         import React, { Component } from 'react'
         
         export default class Example extends Component {
             
            constructor() {
                super();
                this.state = {name: "foo"};
              }

             render() {
                 return (
                     <>
                      <h4>{this.state.name}</h4>
                      <button onClick={() => this.setState({ name: "bar" })}>
                      click here</button>  
                     </>
                 )
             }

             componentDidUpdate() {
                alert("componentDidUpdate is work!")
             }
         }
         
        
        `}
        />
        <h4>{this.state.name}</h4>
        <button onClick={() => this.setState({ name: "bar" })}>click here</button>
        <ul data-ul="componentDidUpdate prameter">
          <li>preProps: preProps is return previous updated Props object {`{}`}</li>
          <li>preState: preState is return previous updated state object {`{}`}</li>
          <li>snapshort : snapshort by defalut is undefined sowe have to use getSnapshotBeforeUpdate() method</li>
        </ul>
        <ReactCode
          file="example"
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
                     <h4>{this.state.count}</h4>
                     <button onClick={() => this.setState({ count: this.state.count + 1 })}>click here</button>  
                     </>
                 )
             }

             componentDidUpdate(preProps, preState, snapshort) {
                console.log(preState);
                console.log(preProps);
                console.log(snapshort);
                alert("componentDidUpdate is work!")
             }
         }
         
        
        `}
        />
        <h4>{this.state.count}</h4>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>click here</button>
      </>
    );
  }
  componentDidUpdate(preProps, preState, snapshort) {
    console.log(preState);
    console.log(preProps);
    console.log(snapshort);
    alert("componentDidUpdate is work!");
  }
}
