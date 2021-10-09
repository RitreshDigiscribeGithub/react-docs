import React from "react";
import { useFormik } from "formik";
import ReactCode from "../../../../components/ReactCode";
import * as yup from "yup";

const initialValues = {
    username: "",
    email: "",
};

const validationSchema = yup.object({
    username: yup.string().required("username is required"),
    email: yup.string().email("invalid email").required("email is required"),
});

export default function FormValidation() {
    const formikForm = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values);
            formikForm.resetForm();
        },
        validationSchema,
    });

    return (
        <>
            <h1>form validation</h1>
            <ul data-ul="Yup schema library">
                <li>Yup is a JavaScript schema builder for value parsing and validation for react form validation</li>
                <li>
                    <span className="cli">npm i yup</span>
                </li>
            </ul>
            <ul data-ul="getFieldProps('input field name')">
                <li>getFieldProps is a all props shortened way of input props </li>
            </ul>
            <ReactCode
                file="shortened"
                dot="jsx"
                code={`
             <input type="text" name="username" 
             value={formikForm.values.email} //as fieldProps 
             onChange={formikForm.handleChange} //as fieldProps
             onBlur={formikForm.handleBlur} //as fieldProps 
             />

            <input type="text" name="username" 
            {...formikForm.getFieldProps("username")} />//shortened 
            `}
            />

            <ul data-ul="how to use form validation"></ul>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
             import React from "react";
             import { useFormik } from "formik";

             const validationSchema = yup.object({
                username: yup.string().required("username is required"),
                email: yup.string().email("invalid email").required("email is required"),
            });

             export default function Example() {

                const formikForm = useFormik({
                    initialValues: {
                        username: "",
                        email: "",
                    },//all form fields

                    onSubmit: (values) => {
                        console.log(values);
                        formikForm.resetForm();
                    },//onSubmit 
                    validationSchema
                });

                 return (
                     <div>
                       <form onSubmit={formikForm.handleSubmit}>
                          <p>
                                <input type="text" name="username" 
                                {...formikForm.getFieldProps("username")} />

                               {formikForm.errors.username && formikForm.touched.username && 
                                <span>{formikForm.errors.username}</span>}
                          </p>
                          <p>
                              <input type="text" name="email" 
                              {...formikForm.getFieldProps("username")}/>

                               {formikForm.errors.email && formikForm.touched.email && 
                                <span>{formikForm.errors.email}</span>}
                          </p>
                          <p>
                              <button type="submit">submit</button>
                          </p>
                      </form> 
                     </div>
                 )
             }
             
            `}
            />
            <form onSubmit={formikForm.handleSubmit}>
                <p>
                    <label htmlFor="u">username</label>
                    <input type="text" name="username" {...formikForm.getFieldProps("username")} />
                    {formikForm.errors.username && formikForm.touched.username && <span>{formikForm.errors.username}</span>}
                </p>
                <p>
                    <label htmlFor="u">email</label>
                    <input type="text" name="email" {...formikForm.getFieldProps("email")} />

                    {formikForm.errors.email && formikForm.touched.email && <span>{formikForm.errors.email}</span>}
                </p>
                <p>
                    <button type="submit">submit</button>
                </p>
            </form>
        </>
    );
}
