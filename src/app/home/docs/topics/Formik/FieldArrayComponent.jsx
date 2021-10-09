import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import ReactCode from "../../../../components/ReactCode";

const initialValues = {
    friends: [""], //"" for default 1 input
};

const onSubmit = (values) => {
    console.log(values);
};

export default function FieldArrayComponent() {
    const ArrayInput = (props) => {
        const { push, remove, form } = props.fData;
        const { values } = form;
        const { friends } = values;
        return (
            <>
                <button type="button" onClick={() => push("")}>
                add</button>
                {friends.map((frd, i) => (
                    <div key={i}>
                        <Field type="text" name={`friends[${i}]`} />
                        <button type="button" onClick={() => remove(i)} disabled={friends.length === 1}>
                            remove
                        </button>
                    </div>
                ))}
            </>
        );
    };

    return (
        <>
            <h1>Field Array Component</h1>
            <ReactCode
                file="Example"
                dot="jsx"
                code={`
             import React from "react";
             
             export default function Example() {
                 //component
                const ArrayInput = (props) => {
                    const { push, remove, form } = props.fData;
                    const { values } = form;
                    const { friends } = values;
                    return (
                        <>
                            <button type="button" onClick={() => push("")}>add</button>
                            {friends.map((frd, i) => (
                                <div key={i}>
                                    <Field type="text" name={${"friends[${i}]"}} />
                                    <button type="button" onClick={() => remove(i)} 
                                    disabled={friends.length === 1}>remove</button>
                                </div>
                            ))}
                        </>
                    );
                };
                //component

                 return (
                   <Formik initialValues={initialValues} onSubmit={onSubmit}>
                     <Form>
                    <FieldArray type="text" name="friends">
                        {(formObj) => {
                            return (<ArrayInput fData={formObj} />);
                        }}
                    </FieldArray>
                       <button type="submit">submit</button>
                    </Form>
                 </Formik>
                 );
             }`}
            />

            <br />
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <FieldArray type="text" name="friends">
                        {(formObj) => {
                            const { push, remove, form } = formObj;
                            const { values } = form;
                            const { friends } = values;
                            return (
                                <>
                                    <ArrayInput fData={formObj} />
                                </>
                            );
                        }}
                    </FieldArray>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                </Form>
            </Formik>
            <br />
        </>
    );
}
