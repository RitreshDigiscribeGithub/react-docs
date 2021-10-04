import React, { useEffect, useState } from "react";
import ReactCode from "../../../../components/ReactCode";
import Alert from "@mui/material/Alert";

export default function UseEffectH() {
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log("stap 2 useEffect hook work");
    }, [num]);
    console.log("stap 1 component is load");

    // useEffect with CleanUp Function
    useEffect(() => {
        alert("add subscription");
        return () => {
            alert("remove subscription");
        };
    });
    return (
        <>
            <h1>useEffect Hook</h1>
            {/* Todo:what is useEffect hook */}
            <ul data-ul="what is useEffect hook">
                <li>
                    <strong>The Effect Hook lets you perform side effects in function components</strong>
                </li>
                <li>
                    <strong>side effects</strong> means any action perform out of current component
                </li>
                <li>
                    side effects are <strong>Data fetching</strong>,<strong>setting up a subscription</strong> , and <strong>manually changing the DOM</strong> in React components that is all action
                    perform out of current component
                </li>
                <li>Effect Hook is call automatically in page load</li>
                <li>we can use multiple effect Hook is component</li>
                <li>
                    useEffect Hook is work like class component like
                    <strong> life cycle method</strong> methods are :<strong>componentDidMount() ,</strong>
                    <strong>componentDidUpdate() ,</strong>
                    <strong>componentWillUnmount() </strong>
                </li>
            </ul>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
            import React, { useEffect } from "react";
            
            export default function Example() {

              useEffect(() => {
                console.log("step 2 useEffect hook work");
              });

             console.log("step 1 component is load");

              return (
                <p>test</p>
              )
            }
            
            `}
            />

            {/* Todo:useEffect hook with useState */}
            <ul data-ul="useEffect hook with useState">
                <li>
                    we know that we change any state in component so component is re-render so that condition <strong>useEffect hook</strong> is allso work
                </li>
            </ul>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
           import React, { useEffect } from "react";
           
           export default function Example() {
               const [num, setNum] = useState(0);

               useEffect(() => {
                console.log("stap 2 useEffect hook work");
               });
               console.log("stap 1 component is load");

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
            <p>
                <button onClick={() => setNum(num + 1)}>click</button>
            </p>
            <hr />
            {/* Todo:useEffect Dependency List */}
            <h3>useEffect Dependency List</h3>
            <ul data-ul="">
                <li>useEffect Dependency List is a second argument of useEffect hook that pass as array</li>
                <li>we can control to useEffect hook by using Dependency List</li>
            </ul>
            <ReactCode
                file="Syntax"
                dot="jsx"
                code={`
              useEffect(
                  () => {},//first argument
                  []//second argument Dependency List
                )
              `}
            />
            <ul data-ul="useEffect control using Dependency List">
                <li>
                    <strong>1 array is empty [] </strong>: if Dependency List array is empty in that condition useEffect hook run only component loading,
                    <del>not work useEffect change ( re-rendering)</del>
                </li>
                <ReactCode
                    file="Example"
                    dot="jsx"
                    code={`
           import React, { useEffect } from "react";
           
           export default function Example() {
               useEffect(
                 () => { console.log("useEffect hook work")},
                 []//run only on component loading
               );//working as componentDidMount()

               return (
                   <>
                      <p>Lorem ipsum amet consectetur</p>
                   </>
               )
           }
         `}
                />
                <li>
                    <strong>2 array is [state or props] </strong>: if we put state or props in Dependency List array that condition useEffect hook only run on Dependency List state or props change
                    <del>not work on another state or props change</del>
                </li>
                <ReactCode
                    file="Example"
                    dot="jsx"
                    code={`
           import React, { useEffect,useState } from "react";
           
           export default function Example() {
                const [x, setX] = useState(0)
               useEffect(
                 () => { console.log("useEffect hook work")},
                 [x]//run on component loading and Only re-run on x state change
               );//working as componentDidUpdate()

               return (
                   <>
                      <p>{x}</p>
                      <button onClick={()=>setX(x + 1)}>click</button>
                   </>
               )
           }
         `}
                />
            </ul>

            {/* Todo: useEffect CleanUp Function  */}
            <h3>useEffect CleanUp Function</h3>
            <ul>
                <li>
                    useEffect CleanUp Function work like class component <strong>componentWillUnmount()</strong> life cycle method
                </li>
                <li>when component is remove from DOM it that condition CleanUp Function is work and performs any action , CleanUp Function use for unsubscribe to subscription</li>
                <li>
                    React performs the cleanup when the component unmounts. The useEffect hook is built in a way that if we return a function within the method, it gets executed when the component
                    unmounts
                </li>
                <li>CleanUp Function is also run when change component state (re-render)</li>
            </ul>

            <ReactCode
                file="Syntax"
                dot="jsx"
                code={`
                useEffect(() => {
                  //effect action code
                  return () => {}//cleanup code
                  }, 
                  []//DI List
                )
              `}
            />
            <br />
            <Alert severity="info">pleace navigate to another routes than work useEffect cleanup code</Alert>
            <br />

            <ReactCode
                file="Example"
                dot="jsx"
                code={`
                import React from "react";
                
                export default function Example() {

                  useEffect(() => {
                     alert("add subscription");
                     return () => {
                         alert("remove subscription");
                     };
                  });//working componentWillUnmount()

                  return (
                    <p>component</p>
                  )
                }
                
              `}
            />
        </>
    );
}
