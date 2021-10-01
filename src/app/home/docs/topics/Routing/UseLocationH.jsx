import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function UseLocationH() {
    return (
        <>
            <h3>useLocation Hook</h3>
            <ul data-ul="useLocation Hook">
                <li>useLocation hook is return location object of cureent URL </li>
            </ul>
            <ReactCode file="syntax" dot="jsx" code={`
             URL : http://localhost:3000/use/1/blogs#section
             
             {
                hash: "#section",
                pathname: "/use/1/blogs",
                search: "",
                state:""
             }
            `}/>
            <ul data-ul="how to use useLocation Hook">
              <ReactCode file="component" dot="jsx" code={`
               import { useLocation } from "react-router-dom";

               export default function component() {
                   const { pathname, hash, search, state } = useLocation();
                   return (
                    <div>
                      <p>hash :{hash}</p>
                      <p>pathname : {pathname}</h1>
                      <p>search : {search}</p>
                      <p>state : {state}</p>
                    </div>
                );
              }
              `}/>
            </ul>
        </>
    );
}
