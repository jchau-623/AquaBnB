import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./SignUpForm.css"

function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Passwords must match']);
  };

  return (
    <form className="cred-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Sign Up</h2>
      <ul className="cred-errors">
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label className="cred-form-field">
        Email
        <input
          className="cred-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="cred-form-field">
        Username
        <input
          className="cred-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="cred-form-field">
        Password
        <input
          className="cred-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className="cred-form-field">
        Confirm Password
        <input
          className="cred-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <button className="cred-button" type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
