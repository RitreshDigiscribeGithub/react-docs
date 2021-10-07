import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import ReduxIntroduction from "./ReduxIntroduction";
import Architecture from "./Architecture";
import Principles from "./Principles";
import ReduxSetUp from "./ReduxSetUp";

export default function ReduxRoutes() {
    let { path } = useRouteMatch();
    return (
        <>
            <Route path={`${path}/introduction`}>
                <ReduxIntroduction />
            </Route>
            <Redirect to={`${path}/introduction`} />
            <Route path={`${path}/architecture`}>
                <Architecture />
            </Route>
            <Route path={`${path}/principles`}>
                <Principles />
            </Route>
            <Route path={`${path}/redux-set-up`}>
                <ReduxSetUp />
            </Route>
        </>
    );
}
