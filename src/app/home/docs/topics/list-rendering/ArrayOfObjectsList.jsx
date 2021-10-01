import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function ArrayOfObjectsList() {
  return (
    <>
    <h1>Array Of Objects List</h1>
     <ul data-ul="how to use array of objects list in JSX">
     </ul>
    
     <ReactCode file="example" dot="jsx" code={`
     import React from 'react'
     
     export default function ArrayList() {

         const programming = [
             { lang: 'python'},
             { lang: 'java script'},
             { lang: 'java'}
         ]
         return (
             <>
               <ul>
                 {  programming.map((e,i)=>(
                    <li key={'list-'+i}>//unique key
                        language : {e.lang}
                    </li> 
                   ))  }
               </ul> 
             </>
             );
     }
     `}/>
  
   </>
  );
}
