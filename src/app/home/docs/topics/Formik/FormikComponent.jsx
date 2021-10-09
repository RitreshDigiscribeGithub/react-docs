import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import ReactCode from "../../../../components/ReactCode";

const initialValues = {
    username: "",
    email: "",
};

const onSubmit = (values) => {
    console.log(values);
};

const validationSchema = yup.object({
    username: yup.string().required("username is required"),
    email: yup.string().email("invalid email").required("email is required"),
});

export default function FormikComponent() {
    const ErrorTemplete = (props) => {
        return <div className="text-danger">{props.children}</div>;
    };

    return (
        <>
            <ul data-ul="What is formik component">
                <li>Formik component is Reduce to form code</li>
                <li>Formik component is replace to FormikHook</li>
                <li>Formik component is work like contex provider</li>
            </ul>
            <ul data-ul="types of formik component">
                <li>1 Formik</li>
                <li>2 Form</li>
                <li>3 Field</li>
                <li>4 ErrorMessage</li>
            </ul>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
            import React from "react";
            import { Form, Formik, Field, ErrorMessage } from "formik";
            import * as yup from "yup";
            
            const initialValues = {
                username: "",
                email: "",
            };
            
            const onSubmit = (values) => {
                console.log(values);
            };
            
            const validationSchema = yup.object({
                username: yup.string().required("username is required"),
                email: yup.string().email("invalid email").required("email is required"),
            });
            
            export default function FormikComponent() {
                
                const ErrorTemplete = (props) => {
                    return <div className="text-danger">{props.children}</div>;
                };

                return (
                    <>
                      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                      <Form>
                          <p>
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" 
                            component={ErrorTemplete} />
                          </p>
                          <p>
                            <Field type="text" name="email" />
                            <ErrorMessage name="email" 
                            component={ErrorTemplete}/>
                          </p>
                          <p>
                            <button type="submit">submit</button>
                          </p>
                        </Form>
                     </Formik>  
                    </>
                )
            }
            `}
            />

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <p>
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component={ErrorTemplete} />
                    </p>
                    <p>
                        <Field type="text" name="email" />
                        <ErrorMessage name="email" component={ErrorTemplete} />
                    </p>
                    <p>
                        <button type="submit">submit</button>
                    </p>
                </Form>
            </Formik>
        </>
    );
}
