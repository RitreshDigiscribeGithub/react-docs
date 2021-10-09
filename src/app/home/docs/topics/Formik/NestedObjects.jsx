import React from "react";
import ReactCode from "../../../../components/ReactCode";
import { Form, Formik, Field } from "formik";

const initialValues = {
    email: "",
    address: {
        pincode: "",
        city: "",
        country: "",
    },
};

const onSubmit = (values) => {
    console.log(values);
};

export default function NestedObjects() {
    const ErrorTemplete = (props) => {
        return <div className="text-danger">{props.children}</div>;
    };

    return (
        <>
            <h1>Nested Objects</h1>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
              import React from "react";
              import { Form, Formik, Field, ErrorMessage } from "formik";

               const initialValues = {
                   email: "",
                   address: {
                       pincode: "",
                       city: "",
                       country: "",
                   },
               };

              export default function Example() {
                  
                const ErrorTemplete = (props) => {
                    return <div className="text-danger">{props.children}</div>;
                };

                const onSubmit = (values) => {
                    console.log(values);
                };

                  return (
                      <div>
                      <Formik initialValues={initialValues} onSubmit={onSubmit}>
                      <Form>
                          <div>
                              <Field type="text" name="email" />
                          </div>
                          {/* Nested Objects */}
                          <div className="row">
                              <div className="col-md-6">
                                  <Field type="text" name="address.pincode" />
                              </div>
                              <div className="col-md-6">
                                  <Field type="text" name="address.city" />
                              </div>
                              <div className="col-md-6">
                                  <Field type="text" name="address.country" />
                              </div>
                          </div>
                          {/* NestedObjects */}
                          <div>
                              <button type="submit">submit</button>
                          </div>
                      </Form>
                  </Formik>
                      </div>
                  )
              }
              
            `}
            />
            <br />
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div>
                        <Field type="text" name="email" />
                    </div>
                    {/* Nested Objects */}
                    <div className="row">
                        <div className="col-md-6">
                            <Field type="text" name="address.pincode" />
                        </div>
                        <div className="col-md-6">
                            <Field type="text" name="address.city" />
                        </div>
                        <div className="col-md-6">
                            <Field type="text" name="address.country" />
                        </div>
                    </div>
                    {/* NestedObjects */}
                    <div>
                        <button type="submit">submit</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}
