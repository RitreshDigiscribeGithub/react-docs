import React from "react";
import ReactCode from "../../../../components/ReactCode";
import ExmapleForm from "./ExmapleForm";


export default function FormValidation() {
  return (
    <>
      <h1>basic form validation</h1>
      <ul data-ul="what is form validation"></ul>
      <ul data-ul="how to use form validation"></ul>
      <ReactCode
        file="MyForm"
        dot="jsx"
        code={`
       import React from 'react'
       
       export default function FormValidation() {
        const [formData, formState] = useState({});
        const [formErrors, setErrors] = useState({});
      
        useEffect(() => {
          if (formData) {
            setErrors(validation(formData));
          }
        }, [formData]);
      
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
          let { username, email, password, lang, gender } = formData;
          if (formData && username && email && password && lang && gender) {
            console.log(formData);
            e.target.reset();
            formState({});
          } else {
            console.log("error");
          }
        };
           return (
               <>
               <form onSubmit={fromSubmit}>
                 <p>
                   <label>name</label>
                   <input type="text" name="name" onChange={formEvent} />
                   {formErrors.name && <span className="error">{formErrors.name}</span>}
               </p>
                 <p>
                   <label>username</label>
                   <input type="text" name="username" onChange={formEvent} />
                   {formErrors.username && <span className="error">{formErrors.username}</span>}
               </p>
                 <p>
                     <label>email</label>
                     <input type="text" name="email" onChange={formEvent} />
                     {formErrors.email && <span className="error">{formErrors.email}</span>}
                 </p>
                <p>
                  <label>mobile</label>
                  <input type="text" name="mobile" onChange={formEvent} />
                   {formErrors.mobile && <span className="error">{formErrors.mobile}</span>}
               </p>
                 <p>
                     <label>password</label>
                     <input type="text" name="password" onChange={formEvent} />
                     {formErrors.password && <span className="error">{formErrors.password}</span>}
                </p>
                 <p>
                   <label>confirm password</label>
                   <input type="text" name="c_password" onChange={formEvent} />
                   {formErrors.c_password && <span className="error">{formErrors.c_password}</span>}
                </p>
                 <p>
                     <label>Select language</label>
                     <select name="lang" onChange={formEvent}>
                       <option>Select option</option>
                       <option value="python">python</option>
                       <option value="java">java</option>
                       <option value="java script">java script</option>
                       <option value="go">go</option>
                     </select>
                     {formErrors.lang && <span className="error">{formErrors.lang}</span>}
                 </p>
                 <p>
                     <input type="radio" name="gender" value="male" onChange={formEvent} /> Male
                     <input type="radio" name="gender" value="female" onChange={formEvent} /> Female
                     {formErrors.gender && <span className="error">{formErrors.gender}</span>}
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
       
      `}
      />

      <ReactCode
        file="validation"
        dot="js"
        code={`
     export function validation(value) {
        const errors = {};
        const { name, username, email,mobile, password, c_password, lang, gender } = value;
      
        //Todo: name validation
        if (!name) {
          errors.name = "name in required";
        } else {
          let x = name.match(/^[a-zA-Z]+$/);
          // for only name /^[a-zA-Z]+$/
          // for name and last name /^[a-zA-Z ]+$/
          if (!x) {
            errors.name = "invaid name";
          }
        }
      
        //Todo: username validation
        if (!username) {
          errors.username = "username in required";
        } else {
          let x = username.match(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/);
          if (!x) {
            errors.username = "invaid username";
          }
          if (username === name) {
            errors.username = "name and username are matching";
          }
        }
        //Todo: email validation
        if (!email) {
          errors.email = "email in required";
        } else {
          let x = email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
          if (!x) {
            errors.email = "invalid email";
          }
        }
      
        //Todo: mobile validation
        if (!mobile) {
          errors.mobile = "mobile in required";
        } else {
          let x = mobile.match(/^\+[1-9]{1}[0-9]{11,11}$/);
          if (!x) {
            errors.mobile = "invalid mobile number plz use +91Number";
          }
        }
      
        //Todo: password validation
        if (!password) {
          errors.password = "password in required";
        } else {
          let x = password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,15}$/);
          if (!x) {
            errors.password = "password must be (1 min: uppercase , lowercase ,special character, number ) (letter : 8 min & 13 max )";
          }
        }
      
        //Todo: confirm password validation
        if (!c_password) {
          errors.c_password = "confirm password in required";
        } else {
          if (password !== c_password) {
            errors.c_password = "password not matching";
          }
        }
      
        if (!lang) {
          errors.lang = "lang in required";
        }
        if (!gender) {
          errors.gender = "gender in required";
        }
        if (!gender) {
          errors.isValid = false;
        }
        return errors;
      }
      
     `}
      />
      <ul data-ul="demo form validation exmaple"></ul>
      <ExmapleForm />
    </>
  );
}
