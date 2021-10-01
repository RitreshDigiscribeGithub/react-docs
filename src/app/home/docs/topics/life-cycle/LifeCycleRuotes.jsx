import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import ImglifeCycleMethod from "../../../../../assets/images/lifeCycleMethod.png";
import WhatIsConstructor from "./WhatIsConstructor";
import RenderMethod from "./RenderMethod";
import DidMount from "./DidMount";
import DidUpdate from "./DidUpdate";
import ShouldUpdate from "./ShouldUpdate";
import WillUnmount from "./WillUnmount";


export default function LifeCycleRuotes() {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Route path={`${path}/what-is-life-cycle-method`}>
        <h1>life cycle method</h1>
        <ul data-ul="what is life cycle method">
          <li>
            life cycle method are component life statages inwhich component is <strong>mounting</strong> , <strong>updating</strong> , <strong>unmonting</strong>
          </li>
          <li>This life cycle stages are called to phases</li>
          <li>each component have own life cycle and three phases</li>
        </ul>
        <img src={ImglifeCycleMethod} className="img-fluid" alt="" />
      </Route>
      <Redirect to={`${path}/what-is-life-cycle-method`} />
      <Route path={`${path}/constructor`}>
        <WhatIsConstructor />
      </Route>
      <Route path={`${path}/render-method`}>
        <RenderMethod />
      </Route>
      <Route path={`${path}/component-did-mount`}>
        <DidMount />
      </Route>
      <Route path={`${path}/component-did-update`}>
        <DidUpdate />
      </Route>
      <Route path={`${path}/should-component-update`}>
        <ShouldUpdate />
      </Route>
      <Route path={`${path}/component-will-unmount`}>
        <WillUnmount />
      </Route>
    </>
  );
}
