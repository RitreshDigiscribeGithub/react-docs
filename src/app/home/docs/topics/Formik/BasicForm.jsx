import React from "react";
import { useFormik } from "formik";
import ReactCode from "../../../../components/ReactCode";

export default function UseFormikHook() {
    const formikForm = useFormik({
        initialValues: {
            username: "",
            email: "",
        },
        onSubmit: (values) => {
            console.log(values);
            formikForm.resetForm();
        },
    });

    return (
        <>
            <h1>basic form</h1>
            
            <form onSubmit={formikForm.handleSubmit}>
                <p>
                    <label htmlFor="u">username</label>
                    <input type="text" name="username" value={formikForm.values.username} onChange={formikForm.handleChange} />
                </p>
                <p>
                    <label htmlFor="u">email</label>
                    <input type="text" name="email" value={formikForm.values.email} onChange={formikForm.handleChange} />
                </p>
                <p>
                    <button type="submit">submit</button>
                </p>
            </form>

            <ReactCode
                file="Example"
                dot="jsx"
                code={`
             import React from "react";
             import { useFormik } from "formik";

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
                });

                 return (
                     <div>
                       <form onSubmit={formikForm.handleSubmit}>
                          <p>
                              <label htmlFor="u">username</label>
                                <input type="text" name="username" value={formikForm.values.username}
                               onChange={formikForm.handleChange} />
                          </p>
                          <p>
                              <label htmlFor="u">email</label>
                              <input type="text" name="email" value={formikForm.values.email}
                               onChange={formikForm.handleChange} />
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
        </>
    );
}
