import React from "react";
import IfElse from "./IfElse";
import ElementVariables from "./ElementVariables";
import TernaryOperator from "./TernaryOperator";
import ShortCircuitOperator from "./ShortCircuitOperator";
import { Route, useRouteMatch, Redirect } from "react-router-dom";

export default function ConditionalRenderingRoutes() {
  let { path } = useRouteMatch();
  return (
    <>
      <Redirect to={`${path}/if-else`} />

      <Route path={`${path}/if-else`}>
        <IfElse />
      </Route>

      <Route path={`${path}/element-variables`}>
        <ElementVariables />
      </Route>

      <Route path={`${path}/ternary-operator`}>
        <TernaryOperator />
      </Route>

      <Route path={`${path}/short-circuit-operator`}>
        <ShortCircuitOperator />
      </Route>
    </>
  );
}
