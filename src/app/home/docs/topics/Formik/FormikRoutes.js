import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import WhatFormik from "./WhatFormik";
import BasicForm from "./BasicForm";
import FormValidation from "./FormValidation";
import FormikComponent from "./FormikComponent";
import NestedObjects from "./NestedObjects";
import FieldArrayComponent from "./FieldArrayComponent";
import RenderPropsForm from "./RenderPropsForm";

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
            <Route path={`${path}/nested-objects`}>
                <NestedObjects />
            </Route>
            <Route path={`${path}/field-array-component`}>
                <FieldArrayComponent />
            </Route>
            <Route path={`${path}/render-props-form`}>
                <RenderPropsForm />
            </Route>
        </>
    );
}
