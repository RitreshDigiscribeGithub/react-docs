import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import WhatIsJsx from "./WhatIsJsx";
import JsxRules from "./JsxRules";
import Fragment from "./Fragment";

export default function JsxRoutes() {
  let { path } = useRouteMatch();

  return (
    <>
      <Route exact path={`${path}/what-is-jsx`}>
        <WhatIsJsx />
      </Route>
      <Redirect to={`${path}/what-is-jsx`} />

      <Route exact path={`${path}/rules-of-jsx`}>
        <JsxRules />
      </Route>

      <Route exact path={`${path}/fragment`}>
        <Fragment />
      </Route>
    </>
  );
}
