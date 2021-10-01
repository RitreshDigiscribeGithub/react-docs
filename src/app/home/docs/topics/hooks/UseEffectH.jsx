import React, { useEffect, useState } from "react";
import ReactCode from "../../../../components/ReactCode";

export default function UseEffectH() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("useEffect work like componentDidMount,componentDidUpdate"); //working like  componentDidMount,componentDidUpdate
  });

  return (
    <>
      <h1>useEffect Hook</h1>
      <ul data-ul="what is useEffect hook">
        <li>we use to useEffect Hook as life cycle method like class component</li>
        <li>
          useEffect Hook working like class component lifecycle method
          <strong>componentDidMount</strong> ,<strong>componentDidUpdate</strong> ,<strong>componentWillUnmount</strong> ,
        </li>
        <li>we can use multiple useEffect hook in component</li>
      </ul>
      <ul data-ul="useEffect like componentDidMount">
        <li>useEffect hook can be use like componentDidMount</li>
        <li>when component has initialised inthat condition work useEffect</li>
      </ul>

      <ReactCode
        file="Example"
        dot="jsx"
        code={`
           import React, { useEffect } from "react";
           
           export default function UseEffectH() {

               useEffect(() => {
                 console.log('useEffect work like componentDidMount');
               });//useEffect work like componentDidMount

               return (
                   <>
                      <p>component in work</p> 
                   </>
               )
           }
      `}
      />
      <ul data-ul="useEffect like componentDidUpdate">
        <li>useEffect hook can be use like componentDidUpdate</li>
        <li>when component any state is update then work useEffect hook</li>
      </ul>
      <ReactCode
        file="Example"
        dot="jsx"
        code={`
           import React, { useEffect } from "react";
           
           export default function UseEffectH() {
               const [num, setNum] = useState(0);

               useEffect(() => {
                   console.log("useEffect working like componentDidMount and componentDidUpdate");
               });//useEffect working like componentDidMount and componentDidUpdate

               return (
                   <>
                      <h4>{num}</h4>
                      <button onClick={() => setNum(num + 1)}>click</button>
                   </>
               )
           }
      `}
      />
      <h4>{num}</h4>
      <button onClick={() => setNum(num + 1)}>click</button>
      <ul data-ul="useEffect with multiple state">
          <li>when we want use multiple useEffect hook that multiple useEffect hook working accoring to state,props in that condition use secend argument</li>
      </ul>
      <ReactCode file="Example" dot="jsx" code={`
            import React, { useEffect } from "react";
           
            export default function UseEffectH() {

                const [numOne, setNumOne] = useState(0);
                const [numTwo, setNumTwo] = useState(100);
 
                useEffect(() => {
                    console.log("state numOne change");
                },[numOne]);//only work on numOne state
                
                useEffect(() => {
                    console.log("state numTwo change");
                },[numTwo]);//only work on numTwo state

                return (
                    <>  
                       <h4>{numOne}</h4>
                       <h4>{numTwo}</h4>

                       <button onClick={() => setNumOne(num + 1)}>click</button>
                       <button onClick={() => setNumTwo(num + 1)}>click</button>
                    </>
                )
            }     
      `}/>

      <ul data-ul="useEffect with multiple props"></ul>
      <ReactCode file="Example" dot="jsx" code={`
            import React, { useState } from "react";
            import Card from "./Card";

            export default function Example() {

                const [numOne, setNumOne] = useState(0);
                const [numTwo, setNumTwo] = useState(100);
 
                return (
                    <>  
                       <Card x={numOne} y={numTwo} />

                       <button onClick={() => setNumOne(num + 1)}>click</button>
                       <button onClick={() => setNumTwo(num + 1)}>click</button>
                    </>
                )
            } 
      `}/>

        <ReactCode file="Card" dot="jsx" code={`
            import React, { useEffect } from "react";
            
            function Card(props) {

                useEffect(() => {
                    console.log("props.x is change");
                },[props.x]);//only work on props.x
                
                useEffect(() => {
                    console.log("props.y is change");
                },[props.y]);//only work on props.y

                return (
                    <p>props.x</p>
                    <p>props.y</p>
                )
            }
      `}/>
    </>
  );
}


