import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function HowToUseContextApi() {
    return (
        <>
            <h1>How To Use Context Api</h1>
     
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
                import React from 'react';
                import { FirstContext, SecondContext } from './ComponentA';
                
                export default function Child() {
                  return (
                    // FirstContext Consumer
                    <FirstContext.Consumer>
              
                      {(f) => {//callback one
                        return (
              
                          // SecondContext Consumer
                          <SecondContext.Consumer>
                            {(s) => {//callback two
                              return (
                                <ul>
                                  <li>FirstContext data : {f}</li>
                                  <li>SecondContext data : {s}</li>
                                </ul>
                              );
                            }}
                          </SecondContext.Consumer>
              
                        );
                      }}
              
                    </FirstContext.Consumer>
                  );
                }
            `}
            />
        </>
    );
}
