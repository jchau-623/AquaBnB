import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';


function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className="cred-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Log In</h2>
      <ul className="cred-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="cred-form-field">
        Username / Email
        <input
          className="cred-input"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
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
      <button className="cred-button" type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
