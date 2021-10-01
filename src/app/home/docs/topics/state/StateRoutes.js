import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import WhatIsState from "./WhatIsState";
import StateInFunction from "./StateInFunction";
import StateInClass from "./StateInClass";

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
    </>
  );
}
