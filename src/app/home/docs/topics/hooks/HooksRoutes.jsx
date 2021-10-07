import React from "react";
import { Route, useRouteMatch, Redirect, Link } from "react-router-dom";
import WhatHooks from "./WhatHooks";
import UseStateH from "./UseStateH";
import UseEffectH from "./UseEffectH";
import UseMemoH from "./UseMemoH";
import UseReducerH from "./UseReducerH";
import CustomHooks from "./CustomHooks";
import { Alert, AlertTitle } from "@mui/material";

export default function HooksRoutes() {
    let { path } = useRouteMatch();

    return (
        <>
            <Route path={`${path}/what-is-hooks`}>
                <WhatHooks />
            </Route>
            <Redirect to={`${path}/what-is-hooks`} />
            <Route path={`${path}/useState`}>
                <UseStateH />
            </Route>
            <Route path={`${path}/useEffect`}>
                <UseEffectH />
            </Route>
            <Route path={`${path}/useMemo`}>
                <UseMemoH />
            </Route>
            <Route path={`${path}/useReducer`}>
                <UseReducerH />
            </Route>
            <Route path={`${path}/useRef`}>
                <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    use need to understand for useRef hook, plz read ref —
                    <strong>
                        <Link to="../ref/what-is-ref">what is ref</Link>
                    </strong>
                </Alert>
            </Route>
            <Route path={`${path}/useContext`}>
                <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    use need to understand for useContext hook, plz read props-drilling —
                    <strong>
                        <Link to="../context-api/props-drilling">what is Context api</Link>
                    </strong>
                </Alert>
            </Route>
            <Route path={`${path}/custom-hooks`}>
                <CustomHooks />
            </Route>
        </>
    );
}
