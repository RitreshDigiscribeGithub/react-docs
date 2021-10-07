import React from "react";

export default function Principles() {
    return (
        <>
            <h1>Redux Principles</h1>
            <ul data-ul="Single source">
                <li>we have always single source (store) , all data get from single source (store)</li>
            </ul>
            <ul data-ul="State readonly">
                <li>we can only change to state by dispatch an action ,state can not be update directly</li>
            </ul>
            <ul data-ul="immutability , one way data flow">
                <li>In application data flow in unidirectional with immutability</li>
            </ul>
        </>
    );
}
