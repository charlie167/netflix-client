import React, { useRef, useState, useContext } from "react";
import { login } from "../../authContext/ApiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="email or phone number"
          />
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="password"
          />
          <button onClick={handleLogin} className="loginButton">
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>{" "}
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
