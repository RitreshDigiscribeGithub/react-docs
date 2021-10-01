import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function NestedArrayList() {
  return (
    <>
    <h1>Nested Array List</h1>
     <ul data-ul="how to use nested array List in JSX">
     </ul>
    
     <ReactCode file="example" dot="jsx" code={`
     import React from 'react'
     
     export default function ArrayList() {

         const programming = [
             { lang: 'python',framework:[
                {name: 'Django' },
                {name: 'Flask' },
                {name: 'Bottle' },
             ]},
             { lang: 'javaScript',framework:[
                {name: 'Angular' },
                {name: 'React' },
                {name: 'Node.js' }, 
             ]}
         ]
         return (
             <>
              {/* main list */}
               <ul>
                 {programming.map((list,i)=>(
                  <li key={'a-'+i}>//unique key
                      {list.lang}
                      {/* nested list */}
                           <ul>
                             { list.framework.map((nested,i)=>(
                               <li key={'b-'+i}>//unique key 
                                 {nested.name}
                               </li>
                             )) }
                          </ul>
                      {/* nested list */}
                   </li>
                  ))}
               </ul>
               {/* main list */}
             </>
             );
     }
     `}/>
  
   </>
  );
}
