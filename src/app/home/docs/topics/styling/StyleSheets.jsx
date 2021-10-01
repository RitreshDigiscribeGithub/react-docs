import React from 'react'
import ReactCode from "../../../../components/ReactCode";

export default function StyleSheets() {
    return (
        <>
        <h1>style sheets</h1>
        <ReactCode file="style" dot="css" code={`
        body {
          margin: 0;
          padding: 0;
        }
        * {
          margin: 0;
          padding: 0;
        }
        .text-center {
          text-align: center;
        }
        `}/>

      <ReactCode file="index" dot="js" code={`
       import React from "react";
       import ReactDOM from "react-dom";
       import "./index.css";//import style sheets
      
       ReactDOM.render(
         <>
           <h1 className="text-center">
             Lorem ipsum dolor sit amet consectetur
           </h1>
         </>,
        document.getElementById("root")
       );      
        `}/> 
        </>
    )
}
