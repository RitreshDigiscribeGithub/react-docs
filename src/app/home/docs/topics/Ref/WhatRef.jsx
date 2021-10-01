import React, { Component, createRef } from "react";
import ReactCode from "../../../../components/ReactCode";

export default class WhatRef extends Component {
    constructor() {
        super();
        this.myRef = createRef();
    }
    setValue() {
        this.myRef.current.value = "react"; //directly manipulate to dom
        this.myRef.current.style.color = "red"; //directly manipulate to dom
    }
    render() {
        return (
            <>
                <h1>Ref</h1>
                <ul data-ul="what is ref">
                    <li>ref is work on real dom</li>
                    <li>ref is directly manipulate to dom</li>
                    <li>we should use ref less to less</li>
                </ul>
                <ReactCode
                    file="Example"
                    dot="jsx"
                    code={`
                 import React, { Component , createRef } from "react";
                 
                 export default class Example extends Component {

                    constructor() {
                        super();
                        this.myRef = createRef();
                    }

                    setValue() {
                        this.myRef.current.value = "react"; //directly manipulate to dom
                        this.myRef.current.style.color = "red"; //directly manipulate to dom
                    }

                     render() {
                         return (
                             <>
                              <input type="text" ref={this.myRef} />
                              <button onClick={() => this.setValue()}>set value</button> 
                             </>
                         )
                     }
                 }
                 
                `}
                />
                <input type="text" ref={this.myRef} />
                <button onClick={() => this.setValue()}>set value</button>
            </>
        );
    }
}
