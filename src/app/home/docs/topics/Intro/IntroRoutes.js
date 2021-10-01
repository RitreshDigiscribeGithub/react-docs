import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";

import Introduction from "./Introduction";
import Setup from "./Setup";
import Booting from "./Booting";

export default function IntroRoutes() {
  let { path } = useRouteMatch();
  return (
    <>
      <Redirect to={`${path}/introduction`} />

      <Route exact path={`${path}/introduction`}>
        <Introduction />
      </Route>

      <Route path={`${path}/set-up`}>
        <Setup />
      </Route>

      <Route path={`${path}/booting`}>
        <Booting />
      </Route>
    </>
  );
}
