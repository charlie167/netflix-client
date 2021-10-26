import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const history = useHistory();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (event) => {
    event.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);

    await axios
      .post("auth/register", { email, username, password })
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input ref={emailRef} type="email" placeholder="email address" />

            <button onClick={handleStart} className="registerButton">
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input ref={usernameRef} type="text" placeholder="username" />
            <input ref={passwordRef} type="password" placeholder="password" />
            <button onClick={handleFinish} className="registerButton">
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
