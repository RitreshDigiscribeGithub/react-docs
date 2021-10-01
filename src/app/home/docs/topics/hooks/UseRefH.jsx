import React, { useRef } from "react";
import ReactCode from "../../../../components/ReactCode";

export default function UseRefH() {
    const myRef = useRef(null);

    const setValue = () => {
        myRef.current.value = "react"; //directly manipulate to dom
        myRef.current.style.color = "red"; //directly manipulate to dom
        myRef.current.focus(); //directly manipulate to dom
    };

    return (
        <>
            <h1>UseRef Hook</h1>
            
            <ul data-ul="what is UseRef hook">
                <li>useRef hook is same as ref</li>
                <li>useRef hook is work on real dom</li>
                <li>useRef hook is directly manipulate to dom</li>
                <li>we should use useRef hook less to less</li>
            </ul>

            <ReactCode file="Example" dot="jsx" code={`
              import React, { useRef } from 'react'
              
              export default function Example() {

                  const myRef = useRef(null);

                  const setValue = () => {
                     myRef.current.value = "react"; //directly manipulate to dom
                     myRef.current.style.color = "red"; //directly manipulate to dom
                     myRef.current.focus(); //directly manipulate to dom
                  };

                  return (
                      <>
                          <input type="text" ref={myRef} />
                          <button onClick={setValue}>click me</button> 
                      </>
                  )
              }
              
            `}/>

            <input type="text" ref={myRef} />
            <button onClick={setValue}>click me</button>
        </>
    );
}
