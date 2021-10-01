import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function ArrayList() {
  return (
    <>
      <h1>Array List</h1>
      <ul data-ul="key attribute in jsx template">
        <li>when we use map() method in JSX template so in that condition use {`key={ i }`} attribute in JSX list </li>
        <li>each element of key attribute value must be unique</li>
      </ul>

      <ul data-ul="how to use array list in JSX"></ul>

      <ReactCode
        file="example"
        dot="jsx"
        code={`
      import React from 'react'
      
      export default function ArrayList() {

          const programming = ['python','java script','java']
          return (
              <>
                <ul>
                  { 

                    {/* using with return*/}
                    programming.map((e,i)=>{
                       return <li key={i}>item-{e}</li>//return must be 
                    })

                    {/* shortened */}
                    programming.map((e,i)=>(
                        <li key={i}>item-{e}</li>
                    ))

                  }
                </ul> 
              </>
              );
      }
      `}
      />
    </>
  );
}
