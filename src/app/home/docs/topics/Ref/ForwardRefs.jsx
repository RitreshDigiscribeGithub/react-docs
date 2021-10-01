import React, { useRef } from "react";
import ChildComponent from "./ChildComponent";
import ReactCode from "../../../../components/ReactCode";

export default function ForwardRefs() {
    const myRef = useRef(null);

    const myEvent = () => {
        myRef.current.value = "react";
    };

    return (
        <>
            <h1>ForwardRef</h1>
            <ul data-ul="what is forwardRef">
                <li>ForwardRef is use for child , parant components</li>
                <li>we send to ref , one component to another component as a props but not acsses to using props, we use secend argument in child component</li>
            </ul>
            <ReactCode file="Parant" dot="jsx" code={`
            import React from 'react'
            import ChildComponent from "./ChildComponent";

            export default function Parant() {
                const myRef = useRef(null);

                const myEvent = () => {
                    myRef.current.value = "react";
                };
            
                return (
                    <div>
                      <ChildComponent ref={myRef}/>
                    </div>
                )
            }
            
            `} />
              <ReactCode file="ChildComponent" dot="jsx" code={`
            import React, { forwardRef } from "react";

            function ChildComponent(props,InRef) {
                return (
                    <>
                        <input type="text" ref={InRef} />
                    </>
                );
            }
            
            export default forwardRef(ChildComponent);
            
            `} />
            <ChildComponent ref={myRef} />
            <button onClick={myEvent}>click here</button>
        </>
    );
}
