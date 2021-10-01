import React, { useRef } from "react";
import ReactCode from "../../../../components/ReactCode";

export default function UncontrolledComponent() {
    const nameRef = useRef(null);
    const lastnameRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);// using useRef
        console.log(lastnameRef.current.value);// using useRef
        console.log(document.getElementById('username').value);// using java script
    };

    return (
        <>
            <h1>Uncontrolled Component</h1>
            <ul data-ul="what is Uncontrolled Component">
                <li>
                    when we control to input filds by <strong>Dom</strong> , that componet are called Uncontrolled Component
                </li>
                <li>we use java script or useRef hook in Uncontrolled Component but not use state</li>
            </ul>
            <form onSubmit={submit}>
                <label htmlFor="">name</label>
                <input type="text" ref={nameRef} />

                <label htmlFor="">lastname</label>
                <input type="text" ref={lastnameRef} />

                <label htmlFor="">username</label>
                <input type="text" id="username" />

                <button type="submit">submit</button>
            </form>
             <br />
            <ReactCode file="Example" dot="jsx" code={`
            import React, { useRef } from "react";
            
            export default function Example() {
                const nameRef = useRef(null);
            
                const submit = (e) => {
                    e.preventDefault();
                    console.log(nameRef.current.value);// using useRef hook
                    console.log(document.getElementById('username').value);// using java script
                };

                return (
                    <>
                      <form onSubmit={submit}>
                        <label htmlFor="">name</label>
                        <input type="text" ref={nameRef} />
    
                        <label htmlFor="">username</label>
                        <input type="text" id="username" />
    
                        <button type="submit">submit</button>
                      </form> 
                    </>
                )
            }
            
            `} />
        </>
    );
}
