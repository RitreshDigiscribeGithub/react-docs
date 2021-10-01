import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import WhatHooks from "./WhatHooks";
import UseStateH from "./UseStateH";
import UseEffectH from "./UseEffectH";
import UseMemoH from "./UseMemoH";
import UseRefH from "./UseRefH";

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
      <Route path={`${path}/useRef`}>
        <UseRefH />
      </Route>
    </>
  );
}
