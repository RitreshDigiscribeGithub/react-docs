import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import WhatRouting from "./WhatRouting";
import BasicRouting from "./BasicRouting";
import DynamicRouting from "./DynamicRouting";
import RoutingHooks from "./RoutingHooks";


export default function RoutingRoutes() {
    let { path } = useRouteMatch();
    return (
        <>
            <Route path={`${path}/what-is-routing`}>
                <WhatRouting />
            </Route>
            <Redirect to={`${path}/what-is-routing`} />
            <Route path={`${path}/basic-routing`}>
                <BasicRouting />
            </Route>
            <Route path={`${path}/dynamic-routing`}>
                <DynamicRouting />
            </Route>
            <Route path={`${path}/routing-hooks`}>
                <RoutingHooks />
            </Route>
        </>
    );
}
