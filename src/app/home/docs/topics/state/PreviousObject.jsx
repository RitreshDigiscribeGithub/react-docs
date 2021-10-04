import React, { useState } from "react";
import ReactCode from "../../../../components/ReactCode";

export default function PreviousObject() {
    const [userObj, setUerObj] = useState({
        username: "alex",
        lang: "java",
    });

    const func = () => {
        setUerObj({
            ...userObj, //Previous Object data
            username: "raj", //udpate Object data
            lang: "javaScript", //udpate Object data
        });
    };
    return (
        <>
            <p>Previous Object page</p>
            <h3>
                user is {userObj.username} and language is {userObj.lang}
            </h3>
            <p>
            <button onClick={func}>click to update</button>
            </p>
            
            <br />
            <ReactCode file="Example" dot="jsx" code={`
             import React, { useState } from "react";
             
             export default function Example() {
                const [userObj, setUerObj] = useState({
                    username: "alex",
                    lang: "java",
                });
            
                const func = () => {
                    setUerObj({
                        ...userObj, //Previous Object data
                        username: "raj", //udpate Object key data
                        lang: "javaScript", //udpate Object key data
                    });
                };
                 return (
                     <>
                        <p>
                           user is {userObj.username} and language is {userObj.lang}
                       </p>
                       <button onClick={func}>click to update</button>
                     </>
                 )
             }
             
            `} />
        </>
    );
}
