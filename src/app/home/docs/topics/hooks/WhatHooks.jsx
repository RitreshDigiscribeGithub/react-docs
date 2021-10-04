import React from "react";

export default function WhatHooks() {
    return (
        <>
            <h1>what is hooks</h1>
            <ul data-ul="what is hooks">
                <li>we use hooks for achieve lifecycle functionality in funtion component</li>
                <li>Hooks is introdued in react 16.8 version.</li>
                <li>Hooks is use in function components at top palcement</li>
                <li>Hooks is calling in body of function</li>
                <li>Hooks can not use with class component</li>
                <li>Hooks is use for change state in components</li>
            </ul>
            <ul data-ul="types of hooks">
                <li>1 . useState</li>
                <li>2 . useEffect</li>
                <li>3 . useMemo</li>
                <li>4 . useRef</li>
            </ul>
            <ul data-ul="Rules of hooks">
                <li>we should ues always hooks in side component and top palcement</li>
                <li>if we use hooks so component name must be follow Pascal convention</li>
                <li>hooks should not initialise hook in condition</li>
            </ul>
        </>
    );
}
