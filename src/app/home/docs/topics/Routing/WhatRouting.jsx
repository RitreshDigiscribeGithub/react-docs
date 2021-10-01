import React from "react";
export default function WhatRouting() {
    return (
        <>
            <h1>What is Routing</h1>
            <ul data-ul="What is Routing">
                <li>Routing is that mechanism Inwhich we can navigate one component to Another component based on url routes</li>
                <li>Routing is not part of react library</li>
                <li>For Routing we have to use Another library</li>
            </ul>
            <ul data-ul="react router">
                <li>react router is a library that use for perform navigate one component to Another component</li>
                <span className="cli">npm install react-router-dom</span>
                <li>
                    <a href="https://reactrouter.com/web/guides/quick-start" target="_blank">react-router-dom</a>
                </li>
            </ul>
        </>
    );
}
