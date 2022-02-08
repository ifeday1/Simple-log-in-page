import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="login_form">
          <div className="login__form">
            <label>Username</label>
            <input
              type="text"
              onChange={usernameHandler}
              value={username}
            ></input>
          </div>
          <div className="login__form">
            <label>Password</label>
            <input
              type="password"
              onChange={passwordHandler}
              value={password}
            ></input>
          </div>

          <button type="submit" className="btn">
            LOGIN
          </button>
          <h4>
            Register if new to this page <span className="reg"> Register</span>
          </h4>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
