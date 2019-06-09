import React, { Fragment, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form
          onSubmit={e => onSubmit(e)}
          className="form"
          action="create-profile.html"
        >
          <div className="form-group">
            <input
              value={name}
              type="text"
              placeholder="Name"
              name="name"
              required
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              value={email}
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={e => onChange(e)}
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              value={password}
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              value={password2}
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              onChange={e => onChange(e)}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </div>
    </Fragment>
  );
};

export default Register;
