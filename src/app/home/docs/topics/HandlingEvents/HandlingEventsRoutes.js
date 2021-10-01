import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import FunctionEvents from "./FunctionEvents";
import ClassEvents from "./ClassEvents";

export default function HandlingEventsRoutes() {
  let { path } = useRouteMatch();
  return (
    <>
      <Redirect to={`${path}/function-component-events`} />
      <Route exact path={`${path}/function-component-events`}>
        <FunctionEvents />
      </Route>
      <Route exact path={`${path}/class-component-events`}>
        <ClassEvents />
      </Route>
    </>
  );
}
