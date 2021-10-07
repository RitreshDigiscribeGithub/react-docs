import React from "react";
import ReactCode from "../../../../components/ReactCode";

export default function PropsComposition() {
    return (
        <>
            <h1>composition</h1>
            <ul data-ul="what is composition">
                <li>React provides a special prop that you can use to denote content between the start and ending tags.</li>
            </ul>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
            import React from "react";

            //Component first
            const FirstComponent = (props) => {
                return (
                      <>
                         {props.children}
                      </>
                    );
            };

            //Component secend
            export default function SecondComponent() {
                return (
                    <>
                        <FirstComponent>
                            <p>Lorem ipsum dolor sit, amet consectetur</p>
                        </FirstComponent>
                    </>
                );
            }`}
            />
        </>
    );
}
