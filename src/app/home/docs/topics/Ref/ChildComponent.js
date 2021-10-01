import React, { forwardRef } from "react";

function ChildComponent(props,InRef) {
    return (
        <>
            <input type="text" ref={InRef} />
        </>
    );
}

export default forwardRef(ChildComponent);
