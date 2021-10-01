import React from 'react'
import ReactCode from "../../../../components/ReactCode";

export default function InlineStyles() {
    return (
        <>
        <h1>inline styles</h1>
        <ReactCode file="Example 1: index" dot="js" code={`
       import React from "react";
       import ReactDOM from "react-dom";
      
       ReactDOM.render(
         <>
           <h1 style={{
               backgroundColor:'red',
               fontSize:'12px'
              }}>
             Lorem ipsum dolor sit amet consectetur
           </h1>
         </>,
        document.getElementById("root")
       );      
        `}/>

       <ReactCode file="Example 2: index" dot="js" code={`
       import React from "react";
       import ReactDOM from "react-dom";
       
       const myStyles={
          backgroundColor:'red',
          fontSize:'12px'
       }
       
       ReactDOM.render(
         <>
           <h1 style={myStyles}>
             Lorem ipsum dolor sit amet consectetur
           </h1>
         </>,
        document.getElementById("root")
       );      
        `}/> 
        </>
    )
}
