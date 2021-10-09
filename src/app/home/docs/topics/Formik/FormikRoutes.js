import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import WhatFormik from "./WhatFormik";
import BasicForm from "./BasicForm";
import FormValidation from "./FormValidation";
import FormikComponent from "./FormikComponent";

export default function FormikRoutes() {
    let { path, url } = useRouteMatch();
    return (
        <>
            <Route path={`${path}/what-is-formik`}>
                <WhatFormik />
            </Route>
            <Redirect to={`${path}/what-is-formik`} />
            <Route path={`${path}/basic-form`}>
                <BasicForm />
            </Route>
            <Route path={`${path}/form-validation`}>
                <FormValidation />
            </Route>
            <Route path={`${path}/formik-component`}>
                <FormikComponent />
            </Route>
        </>
    );
}
