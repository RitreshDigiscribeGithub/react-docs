import React from "react";
import PDImg from "../../../../../assets/images/props-drilling.png";

export default function PropsDrilling() {
    return (
        <>
            <h1>props drilling</h1>
            <ul data-ul="what is props drilling">
                <li>
                    In props drilling ,we send to data <strong>( first component to second component )</strong> then <strong>( second component to third component )</strong> , third component is get
                    that data using to <strong>props passing down tree</strong>
                </li>
            </ul>
            <img src={PDImg} alt="" className="img-fluid" />
        </>
    );
}
