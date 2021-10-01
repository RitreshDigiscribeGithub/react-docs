import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function BasicRouting() {
    return (
        <>
            <h1>Basic Routing</h1>
            <ul data-ul="step 1 : wrapper to App componet with Routing BrowserRouter">
                <li>import {`{ BrowserRouter }`} from "react-router-dom" in index.js</li>
                <li>put app component in BrowserRouter</li>
            </ul>
            <ReactCode file="index" dot="js" code={`
             import "./index.css";
             import App from "./app/App";
             import { BrowserRouter } from "react-router-dom";
             
             ReactDOM.render(
               <BrowserRouter>
                 <App />
               </BrowserRouter>,
               document.getElementById("root")
             );             
            `}/>

            <ul data-ul="step 2 : create pages">
                <li>create all page component like Home,about,NotFound</li>
            </ul>
            <ReactCode file="Home" dot="jsx" code={`
               import React from 'react'
               
               export default function Home() {
                   return (
                       <>
                         <p>Home page work!</p>  
                       </>
                   )
               }
               
            `} />

            <ReactCode file="About" dot="jsx" code={`
               import React from 'react'
               
               export default function About() {
                   return (
                       <>
                         <p>About page work!</p>  
                       </>
                   )
               }
               
            `} />

            <ul data-ul="step 3: Set router link">
                <li>create NavBar component</li>
                <li>import {`{ NavLink }`} from "react-router-dom";</li>
                <li>set router link</li>
            </ul>
            <ReactCode file="NavBar" dot="jsx" code={`
               import React from "react";
               import { NavLink } from "react-router-dom";
               
               export default function NavBar() {
                   return (
                    <>
                      <NavLink exact to="/" activeClassName="active">
                         home
                       </NavLink>
                      <NavLink exact to="/about" activeClassName="active">
                         about
                      </NavLink>
                    </>
                   )
               }
               
            `}/>

            <ul data-ul="step 4: Set all Routes">
                <li>create a root components</li>
                <li>import {`{ Route, Switch } `}from "react-router-dom"; in component in</li>
                <li>define all router in Switch</li>
                <li>import to NavBar component</li>
            </ul>
            <ReactCode file="App" dot="jsx" code={`
              import React from 'react'
              import Home from "./Home";
              import About from "./About";

              export default function App() {
                  return (
                      <>
                        <NavBar />//NavBar component
                        <Switch>
                           <Route exact path="/">
                             <Home />
                           </Route>
                           <Route path="/about">
                             <About />
                           </Route>
                           <Route path="*">
                             <p>page not found 404 </p>
                           </Route>
                        </Switch> 
                      </>
                  )
              }          
            `}/>
        </>
    );
}
