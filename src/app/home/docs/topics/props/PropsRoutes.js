import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import WhatIsProps from "./WhatIsProps";
import PropsInFunction from "./PropsInFunction";
import PropsInClass from "./PropsInClass";
import PreviousProps from "./PreviousProps";

export default function PropsRoutes() {
    let { path } = useRouteMatch();
    return (
        <>
            <Route exact path={`${path}/what-is-props`}>
                <WhatIsProps />
            </Route>
            <Redirect to={`${path}/what-is-props`} />
            <Route exact path={`${path}/props-in-function-component`}>
                <PropsInFunction />
            </Route>
            <Route exact path={`${path}/props-in-class-component`}>
                <PropsInClass />
            </Route>
            <Route exact path={`${path}/previous-props`}>
                <PreviousProps />
            </Route>
        </>
    );
}
