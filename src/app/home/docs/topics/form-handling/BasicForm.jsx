import React, { useState } from "react";
import ReactCode from "../../../../components/ReactCode";

export default function BasicForm() {
  const [formData, formState] = useState({});

  const formEvent = (event) => {
    const { name, value } = event.target;

    formState(() => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  const fromSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    e.target.reset();
    formState({});
  };

  return (
    <>
      <h1>basic form</h1>
      <ul data-ul="how to create basic form">
      </ul>
      <ReactCode file="components" dot="jsx" code={`
       import React ,{ useState } from 'react';

       export default function Components() {

         const [formData, formState] = useState({});

         const formEvent = (event) => {
             const { name, value } = event.target;//using object destructuring

             formState(() => {   
              return {
                 ...formData,// spread operator for concat empty object
                  [name]: value,//here check value of name attr then assign value to empty object
                };
             });

           };
     
        const fromSubmit = (e) => {
           e.preventDefault();
           console.log(formData);
           e.target.reset();
           formState({});
        };
         return (
           <>
           <form onSubmit={fromSubmit}>
              <p>
                <label>name</label>
                <input type="text" name="name" onChange={formEvent} />
              </p>
              <p>
                <label>username</label>
                <input type="text" name="username" onChange={formEvent} />
              </p>
              <p>
                <button className="btn btn-primary" type="submit">
                  submit
                </button>
              </p>
           </form> 
           </>
         )
       }
       
      `} />
      <form onSubmit={fromSubmit}>
        <p>
          <label>name</label>
          <input type="text" name="name" onChange={formEvent} />
        </p>
        <p>
          <label>username</label>
          <input type="text" name="username" onChange={formEvent} />
        </p>
        <p>
          <button className="btn btn-primary" type="submit">
            submit
          </button>
        </p>
      </form>
    </>
  );
}
