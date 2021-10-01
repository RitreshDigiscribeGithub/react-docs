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
