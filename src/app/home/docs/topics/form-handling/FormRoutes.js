import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import FormValidation from "./FormValidation";
import BasicForm from "./BasicForm";

export default function FormRoutes() {
  let { path } = useRouteMatch();

  return (
    <>
      <Route exact path={`${path}/what-is-form-handling`}>
        <h1>what is form handling</h1>
        <ul data-ul="Handling forms">
          <li>Handling forms is a multipart process</li>
        </ul>
      </Route>

      <Redirect to={`${path}/what-is-form-handling`} />

      <Route path={`${path}/basic-form`}>
        <BasicForm />
      </Route>

      <Route path={`${path}/basic-form-validation`}>
        <FormValidation />
      </Route>
    </>
  );
}
