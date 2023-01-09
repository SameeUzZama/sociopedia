import React, { useState } from "react";

const SignInForm = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};
    if (!emailRegex.test(formValue.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!passwordRegex.test(formValue.password)) {
      newErrors.password =
        "Please enter a valid password (minimum 8 characters, including at least one uppercase letter, one lowercase letter, one special character, and one number)";
    }
    setErrors(newErrors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formValue.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SignInForm;
