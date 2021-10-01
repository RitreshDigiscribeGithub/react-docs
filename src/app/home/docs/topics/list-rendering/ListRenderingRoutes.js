import React from "react";
import { Route, useRouteMatch,Redirect } from "react-router-dom";
import ArrayList from "./ArrayList";
import ArrayOfObjectsList from "./ArrayOfObjectsList";
import NestedArrayList from "./NestedArrayList";
import WhatIsListRendering from "./WhatIsListRendering";

export default function ListRenderingRoutes() {
  let { path } = useRouteMatch();
  return (
    <>
      {/*NavBar here */}
      <Route path={`${path}/what-is-list-rendering`}>
        <WhatIsListRendering />
      </Route>
      <Redirect to={`${path}/what-is-list-rendering`}/>
      <Route path={`${path}/array-list`}>
        <ArrayList />
      </Route>
      <Route path={`${path}/array-of-objects-list`}>
        <ArrayOfObjectsList />
      </Route>
      <Route path={`${path}/nested-array-list`}>
        <NestedArrayList />
      </Route>
    </>
  );
}
