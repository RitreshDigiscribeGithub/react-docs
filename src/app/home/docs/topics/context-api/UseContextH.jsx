import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function useContextH() {
    return (
        <>
            <h1>useContext hook</h1>
            <ul data-ul="">
                <li>useContext Hook is remove to call back and nested call back in Consumer part</li>
                <li>useContext Hook is use inside Component</li>
                <li>
                    syntax: <strong>const f = useContext(NameOfContext);</strong>
                </li>
            </ul>
            <ReactCode
                file="component"
                dot="js"
                code={`                
            import React, { createContext } from 'react';
            import Child from '/Child';

            const FirstContext = createContext();//create Context
            const SecondContext = createContext();//create Context

            export default function ComponentA() {
              return (
                <>
                {/* multiple Provider */} 

                  <FirstContext.Provider value={'abc'}>
                    <SecondContext.Provider value={'xyz'}>
                     <Child />{/* target component */}
                    </SecondContext.Provider>{/* set Provider for SecondContext */}
                  </FirstContext.Provider>{/* set Provider for FirstContext */}

                 {/* multiple Provider */}  
               </>
             );
           }

           export { FirstContext, SecondContext };//export to context
            `}
            />
            <ReactCode
                file="Child"
                dot="js"
                code={`                
                import React ,{ useContext } from "react";
                import { FirstContext, SecondContext } from './ComponentA';
                
                export default function Child() {
                 const f = useContext(FirstContext);
                 const s = useContext(SecondContext);

                 return (
                    <>
                      <ul>
                        <li>FirstContext data : {f}</li>
                        <li>SecondContext data : {s}</li>
                       </ul>
                     </>
                    );
                }
            `}
            />
        </>
    );
}
