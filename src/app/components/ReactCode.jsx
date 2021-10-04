import SyntaxHighlighter from "react-syntax-highlighter";
import React, { Component } from "react";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default class ReactCode extends Component {
    constructor() {
        super();
    }

    uiStyles = {
        background: "#1976D2",
        padding: "5px",
        color: "white",
    };

    render() {
        if (!this.props.file || !this.props.dot || !this.props.code) {
            throw new Error("you are missing file (or) dot (or) code attribute");
        }
        return (
            <>
                <div>
                    <div style={this.uiStyles}>
                        {this.props.file}.{this.props.dot}
                    </div>
                    <SyntaxHighlighter language={this.props.dot} style={docco}>
                        {this.props.code}
                    </SyntaxHighlighter>
                </div>
            </>
        );
    }
}
