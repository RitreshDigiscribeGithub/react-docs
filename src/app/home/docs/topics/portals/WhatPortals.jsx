import React, { Component } from "react";
import ReactCode from "../../../../components/ReactCode";

export default class WhatPortals extends Component {
    
    render() {
        return (
            <>
                <h1>What Portals</h1>
                <ul data-ul="What Portals">
                    <li>By Portals we can create JSX templete in another id outside of root id</li>
                    <li>Portals use with class component</li>
                    <li>
                        syntax : <strong>ReactDom.createPortal({`<p>hello , Portals</p>`},document.getElementById('IdName'))</strong>
                    </li>
                </ul>
                <ul data-ul="how to use Portal"></ul>
                <ReactCode
                    file="index"
                    dot="html"
                    code={`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <title>React App</title>
                    </head>
                    <body>
                        <div id="root"></div>
                        <div id="test">
                           <!-- Portals JSX templete inside id:test -->
                        </div>
                    </body>
                </html>`}
                />
                <ReactCode
                    file="component"
                    dot="jsx"
                    code={`
                    import React, { Component } from 'react'
                    import ReactDom from "react-dom";

                    export default class WhatPortals extends Component {
                        render() {
                            ReactDom.createPortal(
                                <p>dolor sit amet consectetur</p>,
                                document.getElementById('test')
                                )
                        }
                    }
                    
                    `}
                />
            </>
        );
    }
}
