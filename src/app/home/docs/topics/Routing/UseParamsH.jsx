import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function UseParamsH() {
    return (
        <>
            <h3>useParams Hooks</h3>
            <ul data-ul="useParams Hooks">
                <li>useParams is return a object key and value pairs of ULR parameter</li>
            </ul>
            <ul data-ul="how to use useParams Hooks">
                <li><strong>1 set dynamic route /:name</strong></li>
                <ReactCode file="App" dot="jsx" code={`
                     import React from 'react'
                     import { Route,Switch } from "react-router-dom";
                     import User from './User';
        
                     export default function App() {
                         return (
                            <>
                             <Switch>
                               <Route path="user/:name/:lastname">
                                 <User /> 
                               </Route>
                            </Switch>
                           </>
                         )
                     }       
                `}/>
                <li><strong>2 import {`{ useParams }`}from "react-router-dom";</strong></li>
                <ReactCode file="User" dot="jsx" code={`
                     import React from 'react'
                     import { useParams } from "react-router-dom";
        
                     export default function User() {

                        const { name, lastname } = useParams();

                         return (
                            <>
                              <h1>URL paramete is : {name} {lastname}</h1> 
                           </>
                         )
                     }       
                `}/>               
            </ul>
        </>
    );
}
