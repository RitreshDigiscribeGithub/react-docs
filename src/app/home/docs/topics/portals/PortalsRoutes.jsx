import React from "react";
import WhatPortals from "./WhatPortals";
import { Route, useRouteMatch, Redirect } from "react-router-dom";

export default function PortalsRoutes() {
    let { path, url } = useRouteMatch();
    return (
        <>
            <Route path={`${path}/what-is-portals`}>
                <WhatPortals />
            </Route>
            <Redirect to={`${path}/what-is-portals`} />
        </>
    );
}
