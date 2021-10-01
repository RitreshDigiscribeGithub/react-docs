import React from "react";
import ReactCode from "../../../../components/ReactCode";
export default function Booting() {
  return (
    <>
      <h1>booting</h1>
      <ReactCode file="index" dot="js" code={`
      //Step 1 : index.js-
      import React from 'react';
      import ReactDOM from 'react-dom';
        
       ReactDOM.render(
          <div>hello</div>,
          document.getElementById('root')
       );
      `}
      />
      <p>all jsx is load in id root</p>
      <ReactCode file="index" dot="html" code={`
       //Step 2 : index.html-
       <div id='root'>hello</div>
      `}
      />
    </>
  );
}
