import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import UseContextH from "./UseContextH";
import PropsDrilling from "./PropsDrilling";
import WhatContext from "./WhatContext";
import HowToUseContextApi from "./HowToUseContextApi";

export default function ContextApiRoutes() {
    let { path } = useRouteMatch();
    return (
        <>
            <Route path={`${path}/props-drilling`}>
                <PropsDrilling />
            </Route>
            <Redirect to={`${path}/props-drilling`} />
            <Route path={`${path}/what-is-context-api`}>
                <WhatContext />
            </Route>
            <Route path={`${path}/how-to-use-context-api`}>
                <HowToUseContextApi />
            </Route>
            <Route path={`${path}/useContext-hook`}>
                <UseContextH />
            </Route>
        </>
    );
}
