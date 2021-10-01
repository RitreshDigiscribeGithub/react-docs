import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function FunctionEvents() {
  return (
    <>
      <h1>Handling Events in Function component</h1>
      <ul data-ul="Simple Handling Events">
        <li>In react , Events Handling same like HTML but event name must be camelCase and don't call to function inside event</li>
        <li>Event Handlers must be place in component in side</li>
      </ul>
      <ReactCode
        file="example"
        dot="jsx"
        code={`
        import React from 'react'
        
        export default function HandlingEventsRoutes() {
         
          const myEvent = () => {
            console.log('clicked');
          }
          return (
            <>
              //invalid syntax
              <button onclick="myEvent()">click me</button>

              //valid syntax
              <button onClick={myEvent}>click me</button>
            </>
          )
        }
        `}
      />
      <ul data-ul="Passing Arguments to Event Handlers">
        <li>In react , Events Handling same like HTML but event name must be camelCase and don't call to function inside event</li>
      </ul>
      <ReactCode
        file="example"
        dot="jsx"
        code={`
        import React from 'react'
        
        export default function HandlingEventsRoutes() {
         
          const myEvent = (name) => {
            console.log('clicked by' + name);
          }

          return (
            <>
              <button onClick={()=>myEvent('alex')}>click me</button>
            </>
          )
        }
        `}
      />
    </>
  );
}
