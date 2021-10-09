import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import ReactCode from "../../../../components/ReactCode";

const initialValues = {
    username: "",
    theme: "",
    gender: "",
    address: {
        city: "",
        pincode: "",
    },
    skills: [""],
    designation: "",
};

const patchValues = {
    username: "ritesh",
    theme: "red",
    gender: "male",
    address: {
        city: "indore",
        pincode: 452020,
    },
    skills: ["python", "JavaScript", "python"],
    designation: ["backend"],
};

const validationSchema = yup.object({
    username: yup
        .string()
        .matches(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,12}[a-zA-Z0-9]$/, "invaid username")
        .required("username is required"),
    theme: yup.string().required("theme is required"),
    address: yup.object().shape({
        city: yup
            .string()
            .matches(/^[a-z ,'-]+$/i, "invaid input")
            .required("city required"),
        pincode: yup
            .string()
            .matches(/(^\d{6}$)/, "invaid pincode must be 6 digit and number")
            .required("required pincode"),
    }),
    gender: yup.string().required("gender is required"),

    designation: yup.array().required("designation is required"),
    skills: yup.array(
        yup
            .string()
            .matches(/^[a-z ,'-]+$/i, "invaid input")
            .required("skills is required")
    ),
});

export default function RenderPropsForm() {
    const [patchForm, setForm] = useState(null);
    const ErrorTemplete = (props) => {
        return <span className="text-danger d-block">{props.children}</span>;
    };

    const ArrayInput = (props) => {
        const { push, remove, form } = props.fData;
        const { values } = form;
        const { skills } = values;
        return (
            <>
                <button type="button" onClick={() => push("")} className="btn btn-outline-primary">
                    add skill
                </button>
                <div className="row">
                    {skills.map((lang, i) => (
                        <div key={i} className="col-md-4 mt-2">
                            <div className="input-group mb-3">
                                <Field type="text" className="form-control" name={`skills[${i}]`} />
                                <button className="btn btn-outline-danger" type="button" onClick={() => remove(i)} disabled={skills.length === 1}>
                                    delete
                                </button>
                            </div>
                            <ErrorMessage name={`skills[${i}]`} component={ErrorTemplete} />
                        </div>
                    ))}
                </div>
            </>
        );
    };

    const onSubmit = (values, onSubmitProps) => {
        console.log(values);
        onSubmitProps.resetForm();
        setForm("");
    };

    return (
        <>
            <h1>Render props full form</h1>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
            import React, { useState } from "react";
            import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
            import * as yup from "yup";

            const initialValues = {username: "",theme: "",gender: "",
                  address: {city: "", pincode: ""},
                  skills: [""], designation:"",
            };

            const patchValues = {username: "xyz",theme: "red",gender: "male",
                  address: {city: "indore", pincode: "452020"},
                  skills: ["python", "JavaScript", "python"], designation:"["backend"]",
             };
            
            const validationSchema = yup.object({
                username: yup
                    .string()
                    .matches(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,12}[a-zA-Z0-9]$/, "invaid username")
                    .required("username is required"),
                theme: yup.string().required("theme is required"),
                address: yup.object().shape({
                    city: yup
                        .string()
                        .matches(/^[a-z ,'-]+$/i, "invaid input")
                        .required("city required"),
                    pincode: yup
                        .string()
                        .matches(/(^\d{6}$)/, "invaid pincode must be 6 digit and number")
                        .required("required pincode"),
                }),
                gender: yup.string().required("gender is required"),
            
                designation: yup.array().required("designation is required"),
                skills: yup.array(
                    yup
                        .string()
                        .matches(/^[a-z ,'-]+$/i, "invaid input")
                        .required("skills is required")
                ),
            });
            
            export default function RenderPropsForm() {

                const [patchForm, setForm] = useState(null);

                const ErrorTemplete = (props) => {
                    return <span className="error">{props.children}</span>;
                };
            
                const ArrayInput = (props) => {
                    const { push, remove, form } = props.fData;
                    const { values } = form;
                    const { skills } = values;
                    return (
                        <>
                            <button type="button" onClick={() => push("")}>
                                add skill
                            </button>
                                {skills.map((lang, i) => (
                                    <div key={i}>
                                    <Field type="text" name={${"skills[${i}]"} />
                                    <button type="button" onClick={() => remove(i)} disabled={skills.length === 1}>
                                        delete
                                    </button>
                                        <ErrorMessage name={${"skills[${i}]"}} component={ErrorTemplete} />
                                    </div>
                                ))}
                        </>
                    );
                };
            
                const onSubmit = (values, onSubmitProps) => {
                    console.log(values);
                    onSubmitProps.resetForm();
                    setForm("");
                };

                return (
                    <Formik initialValues={patchForm || initialValues} onSubmit={onSubmit} 
                    validationSchema={validationSchema} enableReinitialize>
                    {(formik) => (
                        <Form>

                            {/* ________personal information________ */}
                                <p>
                                    <Field type="text" name="username"/>
                                    <ErrorMessage name="username" component={ErrorTemplete} />
                                </p>

                                <p>
                                  <Field as="select" name="theme">
                                    <option value="">Select option</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                  </Field>
                                  <ErrorMessage name="theme" component={ErrorTemplete} />
                                </p>
                                <p>
                                  <label>
                                     <Field type="radio" name="gender" value="male" /> male</label>
                                  <label>
                                      <Field type="radio" name="gender" value="female" />female</label>
                                   <ErrorMessage name="gender" component={ErrorTemplete} />
                                </p>

                            {/*________address information_________--*/}
                                <p>
                                  <Field type="text" name="address.city"  />
                                  <ErrorMessage name="address.city" component={ErrorTemplete} />
                                </p>
                                <p>
                                  <Field type="text" name="address.pincode"/>
                                  <ErrorMessage name="address.pincode" component={ErrorTemplete} />
                               </p>

                            {/* ________designation information________ */}
                            <p className="row">
                               <label>
                                   <Field type="checkbox" name="designation" value="frontend"/>frontend
                               </label>
                               <label>
                                   <Field type="checkbox" name="designation" value="backend"/>backend
                               </label>
                               <label>
                                   <Field type="checkbox" name="designation" value="fullstack" />fullstack
                               </label>
                               <ErrorMessage name="designation" component={ErrorTemplete} />
                            </p>

                            <p>
                              <FieldArray type="text" name="skills">
                                 {(formArray) => (<ArrayInput fData={formArray} />)}
                               </FieldArray>
                            </p>

                            {/*________submit button________*/}
                              <button disabled={!formik.isValid || formik.isSubmitting} 
                              type="submit">submit</button>
                              <button onClick={() => setForm(patchValues)}
                              type="button">patch data</button>
                        </Form>
                    )}
                </Formik>
                );
            }
            
            `}
            />
            <br />

            <Formik initialValues={patchForm || initialValues} onSubmit={onSubmit} validationSchema={validationSchema} enableReinitialize>
                {(formik) => (
                    <Form>
                        {/*Todo: personal information */}
                        <div className="form-card row p-3">
                            <p className="fs-3">personal information</p>
                            <p className="col">
                                <label className="form-label">username</label>
                                <Field type="text" name="username" className="form-control" />
                                <ErrorMessage name="username" component={ErrorTemplete} />
                            </p>
                            <p className="col">
                                <label className="form-label">theme</label>
                                <Field as="select" name="theme" className="form-select">
                                    <option value="">Select option</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </Field>
                                <ErrorMessage name="theme" component={ErrorTemplete} />
                            </p>
                            <p className="row">
                                <label className="form-label">gender</label>
                                <label className="col-auto">
                                    <Field type="radio" name="gender" value="male" />
                                    &nbsp;male
                                </label>
                                <label className="col-auto">
                                    <Field type="radio" name="gender" value="female" />
                                    &nbsp;female
                                </label>
                                <ErrorMessage name="gender" component={ErrorTemplete} />
                            </p>
                        </div>

                        {/*Todo: address information */}
                        <div className="form-card row p-3">
                            <p className="fs-3">address information</p>
                            <p className="col">
                                <label className="form-label">city</label>
                                <Field type="text" name="address.city" className="form-control" />
                                <ErrorMessage name="address.city" component={ErrorTemplete} />
                            </p>
                            <p className="col">
                                <label className="form-label">pincode</label>
                                <Field type="text" name="address.pincode" className="form-control" />
                                <ErrorMessage name="address.pincode" component={ErrorTemplete} />
                            </p>
                        </div>

                        {/*Todo: designation and skill */}
                        <div className="form-card row p-3">
                            <p className="fs-3">designation and skill</p>
                            <label className="form-label">designation</label>
                            <p className="row">
                                <label className="col-auto">
                                    <Field type="checkbox" name="designation" value="frontend" />
                                    &nbsp;&nbsp;frontend
                                </label>
                                <label className="col-auto">
                                    <Field type="checkbox" name="designation" value="backend" />
                                    &nbsp;&nbsp;backend
                                </label>
                                <label className="col-auto">
                                    <Field type="checkbox" name="designation" value="fullstack" />
                                    &nbsp;&nbsp;fullstack
                                </label>
                                <ErrorMessage name="designation" component={ErrorTemplete} />
                            </p>
                            <p className="col-md-12">
                                <FieldArray type="text" name="skills">
                                    {(formArray) => (
                                        <>
                                            <ArrayInput fData={formArray} />
                                        </>
                                    )}
                                </FieldArray>
                            </p>
                        </div>
                        <div className="px-3">
                            <button type="submit" disabled={!formik.isValid || formik.isSubmitting} className="btn btn-success">
                                submit
                            </button>
                            &nbsp;&nbsp;
                            <button type="button" onClick={() => setForm(patchValues)} className="btn btn-primary">
                                patch data
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
