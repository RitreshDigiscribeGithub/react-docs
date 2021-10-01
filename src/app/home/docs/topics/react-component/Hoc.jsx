import React, { useState } from "react";
import ReactCode from "../../../../components/ReactCode";
import imgHoc from "../../../../../assets/images/hoc.jpg";

//Heading: BasicComponent
function Basic() {
    return <span>hello , </span>;
}

//Heading: HOC Component X,Y,Z
// Z
function HocComponentX(props) {
    return (
        <div>
            <props.C /> James
        </div>
    );
}
// Y
function HocComponentY(props) {
    return (
        <div>
            <props.C /> Robert
        </div>
    );
}
// Z
function HocComponentZ(props) {
    return (
        <div>
            <props.C /> John
        </div>
    );
}

//Heading: Main Component
export default function Hoc() {
    return (
        <>
            <h1>high order component</h1>
            <ul data-ul="what is high order component">
                <li>high order component is a take component as input and return component as output</li>
            </ul>
            <img src={imgHoc} alt="" className="img-fluid d-block my-3" />
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
             import React from "react";


            //____________Basic Component_______________
            function Basic() {
                return <span>hello ,</span>;
            }

            // ___________main component________________
             export default function Example() {
                 return (
                     <>
                        <X C={Basic} />//Basic as input
                        <Y C={Basic} />//Basic as input
                        <Z C={Basic} />//Basic as input
                     </>
                 )
             }


            //_____________HOC Component X,Y,Z__________
       
            function X(props) {
                return (
                    <div>
                        <props.C /> James
                    </div>
                );
            }
       
            function Y(props) {
                return (
                    <div>
                        <props.C /> Robert
                    </div>
                );
            }
     
            function Z(props) {
                return (
                    <div>
                        <props.C /> John
                    </div>
                );
            }
            `}
            />
            <HocComponentX C={Basic} />
            <HocComponentY C={Basic} />
            <HocComponentZ C={Basic} />
        </>
    );
}
