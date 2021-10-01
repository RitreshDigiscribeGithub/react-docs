import React, { useState, useEffect } from "react";
import { validation } from "./validation";

export default function ExmapleForm() {
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
        <div className="row">
          <div className="col-md-6">
            <p>
              <label>name</label>
              <input type="text" name="name" onChange={formEvent} />
              {formErrors.name && <span className="error">{formErrors.name}</span>}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <label>username</label>
              <input type="text" name="username" onChange={formEvent} />
              {formErrors.username && <span className="error">{formErrors.username}</span>}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <label>email</label>
              <input type="text" name="email" onChange={formEvent} />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <label>mobile</label>
              <input type="text" name="mobile" onChange={formEvent} />
              {formErrors.mobile && <span className="error">{formErrors.mobile}</span>}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <label>password</label>
              <input type="text" name="password" onChange={formEvent} />
              {formErrors.password && <span className="error">{formErrors.password}</span>}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <label>confirm password</label>
              <input type="text" name="c_password" onChange={formEvent} />
              {formErrors.c_password && <span className="error">{formErrors.c_password}</span>}
            </p>
          </div>
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
            <p>
              <input type="radio" name="gender" value="male" onChange={formEvent} /> Male &nbsp;&nbsp;&nbsp;
              <input type="radio" name="gender" value="female" onChange={formEvent} /> Female
              {formErrors.gender && <span className="error">{formErrors.gender}</span>}
            </p>
          </div>
          <div className="col-md-12">
            <p>
              <button className="btn btn-primary" disabled={!formErrors} type="submit">
                submit
              </button>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
