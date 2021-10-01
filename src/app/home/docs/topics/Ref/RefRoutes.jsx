import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import WhatRef from "./WhatRef";
import ForwardRefs from "./ForwardRefs";

export default function RefRoutes() {
    let { path } = useRouteMatch();
    return (
        <>
            <Route exact path={`${path}/what-is-ref`}>
                <WhatRef />
            </Route>
            <Redirect to={`${path}/what-is-ref`} />
            <Route exact path={`${path}/forwardRef`}>
                <ForwardRefs />
            </Route>
        </>
    );
}
