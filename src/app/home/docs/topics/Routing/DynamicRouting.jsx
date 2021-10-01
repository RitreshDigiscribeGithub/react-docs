import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function DynamicRouting() {
    return (
        <div>
            <h1>Dynamic Routing</h1>
            <ReactCode file="NavBar" dot="jsx" code={`
             import React from 'react';
             import { NavLink } from "react-router-dom";

             export default function NavBar() {
                 const data = [
                     { name :'raj', uiId : 1 }
                     { name :'rajesh', uiId : 2 }
                     { name :'raju', uiId : 3 }
                 ];
                 return (
                    <>
                       {
                         data.map((x,i)=>(
                            <NavLink key={i} to={'/user/' + x.uiId }>
                                {x.name}
                            </NavLink>
                         ))  
                       }
                    </>
                 )
             }
             
            `} />            
            <ReactCode file="App" dot="jsx" code={`
             import React from 'react'
             import { Route,Switch } from "react-router-dom";
             import OneUser from './OneUser';
             import AllUsers  from './AllUsers';

             export default function App() {
                 return (
                    <>
                     <Switch>
                      <Route path="users">
                         <AllUsers /> 
                       </Route>
                       <Route path="user/:id">//Dynamic Route
                         <OneUser /> 
                       </Route>
                    </Switch>
                   </>
                 )
             }
             
            `} />

           <ReactCode file="User" dot="jsx" code={`
             import React from 'react';
             import User from './User';

             export default function User(match) {
                 return (
                    <>
                       <h1>user id is : {match.params.id}</h1>
                    </>
                 )
             }
             
            `} />


        </div>
    );
}
