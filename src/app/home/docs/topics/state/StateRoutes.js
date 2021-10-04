import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import WhatIsState from "./WhatIsState";
import StateInFunction from "./StateInFunction";
import StateInClass from "./StateInClass";
import PreviousState from "./PreviousState";
import PreviousObject from "./PreviousObject";

export default function StateRoutes() {
    let { path } = useRouteMatch();
    return (
        <>
            <Route path={`${path}/what-is-state`}>
                <WhatIsState />
            </Route>
            <Redirect to={`${path}/what-is-state`} />

            <Route path={`${path}/state-in-function-component`}>
                <StateInFunction />
            </Route>
            <Route path={`${path}/state-in-class-component`}>
                <StateInClass />
            </Route>
            <Route path={`${path}/previous-state`}>
                <PreviousState />
            </Route>
            <Route path={`${path}/previous-state-with-object`}>
                <PreviousObject />
            </Route>
        </>
    );
}
