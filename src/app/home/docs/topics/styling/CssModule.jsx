import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function CssModule() {
  return (
    <>
      <h1>css module</h1>
      <ReactCode
        file="style.module"
        dot="css"
        code={`
        .primary {
          color: blue;
        }      
        `}
      />

      <ReactCode
        file="index"
        dot="js"
        code={`
        import React from "react";
        import ReactDOM from "react-dom";
        import myStyles from "./style.module.css";
             
        ReactDOM.render(
          <>
            <h1 className={myStyles.primary}>
              Lorem ipsum dolor sit amet consectetur
            </h1>
          </>,
        document.getElementById("root")
        );   
        `}
      />
    </>
  );
}
