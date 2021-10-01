import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import StyleSheets from "./StyleSheets";
import InlineStyles from "./InlineStyles";
import CssModule from "./CssModule";
import StyledComponent from "./StyledComponent";

export default function StylingRoutes() {
  let { path, url } = useRouteMatch();
  
  return (
    <>
      <Route exact path={`${path}/style-sheets`}>
       <StyleSheets/>
      </Route>
      
      <Redirect to={`${path}/style-sheets`} />

      <Route exact path={`${path}/inline-styles`}>
      <InlineStyles/>
      </Route>

      <Route exact path={`${path}/css-module`}>
      <CssModule/>
      </Route>

      <Route exact path={`${path}/styled-component`}>
        <StyledComponent/>
      </Route>
    </>
  );
}
