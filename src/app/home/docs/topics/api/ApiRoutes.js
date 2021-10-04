import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import WhatApi from "./WhatApi";
import HttpCurd from "./HttpCurd";
import CurdCode from "./CurdCode/CurdCode";

export default function ApiRoutes() {
    let { path, url } = useRouteMatch();
    return (
        <>
            <Route path={`${path}/what-is-api`}>
                <WhatApi />
            </Route>
            <Route path={`${path}/http-curd`}>
                <HttpCurd />
            </Route>
            <Route path={`${path}/curd-code`}>
                <CurdCode />
            </Route>
        </>
    );
}
